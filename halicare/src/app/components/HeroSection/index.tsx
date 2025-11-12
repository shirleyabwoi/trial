'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; 

export  default function HeroSection() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#aboutus' },
    { name: 'Our Services', href: '#services' },
    { name: 'How It Works', href: '#howitworks' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative w-screen h-screen font-albertsans">
    
      <nav className="absolute top-10 inset-x-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div>
            <Image src="/images/halicarelogo.png" alt="HaliCare Logo" width={70} height={70} />
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-bold transition ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-white hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white hover:text-blue-600 focus:outline-none flex items-center"
          >
            <span className="sr-only">Open main menu</span>
            {open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition ${
                  pathname === link.href
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <Image
        src="/images/background.png"
        alt="Background homepage image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-10 z-20 md:p-20">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl max-w-2xl">
          Your Community Health Hub
        </h1>
        <p className="mt-4 font-bold text-lg sm:text-xl md:text-2xl max-w-2xl">
          Access quality care when you need it most by<br />
          getting connected to clinics
        </p>
        <div className="mt-20 md:mt-24">
          <a
            href="/haliCare.apk" 
            className="text-blue-900 bg-white px-8 py-4 rounded-lg shadow-md inline-block font-semibold text-lg md:text-xl hover:text-white hover:bg-blue-500"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}