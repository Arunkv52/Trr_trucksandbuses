import React, { useState } from 'react'
import './Main.css'
import Framermotion from './Framermotion'
import { motion } from 'framer-motion'
import VolksImg from '../assets/ban-img.jpg'
import Myaccordition from './Myaccordition'
import About from './About'
import EicherLogo from '../assets/trr-trcuks-buses.svg'
import MyCarousal from './MyCarousal'
import { useForm } from 'react-hook-form'


const Main = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    const userdata = {
      username: data.name,
      email: data.email,
      phone: data.tel,
      comments: data.textarea,
    };
    console.log(userdata);
  };

  return (
    <>
      <main>
        <section className='main-bg'>
          <div className='main-content relative top-20 left-0 text-white px-5'>
            <img src={EicherLogo} alt='' className='w-[200px]' />
            <div className='main-cont-txt'>
              <h3 className='text-[35px] py-[200px] font-bold'>
                Explore vehicles built for performance, <br /> ready for every
                road and challenge.
              </h3>
            </div>
          </div>
        </section>
        <section className='main-next-bg md:py-20 py-0' id='About'>
          <div className='md:w-2/3 md:px-10 px-5 w-full py-10'>
            <h1 className='md:text-4xl text-[22px] font-bold uppercase pb-3'>
              <span className='text-red-700'>
                <strong>About</strong>
              </span>{' '}
              Trr Trucks and Buses
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
              className='text-[18px] md:text-[26px] font-medium'
            >
              Building on its rich legacy in the automobile industry, TRR has
              added a new milestone by launching the largest sales point for the
              premium and high-performing brand <strong> Eicher</strong> in the
              commercial vehicle segment. This marks a turning point in the
              market, where expectations are higher than ever — and TRR meets
              them with the same exceptional quality of service offered across
              all its divisions.
            </motion.h1>
          </div>
          <Framermotion />
        </section>
        <section className='bg-white md:px-20 px-2 md:py-25' id='Products'>
          <motion.dev
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className='abt-content '>
              <h3 className='md:text-[40px] text-3xl font-semibold py-2 w-full'>
                We have a continuously growing parts and service network that is
                supported by a connected ecosystem to deliver superior uptime,{' '}
                <span className='text-[#0000008e]'>
                  {' '}
                  as well as innovative service - solutions that ensure higher
                  productivity for our customers.
                </span>
              </h3>
            </div>
            <div className='content-3 py-10 md:flex justify-start align-middle md:gap-10'>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <img src={EicherLogo} alt='' />
                <h5 className='text-2xl font-bold py-2 uppercase'>
                  Heavy Duty Trucks
                </h5>
                <p className='py-5 md:text-[15px]'>
                  The new range of BS VI Eicher Pro Heavy Duty haulage trucks
                  and tractors, available from 18.5-55 tonne GVW, is dsigned and
                  developed to provide unparalleled business advantage by
                  maximizing product performance right through the life cycle of
                  the vehicles and minimizing the cost of operations
                </p>
              </div>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <img src={EicherLogo} alt='' />
                <h5 className='text-2xl font-bold py-2 uppercase'>
                  Light & Medium Duty Trucks
                </h5>
                <p className='py-5 md:text-[15px]'>
                  Our range of Light and Medium Duty trucks comprises the
                  new-gen Pro 2000 Series and the advanced Pro 3000 series,
                  designed keeping in mind both the owner's and driver's needs.
                  These series are suitable for a variety of applications from
                  4.9 ton to 17.75 ton GVW.
                </p>
              </div>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <img src={EicherLogo} alt='' />
                <h5 className='text-2xl font-bold py-2 uppercase'>Buses</h5>
                <p className='py-5 md:text-[15px]'>
                  Eicher presents the all new Eicher BSVI Bus Range, the smart,
                  comfortable, advanced and efficient range of next gen buses
                  designed to deliver maximum Fuel Efficiency and Profitability.
                  Choose among our School, Staff, Tourist or Route Permit BSVI
                  bus range, We have a bus tailored for your every need!
                </p>
              </div>
              <div className='cont-1 bg-[#f2f2f2] p-5 m-3 md:m-0'>
                <img src={EicherLogo} alt='' />
                <h5 className='text-2xl font-bold py-2 uppercase'>
                  Small Vehicles (EV)
                </h5>
                <p className='py-5 md:text-[15px]'>
                  Eicher Motors, a prominent name in the Indian automotive
                  industry, is making significant strides in the electric
                  vehicle (EV) segment, particularly with its small commercial
                  vehicles. This move aligns with the global shift towards
                  sustainable transportation and the growing demand for
                  eco-friendly logistics solutions.
                </p>
              </div>
            </div>
          </motion.dev>
        </section>
        {/* include new Scroll */}
        <section id='scr-gallery md:py-10'>
          <div className='scr-item md:flex flex-row-reverse md:flex-row overflow-x-hidden'>
            <div className='md:w-1/2 w-full md:p-20 p-5 text-white'>
              <h1 className='md:text-[26px] font-bold uppercase'>
                Eicher Models
              </h1>
              <ul className='py-5 md:text-[24px] text-[16px]'>
                <li>1. Heavy Duty Trucks</li>
                <li>2. Light & Medium Duty Trucks</li>
                <li>3. Buses</li>
                <li>4. Small Vehicles (EV)</li>
              </ul>
            </div>
            <div className='md:w-1/2 w-full bg-white'>
              <MyCarousal />
            </div>
          </div>
        </section>
        <section id='Services'>
          <div className='vol-img-design text-white md:flex md:flex-row flex-row-reverse justify-evenly align-top'>
            <div className='md:w-1/2 w-full h-auto'>
              <img src={VolksImg} alt='' className='' />
            </div>
            <div className='md:w-1/2 w-full md:px-20 px-4 md:py-10 py-10'>
              <h4 className='md:text-[26px] font-bold uppercase'>Services</h4>
              <p className='pt-5 text-[15px] pb-2'>
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
        <section>
          <div
            className='contact-container bg-white/90 pb-20 md:cursor-pointer'
            id='Contact'
          >
            <div className='contact md:pt-30 pt-20 pb-10 md:px-5 px-5'>
              <h1 className='text-black md:text-4xl text-4xl font-extrabold'>
                Need Help?
              </h1>
              <h1 className='text-black/50 md:text-4xl text-[30px]'>
                Contact Our Team
              </h1>
            </div>
            <div className='full-contain md:flex justify-items-start md:pb-10 pb-0'>
              <div className='form-contact md:px-5 px-5 md:w-1/2 w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                  <label htmlFor='name'></label>
                  <input
                    type='text'
                    name='name'
                    id=''
                    placeholder='Enter Your Name'
                    className='bg-white p-3 outline-none'
                    {...register('name', {
                      required: { value: true, message: "user name is required" },
                      maxLength: { value: 30, message: 'Maximum 30 letters only allowed' },
                      minLength: { value: 3, message: 'minimum above 3 letters need' }
                    })}
                  />
                  {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  <label htmlFor='email'></label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    id=''
                    className='bg-white p-3 outline-none'
                    {...register('email', {
                      required: { value: true, message: "Email is required" },
                      maxLength: { value: 30, message: 'Maximum 30 letters only allowed' },
                      minLength: { value: 3, message: 'minimum above 3 letters need' }
                    })}
                  />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                  <label htmlFor='tel'></label>
                  <input
                    type='tel'
                    name='tel'
                    placeholder='Enter your phone number'
                    id=''
                    className='bg-white p-3 outline-none'
                    {...register('tel', {
                      required: { value: true, message: "Phone is required" },
                      maxLength: { value: 10, message: 'Maximum 30 letters only allowed' },
                      minLength: { value: 10, message: 'minimum above 3 letters need' }
                    })}
                  />
                  {errors.tel && <p className='text-red-500'>{errors.tel.message}</p>}
                  <label htmlFor='comments'></label>
                  <textarea
                    name='textarea'
                    id=''
                    cols='5'
                    rows='3'
                    className='bg-white p-3 outline-none'
                    placeholder='Comments'
                    {...register('textarea', {
                      required: { value: true, message: "Comments is required" },
                      maxLength: { value: 300, message: 'max length is 300' },
                      minLength: { value: 3, message: 'minimum above 3 letters need' }
                    })}
                  ></textarea>
                  {errors.textarea && <p className='text-red-500'>{errors.textarea.message}</p>}

                  {/* Here add a Recaptacha */}
                  <button
                    type='submit'
                    className='bg-[#ff0000] hover:bg-blue-900 text-black font-bold py-3 cursor-pointer'
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className='md:w-1/2 w-full md:px-30 px-5 md:py-0 py-10'>
                <h6 className='text-black md:text-4xl text-2xl'>
                  Please fill out the form below to request any information or
                  to&nbsp;
                  <span className='text-black/50 font-bold'>
                    drop us feedback.
                  </span>
                </h6>
                <p className='py-5'>
                  Please fill out the form below to request more information,
                  share your questions, or provide us with your valuable feedback.
                  We appreciate your input and will get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Main
