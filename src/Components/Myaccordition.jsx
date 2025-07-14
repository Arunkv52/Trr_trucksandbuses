import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion'

const Myaccordition = () => {
  return (
    <>
      <Accordion
        type='single'
        collapsible
        className='w-full py-3'
        defaultValue='item-1'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger className={'text-[16px] text-[#ffffffa7]'}>Product Information</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p className='text-[15px]'>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className={'text-[16px] text-[#ffffffa7]'}>Shipping Details</AccordionTrigger>
          <AccordionContent className='flex flex-col gap-4 text-balance'>
            <p className='text-[15px]'>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
           
          </AccordionContent>
        </AccordionItem>
       
      </Accordion>
    </>
  )
}

export default Myaccordition
