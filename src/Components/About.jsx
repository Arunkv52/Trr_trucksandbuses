import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div className='md:py-40 py-20 md:px-30 px-5 bg-[#fff]'>
        <motion.div
          className='about-text'
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <p className='py-3 md:text-[24px] text-[17px] font-medium'>
            {' '}
            TRR Tractors started in 2001 has its own prominent place in the
            agriculture equipment market in its territory establishing a strong
            customer base and confidence through the right suggestions for
            purchase of product to its customers and also the non tiring
            customer support through which we have won the credibility of our
            customer paving way for our growth which has given us the confidence
            to venture in to more & more endeavors.
          </p>
          <p className='py-3 md:text-[24px] text-[17px] font-medium'>
            {' '}
            TRR Tractors started in 2001 has its own prominent place in the
            agriculture equipment market in its territory establishing a strong
            customer base and confidence through the right suggestions for
            purchase of product to its customers and also the non tiring
            customer support through which we have won the credibility of our
            customer paving way for our growth which has given us the confidence
            to venture in to more & more endeavors.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default About
