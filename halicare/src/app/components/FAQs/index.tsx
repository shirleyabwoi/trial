"use client";
import { useState } from "react";
import { IoChevronForwardCircle, IoChevronDownCircle } from "react-icons/io5";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is HaliCare?",
    answer: "HaliCare is a mobile app designed to help patients living with HIV connect to nearby operating clinics and counseling centers following the closure of USAID clinics. It provides updated information on available health services and support centers for both medical care and mental health.",
  },
  {
    question: "Who can use the HaliCare app?",
    answer: "HaliCare is specifically designed for people living with HIV who need access to medical care and counseling services. Anyone seeking support related to HIV treatment or mental health can use the app.",
  },
  {
    question: "How does HaliCare help me find clinics?",
    answer: "The app uses your location to identify and link you to the nearest operating clinics that provide HIV treatment and care services. You can view clinic details, contact information, and directions within the app.",
  },
  {
    question: "Can HaliCare connect me to counseling centers?",
    answer: "Yes. Besides clinics, HaliCare also links you to counseling centers offering mental health support and HIV-related counseling services. You can find support for emotional well-being, adherence counseling, and peer support.",
  },
  {
    question: "How often is the clinic and counseling center information updated?",
    answer: "The clinics infomation is updated on a weekly basis to ensure that our users have access to the most accurate and current information.",
  },
  {
    question: "What do I need in order to transfer to a new clinic?",
    answer: "To transfer to a new clinic you must have a transfer letter from your previous clinic. This letter contains your treatment history and helps link you to a new clinic enabling seamless care. If your clinic closes, contact your nearest county health office to assist with obtaining a transfer letter.",
  },
];

function FAQSection() {
  const [openAccordin, setOpenAccordin] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenAccordin(openAccordin === index ? null : index);
  };

  return (
    <div id= "faqs" className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-[#D3E1F7] font-albertsans">
      <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F54] mb-4 sm:mb-6 md:mb-8">
          FAQs
        </h1>
        <p className="text-[#001F54] mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl w-full">
          Below are answers to commonly asked questions to help you better understand and use HaliCare.
          <br/> For further assistance, please contact our support team.
        </p>
      </div>
      
      <div className="max-w-4xl lg:max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3 sm:mb-4 border-none rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-3 sm:p-4 md:p-5 font-bold transition-all duration-100 ${
                openAccordin === index
                  ? "bg-[#001F54] text-white"
                  : "bg-white text-[#001F54] "
              } text-base sm:text-lg md:text-xl lg:text-xl min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem]`}
              aria-expanded={openAccordin === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-left pr-2">{faq.question}</span>
              {openAccordin === index ? (
                <IoChevronDownCircle className="text-white flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              ) : (
                <IoChevronForwardCircle className="text-[#001F54] flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              )}
            </button>
            
            {openAccordin === index && (
              <div 
                id={`faq-answer-${index}`}
                className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 bg-[#001F54] text-white text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;