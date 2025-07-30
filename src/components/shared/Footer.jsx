import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#e0e9e3] py-10 px-6 md:px-20 text-sm text-gray-800">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p className="mb-1">support@amrutam.global</p>
          <p>Amrutam Pharmaceuticals Pvt Ltd.,<br />
            chitragupt ganj, Nai Sadak, Lashkar,<br />
            Gwalior - 474001</p>
          <p className="mt-2">+91 9713171999</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-white">
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaInstagram /></div>
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaYoutube /></div>
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaLinkedinIn /></div>
            <div className="bg-[#3b5e41] p-2 rounded-full"><FaPinterestP /></div>
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Privacy Policy for Mobile Apps</a></li>
            <li><a href="#">Shipping, return and cancellation Policy</a></li>
            <li><a href="#">International Delivery</a></li>
            <li><a href="#">For Businesses, Hotels, and Resorts</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-sm">
          <h3 className="font-semibold mb-2">
            Subscribe to our Newsletter and join Amrutam Family today!
          </h3>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-l-full border border-gray-300 w-full focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
