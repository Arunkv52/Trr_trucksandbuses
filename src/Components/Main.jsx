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
            <p className="text-[15px] font-semibold">Meet the new XC90</p>
            <h3 className="text-[35px] pb-5 font-bold">
              Our iconic large SUV, <br /> made even better
            </h3>
          </div>
        </section>
        <section className="main-next-bg md:py-20 py-0">
          <div className="md:w-2/3 md:px-20 px-5 w-full py-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
              className="text-[20px] md:text-[30px] font-semibold"
            >
              Hi, welcome to my portfolio. I’m a hands-on Digital Creative
              Director focused on crafting innovative digital experiences. Dive
              in to explore my work, my process, and how I bring ideas to life
              through collaboration and creativity.
            </motion.h1>
          </div>
          <Framermotion />
        </section>
        <section className="bg-white md:px-20 px-2 md:py-25">
          <motion.dev
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="abt-content ">
              <p className="text-[17px] md:text-[15px] font-bold">
                About TRR Group
              </p>
              <h3 className="md:text-[40px] text-3xl font-semibold py-2 w-full">
                We’re dedicated to giving you the freedom to{" "}
                <span className="text-[#0000008e]">
                  {" "}
                  move in a personal, sustainable and safe way.
                </span>
              </h3>
            </div>
            <div className="content-3 py-10 md:flex justify-start align-middle md:gap-10">
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">Electrification</h5>
                <p className="py-10 md:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">Electrification</h5>
                <p className="py-10 md:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
              <div className="cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0">
                <h5 className="text-2xl font-bold">Electrification</h5>
                <p className="py-10 md:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
            </div>
          </motion.dev>
        </section>
        <section>
          <div className="vol-img-design text-white md:flex justify-evenly align-top">
            <div className="md:w-1/2 w-full h-auto">
              <img src={VolksImg} alt="" className="" />
            </div>
            <div className="md:w-1/2 w-full md:px-20 px-4 md:py-20 py-10">
              <h4 className="md:text-[26px] font-bold">Novas Learning</h4>
              <p className="pt-5 text-[15px] pb-2">
                Na dianteira, o capô mais alto e com linhas marcadas conectam
                com o para-choque, que agora recebe nova grade com friso cromado
                entre os faróis, estes que também recebem detalhe cromado na
                assinatura.
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
        <div className="contact-container bg-white/90 pb-20">
          <div className="contact md:pt-30 pt-20 pb-10 md:px-5 px-5">
            <h1 className="text-black md:text-7xl text-4xl">
              Let's sculpt Success
            </h1>
            <h1 className="text-black/50 md:text-7xl text-[30px]">together!</h1>
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
                  type="email"
                  name="tel"
                  placeholder="Enter your email"
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
                Connect with us to embark on a journey of impactful{" "}
                <span className="text-black/50 font-bold">
                  brand consulting solutions.
                </span>{" "}
                Your brand transformation{" "}
                <span className="text-black/50 font-bold">begins here.</span>
              </h6>
              <p className="py-10 text-black text-[18px]">
                {" "}
                Or start a conversation{" "}
                <a
                  href="#"
                  className="text-red-500 hover:text-red-600 underline"
                >
                  project@trrinfra.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
