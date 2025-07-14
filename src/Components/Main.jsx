import React from 'react'
import './Main.css'
import Framermotion from './Framermotion'
import { motion } from 'framer-motion'
import VolksImg from '../assets/volks-img.webp'
import Myaccordition from './Myaccordition'
import About from './About'

const Main = () => {
  return (
    <>
      <main>
        <section className='main-bg'>
          <div className='main-content relative top-1/2 left-0 text-white px-5'>
            <p className='text-[15px] font-semibold'>Meet the new XC90</p>
            <h3 className='text-[35px] pb-5 font-bold'>
              Our iconic large SUV, <br /> made even better
            </h3>
          </div>
        </section>
        <section className='main-next-bg md:py-20 py-0'>
          <div className='md:w-2/3 md:px-20 px-5 w-full py-10'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
              className='text-[20px] md:text-[30px] font-semibold'
            >
              Hi, welcome to my portfolio. I’m a hands-on Digital Creative
              Director focused on crafting innovative digital experiences. Dive
              in to explore my work, my process, and how I bring ideas to life
              through collaboration and creativity.
            </motion.h1>
          </div>
          <Framermotion />
        </section>
        <section className='bg-white md:px-20 px-2 md:py-25'>
          <motion.dev
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className='abt-content '>
              <p className='text-[17px] md:text-[15px] font-bold'>
                About TRR Group
              </p>
              <h3 className='md:text-[40px] text-3xl font-semibold py-2 w-full'>
                We’re dedicated to giving you the freedom to{' '}
                <span className='text-[#0000008e]'>
                  {' '}
                  move in a personal, sustainable and safe way.
                </span>
              </h3>
            </div>
            <div className='content-3 py-10 md:flex justify-start align-middle md:gap-10'>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <h5 className='text-2xl font-bold'>Electrification</h5>
                <p className='py-10 md:text-[15px]'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <h5 className='text-2xl font-bold'>Electrification</h5>
                <p className='py-10 md:text-[15px]'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <h5 className='text-2xl font-bold'>Electrification</h5>
                <p className='py-10 md:text-[15px]'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  impedit mollitia deleniti. Fuga quibusdam earum nam sed
                  veritatis error accusamus.
                </p>
              </div>
            </div>
          </motion.dev>
        </section>
        <section>
          <div className='vol-img-design text-white md:flex justify-evenly align-top'>
            <div className='md:w-1/2 w-full'>
              <img src={VolksImg} alt='' className=''/>
            </div>
            <div className='md:w-1/2 w-full md:px-20 px-4 md:py-20 py-10'>
              <h4 className='md:text-[26px] font-bold'>Novas Learning</h4>
              <p className='pt-5 text-[15px] pb-2'>
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
      </main>
    </>
  )
}

export default Main
