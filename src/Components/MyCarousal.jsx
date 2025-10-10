import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";

import Motion4 from "../assets/motion-4.jpg";
import Motion6 from "../assets/motion-6.jpg";
import Motion5 from "../assets/bus_img.png";
import Motion7 from "../assets/village-bus.png";




const Mycarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000, // time between slides (ms)
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
         <CarouselItem>
          <img src={Motion5} alt="Slide 3" className="w-full h-full" />
        </CarouselItem>
         <CarouselItem>
          <img src={Motion7} alt="Slide 4" className="w-full h-full" />
        </CarouselItem>
      </CarouselContent>
      {/* No CarouselPrevious / CarouselNext for clean autoplay */}
    </Carousel>
  );
};

export default Mycarousel;
