import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import readline from 'readline';
import slugify from 'slugify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

function extractUrl(input) {
  const match = input.match(/\[.*?\]$$(.*?)$$/);
  return match ? match[1] : input;
}

async function uploadImageToSanity(imageUrl) {
  try {
    const extractedUrl = extractUrl(imageUrl);
    console.log(`Uploading image: ${extractedUrl}`);
    const response = await axios.get(extractedUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: extractedUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.message);
    return null;
  }
}

async function deleteAllProducts() {
  try {
    console.log('Deleting all existing products...');
    await client.delete({query: '*[_type == "product"]'});
    console.log('All existing products deleted successfully.');
  } catch (error) {
    console.error('Error deleting products:', error.message);
  }
}

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}

async function importData() {
  try {
    const shouldDelete = await askQuestion('Do you want to delete all existing products before importing? (y/n): ');
    
    if (shouldDelete.toLowerCase() === 'y') {
      await deleteAllProducts();
    }

    console.log('Migrating data, please wait...');

    const response = await axios.get('https://template-03-api.vercel.app/api/products');
    const products = response.data.data;
    console.log("Products fetched:", products.length);

    for (const product of products) {
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      const slug = slugify(product.productName, { lower: true, strict: true });

      const sanityProduct = {
        _type: 'product',
        productName: product.productName,
        slug: {
          _type: 'slug',
          current: slug
        },
        category: product.category,
        price: product.price,
        inventory: product.inventory,
        colors: product.colors || [], 
        status: product.status,
        description: product.description,
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
      };

      await client.create(sanityProduct);
      console.log(`Product created: ${product.productName} with slug: ${slug}`);
    }

    console.log('Data migrated successfully!');
  } catch (error) {
    console.error('Error in migrating data:', error.message);
  }
}

importData();

