import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="md:py-30 py-20 md:px-30 px-5 bg-[#fff]">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h4 className="text-4xl font-bold uppercase py-2">Parts and Accessories</h4>
          <p className="py-3 md:text-[28px] md:font-bold text-[17px] font-medium">
            {" "}
            When you choose Eicher genuine parts and lubricants, you gain the
            assurance of a <span className="text-black/50">perfect fit for your vehicles.</span> These parts have been
            meticulously developed, rigorously tested, and thoroughly validated
            by<span className="text-black/50"> our team of experts.</span> They come with a performance warranty when
            fitted in an authorised workshop. You can easily get the essential <span className="text-black/50">
            Eicher genuine parts & lubricants</span> from a vast network of Eicher
            Parts Distribution Centers and various other channels.
          </p>
         
        </motion.div>
      </div>
    </>
  );
};

export default About;
