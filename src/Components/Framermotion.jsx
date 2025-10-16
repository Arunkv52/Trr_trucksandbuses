import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Slide_1 from '../assets/motion-1.webp';
import Slide_2 from '../assets/motion-6.jpg';
import Slide_3 from '../assets/motion-3.webp';
import StaffBus from '../assets/Satff_bus.png'
import SchoolBus from '../assets/school_bus.jpg'
import Slide_4 from '../assets/motion-4.jpg';
import TipperImg from '../assets/tipper-img.jpg'



const images = [Slide_1, Slide_2, Slide_3,TipperImg, StaffBus, SchoolBus, Slide_4];

const HorizontalScrollSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((images.length - 1) * window.innerWidth)] // scroll distance
  );

  return (
    <section
      ref={targetRef}
      style={{ height: `${images.length * 100}vh`, position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100dvh',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            width: `${images.length * 100}vw`,
            height: '100%',
            x,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                width: '100dvw',
                height: '100%',
                flexShrink: 0,
                padding:'10px'
                
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100dvw',
                  height: '650px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
