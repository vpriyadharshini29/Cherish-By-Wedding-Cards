import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

import Logo from "../assets/images/footer-logo.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-peach text-gray-900 font-poppins px-6 md:px-16 py-10 border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start gap-4">
          <img src={Logo} alt="Wedding Logo" className="w-28 md:w-32" />
          <p className="text-[16px] font-semibold leading-snug">
            Largest Wedding Cards <br /> Collections in Chennai
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm font-medium">Follow us with</span>
            <div className="flex gap-3 text-xl text-gray-700">
              <a href="#"><FaInstagram className="hover:text-amber" /></a>
              <a href="#"><FaFacebookF className="hover:text-amber" /></a>
              <a href="#"><FaYoutube className="hover:text-amber" /></a>
              <a href="#"><FaWhatsapp className="hover:text-amber" /></a>
            </div>
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-3 text-[16px]">
            <li><a href="/aboutus" className="hover:text-amber">About Us</a></li>
            <li><a href="/contactus" className="hover:text-amber">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-amber">FAQ</a></li>
            <li>
              <a href="/howtoorder" className="hover:text-amber">
                How to order wedding invitation online?
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
          <ul className="space-y-3 text-[16px]">
            <li><a href="/" className="hover:text-amber">Home</a></li>
            <li><a href="/weddingcards" className="hover:text-amber">Wedding Cards</a></li>
            <li><a href="/hinduweddingcards" className="hover:text-amber">Hindu Wedding Cards</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4 text-[16px]">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaRegEnvelope />
              <span>wedtype@weddingcards.com</span>
            </div>
            <p>Operating hours: 10.00Am to 10.00Pm</p>
            <p className="font-semibold">Monday - Sunday</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 pt-4 border-t border-gray-400 text-center text-sm text-gray-800">
        <span className="inline-flex items-center justify-center gap-2">
          © <span className="text-base">🄯</span> Wed knot craft India Private Limited. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
