"use client";
import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main
      id="aboutus"
      className="bg-gray-50 px-4 sm:px-6 font-albertsans lg:px-12 py-8 flex justify-center items-start"
    >
      <div className="max-w-7xl w-full flex flex-col items-center mt-6 sm:mt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#193479] mb-8 sm:mb-10 lg:mb-12 text-center font-['Albert_Sans']">
          About Us
        </h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 sm:gap-8 lg:gap-12 w-full mt-4 sm:mt-6 lg:mt-8">
          <div className="flex-shrink-0 w-full lg:w-1/2 max-w-[500px] rounded-lg overflow-hidden shadow-none mx-auto">
            <Image
              src="/assets/images/no-pix.jpg"
              alt="About Us Image"
              width={500}
              height={550}
              className="w-full h-[250px] sm:h-[350px] lg:h-[550px] xl:h-[550px] 2xl:h-[450px] object-cover rounded-lg"
              style={{
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
          </div>
          <div className="flex flex-col justify-center lg:w-1/2 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0 mt-4 lg:mt-0">
            <p className="text-lg sm:text-xl lg:text-2xl italic text-[#193479] mb-4 sm:mb-6">
              &ldquo;The shutdown of USAID funding has challenged many HIV/AIDS
              patients&apos; access to essential treatment in Kenya.&rdquo;
            </p>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
              HaliCare bridges this gap by linking patients to operational
              clinics, ensuring they continue to receive vital care and support.
              Our mission is to empower communities by providing seamless access
              to healthcare services, particularly for those affected by HIV/AIDS.
              Through our network of dedicated partners, we facilitate
              connections to reliable medical facilities, offer counseling, and
              provide resources to improve patients&rsquo; quality of life. HaliCare is
              committed to fostering hope and resilience, ensuring no one is left
              behind in their journey to health and well-being.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
