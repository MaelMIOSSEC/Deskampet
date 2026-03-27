import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { animalImages } from "../../assets/animals/index.ts";

export function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

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
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-10"
    >
      <CarouselContent>
        {animals.map((path, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/5"
          >
            <div className="pt-4">
              <img
                src={path}
                alt="Animal"
                className="rounded-lg object-cover h-110 w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
