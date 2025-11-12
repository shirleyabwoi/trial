'use client';
import Image from 'next/image';
import { Albert_Sans } from 'next/font/google';
const albertSans = Albert_Sans({ subsets: ['latin'], weight: ['400', '700', '800'] });
const serviceCards = [
  {
    title: "Medical Access",
    imgSrc: "/images/Ellipse 6.png",
    description: "Stay connected to clinics and hospitals open for your ARV medication refills, effortlessly with Halicare.",
  },
  {
    title: "Counseling Services",
    imgSrc: "/images/Ellipse 5.png",
    description: "Use HaliCare to quickly find nearby clinics, hospitals, and counseling centers open for sessions, ensuring easy access to care",
  },
];
const stats = [
  {
    icon: "/images/Clinic.png",
    label: "Clinics",
    value: "172 +",
  },
  {
    icon: "/images/Downtown.png",
    label: "Counselling Centers",
    value: "153 +",
  },
  {
    icon: "/images/Facebook Like.png",
    label: "Happy Patients",
    value: "301 +",
  },
];
export default function OurServices() {
  return (
    <section id="services" className={`w-full min-h-screen bg-gradient-to-br from-[#F5F6FF] to-[#E1E7FF] flex flex-col py-8 sm:py-16 px-4 ${albertSans.className}`}>
      <h2 className="text-[#182978] text-lg xs:text-2xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-12" style={{ letterSpacing: "1px" }}>
        Our Services
      </h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-[1800px] mx-auto gap-6 sm:gap-12 md:gap-16 lg:gap-24 px-0">
        {serviceCards.map(card => (
          <div
            key={card.title}
            className="
              bg-[#E5E5E5] rounded-[28px] sm:rounded-[40px] shadow-lg
              p-4 sm:p-8 flex flex-col items-center flex-1
              h-full min-h-[300px] w-full
              mx-auto my-2
            "
          >
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Image
                src={card.imgSrc}
                width={120}
                height={120}
                alt={card.title}
                className="rounded-full w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] object-cover"
              />
            </div>
            <h3 className="text-[#182978] text-lg sm:text-2xl md:text-[2rem] font-extrabold mb-2 sm:mb-4 text-center">
              {card.title}
            </h3>
            <p className="text-[#182978] text-sm sm:text-base md:text-lg text-center px-4">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className="
        bg-[#182978]
        rounded-[24px] sm:rounded-[40px]
        w-full max-w-[1800px]
        mx-auto
        px-4 sm:px-12 py-4 sm:py-12
        flex flex-col md:flex-row justify-between items-center
        gap-6 sm:gap-8
        shadow-lg
        mt-8 sm:mt-16
      ">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center flex-1 ${idx < stats.length - 1 ? 'md:border-r md:border-white/50 md:pr-4 sm:pr-8' : ''}`}
          >
            <div className="mb-1 sm:mb-5">
              <Image
                src={stat.icon}
                width={48}
                height={48}
                alt={stat.label}
                className="w-12 h-12 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10"
              />
            </div>
            <div className="text-white font-extrabold text-[13px] sm:text-2xl mb-1 sm:mb-2 text-center">{stat.label}</div>
            <div className="text-[#00E6FF] text-base sm:text-3xl md:text-5xl font-extrabold text-center">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}