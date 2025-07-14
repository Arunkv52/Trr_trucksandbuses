import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='text-white py-15 bg-[#010115]'>
        <div className='footer-row-1 text-center'>
          <p className='text-[20px]'>
            <strong>Quick Links</strong>
          </p>
          <ul className='flex justify-center items-center gap-6 gap-md-10 flex-wrap py-8 underline'>
            <li>
              <a href=''>Our Cars</a>
            </li>
            <li>
              <a href=''>Shop</a>
            </li>
            <li>
              <a href=''>Owners</a>
            </li>
            <li>
              <a href=''>About us</a>
            </li>
          </ul>
        </div>
        <div className='footer-row-2 text-center'>
          <p className='text-[20px]'>
            <strong>Office Location</strong>
          </p>
          <ul className='flex justify-center items-center gap-6 gap-md-10 flex-wrap py-8 underline'>
            <li>
              <a href=''>Coimbatore</a>
            </li>
            <li>
              <a href=''>Ooty</a>
            </li>
            <li>
              <a href=''>Palladam</a>
            </li>
            <li>
              <a href=''>Tiruppur</a>
            </li>
            <li>
              <a href=''>Udumalpet</a>
            </li>
            <li>
              <a href=''>Chennai</a>
            </li>
          </ul>
        </div>
        <div className="footer-row-3 py-5">
            <ul className='flex justify-center items-center gap-5 flex-wrap'>
                <li><a href="">3 Sulur, Coimbatore *</a></li>
                <li><a href=""> info@trrgroup.in *</a></li>
                <li><a href="">+91 70106 50303 *</a></li>
            </ul>
        </div>
        <div className="footer-row-4">
            <p className='text-center text-[14px]'>© 2025 Prism Adverto Pvt Ltd</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
