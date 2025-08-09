import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Motion4 from "../assets/motion-4.jpg";
import Motion6 from "../assets/motion-6.jpg";

const MyCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000, // time between slides (ms)
          stopOnInteraction: false, // keep autoplay after manual scroll
        }),
      ]}
      opts={{
        loop: true, // infinite looping
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <img src={Motion4} alt="Slide 1" className="w-full h-full" />
        </CarouselItem>
        <CarouselItem>
          <img src={Motion6} alt="Slide 2" className="w-full h-full" />
        </CarouselItem>
      </CarouselContent>
      {/* No CarouselPrevious / CarouselNext for clean autoplay */}
    </Carousel>
  );
};

export default MyCarousel;
