import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-15 bg-[#030436]">
        <div className="footer-row-1 text-center">
          <p className="text-[20px]">
            <strong>Quick Links</strong>
          </p>
          <ul className="flex justify-center items-center gap-6 gap-md-10 flex-wrap py-5 underline">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
           
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-row-2 text-center py-3">
          <p className="text-[20px]">
            <strong>Branches</strong>
          </p>
          <ul className="flex justify-center items-center gap-6 gap-md-10 flex-wrap py-5 underline">
            <li>
              <a href="">Coimbatore</a>
            </li>
            <li>
              <a href="">Pollachi</a>
            </li>
            <li>
              <a href="">Ooty</a>
            </li>
            <li>
              <a href="">Palladam</a>
            </li>
            <li>
              <a href="">Annur</a>
            </li>
            <li>
              <a href="">Udumalpet</a>
            </li>
          </ul>
        </div>
        <div className="footer-row-3 py-3">
          <p className="text-[20px] text-center">
            <strong>Main Branch</strong>
          </p>
          <ul className="flex justify-center items-center gap-5 flex-wrap py-2">
            <li>
              <a href="">
                New No.5, 1st Cross Street, Seethammal Extn, Teynampet, Chennai
                -600 018 *
              </a>
            </li>
            <li>
              <a href="">+91 98410 12828</a>
            </li>
          </ul>
        </div>
        <div className="footer-row-4 pt-5">
          <p className="text-center text-[13px]">
            © 2025 Prism Adverto Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
