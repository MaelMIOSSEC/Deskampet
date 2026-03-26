import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { animalImages } from "../assets/animals/index.ts";

export function HomeCarousel() {
  const animals = [
    animalImages.brownBulldog,
    animalImages.redCat,
    animalImages.beigeGoldenRetriever,
    animalImages.brownCat,
    animalImages.orangeCat,
    animalImages.beigeCat,
    animalImages.threeColoredGuineaPig,
    animalImages.lightBrownCat,
    animalImages.blackWhiteDogs,
    animalImages.tabbyCat,
    animalImages.blackDog,
    animalImages.blackWithCat,
    animalImages.whiteGoldenRetriever,
    animalImages.threeColoredDog,
    animalImages.whiteDog,
    animalImages.whiteCat,
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {animals.map((animal, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={animal} alt="img" draggable="false" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
