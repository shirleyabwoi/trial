"use client";
import Image from "next/image";
const steps = [
  {
    step: "STEP 1",
    title: "Install the app",
    Image: "/assets/images/ha-1-removebg-preview.png",
  },
  {
    step: "STEP 2",
    title: "Create an account",
    Image: "/assets/images/ha-2-removebg-preview.png",
  },
  {
    step: "STEP 3",
    title: "View clinic Requirement",
    Image: "/assets/images/ha-3-removebg-preview.png",
  },
  {
    step: "STEP 4",
    title: "Search for clinics",
    Image: "/assets/images/ha-4-removebg-preview.png",
  },
  {
    step: "STEP 5",
    title: "Make an appointment",
    Image: "/assets/images/ha-5-removebg-preview.png",
  },
];
export default function HowItWorks() {
  return (
    <section className="w-full px-4 font-albertsans py-12" id="howitworks">
      <div className="mx-auto max-w-full rounded-3xl bg-[#132C7D] bg-opacity-80 p-8 sm:p-12 lg:p-16">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-32 sm:w-36 md:w-40">
                <Image
                  src={s.Image}
                  alt={s.title}
                  width={190}
                  height={190}
                  className="mx-auto h-auto w-full rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <div className="text-base font-extrabold tracking-wide text-white md:text-lg">
                  {s.step}
                </div>
                <div className="text-sm font-semibold text-[#33E0FF] md:text-base">
                  {s.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






