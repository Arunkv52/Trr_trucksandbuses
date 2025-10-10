import React from "react";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-15 bg-[#030436]">
        <div className="md:px-0 md:ml-[80px] ml-0 px-5 md:flex justify-start">
          <div className="md:w-[60%] w-full">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" className="md:w-[250px]" />
              <p className="text-[18px] text-left pt-5">
                <strong>Register Office Location :</strong>
              </p>
              <ul className="gap-5 flex-wrap py-2">
                <li className="pb-5">
                  <a href="">
                    New No.5, 1st Cross Street, Seethammal Extn,
                    <br /> Teynampet, Chennai -600 018
                  </a>
                </li>
                <li>
                  <a href="tel:044-24343828">Phone : 044-24343828</a>
                </li>
                <li>
                  <a href="tel:91769173458">Mobile : +91 91769 173458</a>
                </li>
                <li>
                  <a href="mailto:info@trrtrucksandbuses.in">
                    Mail : info@trrtrucksandbuses.in
                  </a>
                </li>
                <li>
                  <a href="https://www.trrgroup.in/">
                    Group of companies : www.trrgroup.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-[15%] w-full">
            <div className="footer-row-1 text-left md:py-0 py-5">
              <p className="text-[20px]">
                <strong>Quick Links</strong>
              </p>
              <ul className="py-3 underline ">
                <li className="pt-1">
                  <a href="#About">About</a>
                </li>
                <li className="pt-1">
                  <a href="#Products">Products</a>
                </li>
                <li className="pt-1">
                  <a href="#Services">Services</a>
                </li>

                <li className="pt-1">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-[25%] w-full">
            <div className="footer-row-2 text-left">
              <p className="text-[20px]">
                <strong>Our Branches</strong>
              </p>
              <ul className="text-[15px] md:py-3">
                <a href="#">
                  <li className="pb-1 ">
                    <p className="text-[18px] font-semibold pb-2">Vellore</p>
                    <span>
                      No.1/1A-1, Chennai Bangalore High Way, Mottur, Abdullapuram, Vellore - 632010
                    </span>
                  </li>
                </a>
                <a href="#">
                  <li className="pt-3 pb-1 ">
                    <p className="text-[18px] font-semibold pb-2">Redhills</p>
                    <span>
                     No. 501, GNT Road, Thandalkazhani, Red Hills, Chennai - 600052
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-row-4 pt-8 md:px-20 px-5">
          <p className="text-right text-[13px]">
            © 2025 TRR Group. Developed by{" "}
            <span className="text-red-500">
              <a href="https://www.prismadverto.com/">Prism Adverto Pvt Ltd</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
