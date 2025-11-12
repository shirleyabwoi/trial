"use client";
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted!', formData);
    setShowPopup(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
<section id="contact" className="bg-[#D3E1F7] text-[#111855] py-20 px-8 lg:px-36 min-h-[calc(100vh-120px)] relative">
 <div className="max-w-7xl mx-auto">
  <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Contact Us</h2>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
  <div className="flex flex-col space-y-10">
  <h3 className="text-2xl font-bold">Talk to our team</h3>
  <p className="text-[#24315F]">
            Learn more about our team, our mission, our vision and our journey by reaching out to us today.
            </p>
            <div className="flex items-start space-x-5">
              <FaEnvelope className="text-2xl text-[#24315F] mt-1" />
              <div>
                <p className="font-bold text-[#0C1D62]">Email address</p>
                <a href="mailto:halicare@gmail.com" className="text-[#24478F] hover:underline cursor-pointer">
                  halicare@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <FaPhone className="text-2xl text-[#24315F] mt-1" />
              <div>
                <p className="font-bold text-[#0C1D62]">Phone number</p>
                <a href="tel:+2547890643346" className="text-[#24478F] hover:underline cursor-pointer">
                  +2547890643346
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <FaMapMarkerAlt className="text-2xl text-[#24315F] mt-1" />
              <div>
                <p className="font-bold text-[#0C1D62]">Location of office</p>
                <p className="text-[#24315F]">Taj Towers UpperHill</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6 lg:col-span-2">
            <div className="bg-[#001F54] rounded-xl p-12 shadow-lg w-full">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8" id="contactForm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="p-3 rounded-md bg-white text-[#232323] w-full focus:outline-none focus:ring-2 focus:ring-[#283593]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="p-3 rounded-md bg-white text-[#232323] w-full focus:outline-none focus:ring-2 focus:ring-[#283593]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-md bg-white text-[#232323] w-full focus:outline-none focus:ring-2 focus:ring-[#283593]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className="p-3 rounded-md bg-white text-[#232323] w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#283593]"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="bg-[#001F54] rounded-lg w-full sm:w-80 md:w-96 text-center cursor-pointer hover:bg-[#1A237E] transition-colors">
              <button
                type="submit"
                form="contactForm"
                className="text-white font-semibold py-3 px-6 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full relative text-center shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl font-bold text-[#111855] mb-4">Thanks for sending!</h3>
            <p className="text-[#24315F]">We will review your message and get back to you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
};
export default ContactSection;