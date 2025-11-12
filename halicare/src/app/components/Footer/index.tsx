"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#001F54] text-white px-6 md:px-12 py-8 font-albertsans">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Image
            src="/assets/icons/halicare-logo.svg"
            alt="Hali Care Logo"
            width={64}
            height={64}
            className="object-contain select-none"
          />
        </div>
        <div className="w-full sm:w-auto md:-mt-20">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            {["About", "Clinics", "Support", "Counseling Services"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            {["Help", "Cookies", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#233578] mt-6 pt-4 text-center text-base select-none">
        Copyright@HaliCare2025
      </div>
    </footer>
  );
};
export default Footer;