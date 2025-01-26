import Image from "next/image";
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    id: 1,
    image: "/images/men1.png",
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3 895",
    description: "Men's Short-Sleeve Running Top",
    category: "Men",
  },
  {
    id: 2,
    image: "/images/men2.png",
    title: "Nike Dri-FIT Challenger",
    price: "₹ 2 495",
    description: "Men's 18cm 2-in-1 Versatile Shorts",
    category: "Men",
  },
  {
    id: 3,
    image: "/images/women1.png",
    title: "Nike Dri-FIT ADV Run Division",
    price: "₹ 5 295",
    description: "Women's Long-Sleeve Running Top",
    category: "Women",
  },
  {
    id: 4,
    image: "/images/women2.png",
    title: "Nike Fast",
    price: "₹ 3 795",
    description: "Women's Mid-Rise7/8 Running Leggings ",
    category: "Women",
  },
];
export function Gearup() {
  return (
    <div>
    <Carousel className="w-full  md:max-w-screen-lg mx-auto ">
      <CarouselContent className="-ml-1 mx-auto  my-0 px-4 py-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                    
                  <Image
                      src={products[index % products.length].image}
                      alt={`Carousel Image ${index + 1}`}
                      width={300} 
                      height={300}
                      className="object-cover rounded-md"
                      priority={index === 0} // Prioritize the first image for faster loading
                    />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <CarouselPrevious className=" sm:ml-[60px] border-none opacity-50 md:flex" />
        <CarouselNext className=" sm:mr-[60px] border-none opacity-50 md:flex" />
    </Carousel>
    </div>
  )
}
export default Gearup
