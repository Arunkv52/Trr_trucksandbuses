import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="md:py-40 py-20 md:px-30 px-5 bg-[#fff]">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="py-3 md:text-[24px] text-[17px] font-medium">
            {" "}
            When you choose Eicher genuine parts and lubricants, you gain the
            assurance of a perfect fit for your vehicles. These parts have been
            meticulously developed, rigorously tested, and thoroughly validated
            by our team of experts. They come with a performance warranty when
            fitted in an authorised workshop. You can easily get the essential
            Eicher genuine parts and lubricants from a vast network of Eicher
            Parts Distribution Centers and various other channels.
          </p>
         
        </motion.div>
      </div>
    </>
  );
};

export default About;
