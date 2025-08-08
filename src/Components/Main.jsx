import React from "react";
import "./Main.css";
import Framermotion from "./Framermotion";
import { motion } from "framer-motion";
import VolksImg from "../assets/ban-img.jpg";
import Myaccordition from "./Myaccordition";
import About from "./About";

const Main = () => {
  return (
    <>
      <main>
        <section className="main-bg">
          <div className="main-content relative top-1/2 left-0 text-white px-5">
            <h3 className="text-[35px] pb-5 font-bold">
              Explore vehicles built for performance, <br /> ready for every
              road and challenge.
            </h3>
          </div>
        </section>
        <section className="main-next-bg md:py-20 py-0" id="About">
          <div className="md:w-2/3 md:px-10 px-5 w-full py-10">
          <h1 className="md:text-4xl font-bold pb-3">About Trr Trucks and Buses</h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
              className="text-[20px] md:text-[30px] font-medium"
            >
              Our modern range of light, medium and heavy duty trucks are meant
              to meet your expectations. Safety coupled with comfort, our buses
              ensure perfect mobility. At Eicher, we are ready with green and
              sustainable future-ready solutions.
            </motion.h1>
          </div>
          <Framermotion />
        </section>
        <section className="bg-white md:px-20 px-2 md:py-25" id="Products">
          <motion.dev
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="abt-content ">
              <h3 className="md:text-[40px] text-3xl font-semibold py-2 w-full">
                We have a continuously growing parts and service network that is
                supported by a connected ecosystem to deliver superior uptime,{" "}
                <span className="text-[#0000008e]">
                  {" "}
                  as well as innovative service - solutions that ensure higher
                  productivity for our customers.
                </span>
              </h3>
            </div>
            <div className="content-3 py-10 md:flex justify-start align-middle md:gap-10">
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">Heavy Duty Trucks</h5>
                <p className="py-10 md:text-[15px]">
                  The new range of BS VI Eicher Pro Heavy Duty haulage trucks
                  and tractors, available from 18.5-55 tonne GVW, is dsigned and
                  developed to provide unparalleled business advantage by
                  maximizing product performance right through the life cycle of
                  the vehicles and minimizing the cost of operations
                </p>
              </div>
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">
                  Light & Medium Duty Trucks
                </h5>
                <p className="py-10 md:text-[15px]">
                  Our range of Light and Medium Duty trucks comprises the
                  new-gen Pro 2000 Series and the advanced Pro 3000 series,
                  designed keeping in mind both the owner's and driver's needs.
                  These series are suitable for a variety of applications from
                  4.9 ton to 17.75 ton GVW.
                </p>
              </div>
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">Buses</h5>
                <p className="py-10 md:text-[15px]">
                  Eicher presents the all new Eicher BSVI Bus Range, the smart,
                  comfortable, advanced and efficient range of next gen buses
                  designed to deliver maximum Fuel Efficiency and Profitability.
                  Choose among our School, Staff, Tourist or Route Permit BSVI
                  bus range, We have a bus tailored for your every need!
                </p>
              </div>
            </div>
          </motion.dev>
        </section>
        <section id="Services">
          <div className="vol-img-design text-white md:flex justify-evenly align-top" >
            <div className="md:w-1/2 w-full h-auto">
              <img src={VolksImg} alt="" className="" />
            </div>
            <div className="md:w-1/2 w-full md:px-20 px-4 md:py-10 py-10">
              <h4 className="md:text-[26px] font-bold">Services</h4>
              <p className="pt-5 text-[15px] pb-2">
                My Eicher is an industry-first digital platform designed to help
                Fleet Owners and Managers manage and control their business
                conveniently. This is enabled through features, including Fleet
                Management, Uptime Management, Fuel Management, and a variety of
                Value-Added Services.
              </p>
              {/* Accordition start */}
              <Myaccordition />
            </div>
          </div>
        </section>
        {/* About */}
        <section>
          <About />
        </section>
        {/* Contact */}
        <div className="contact-container bg-white/90 pb-20 md:cursor-pointer" id="Contact">
          <div className="contact md:pt-30 pt-20 pb-10 md:px-5 px-5">
            <h1 className="text-black md:text-4xl text-4xl font-extrabold">
              Need Help? 
            </h1>
            <h1 className="text-black/50 md:text-4xl text-[30px]">Contact Our Team</h1>
          </div>
          <div className="full-contain md:flex justify-items-start md:pb-10 pb-0">
            <div className="form-contact md:px-5 px-5 md:w-1/2 w-full">
              <form action="" method="get" className="flex flex-col gap-3">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  className="bg-white p-3 outline-none"
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="bg-white p-3 outline-none"
                />
                <label htmlFor="tel"></label>
                <input
                  type="tel"
                  name="tel"
                  placeholder="Enter your phone number"
                  id=""
                  className="bg-white p-3 outline-none"
                />
                <label htmlFor="comments"></label>
                <textarea
                  name="textarea"
                  id=""
                  cols="5"
                  rows="5"
                  className="bg-white p-3 outline-none"
                  placeholder="Comments"
                ></textarea>
                {/* Here add a Recaptacha */}
                <button
                  type="submit"
                  className="bg-[#ff0000] hover:bg-blue-900 text-black font-bold py-5 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="md:w-1/2 w-full md:px-5 px-5 md:py-0 py-10">
              <h6 className="text-black md:text-4xl text-2xl">
                Please fill out the form below to request any information or to&nbsp;
                <span className="text-black/50 font-bold">
                  drop us feedback.
                </span>
              </h6>
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
