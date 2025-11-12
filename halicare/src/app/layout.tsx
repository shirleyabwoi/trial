import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import './globals.css';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

export const metadata: Metadata = {
  title: 'Hali Care',
  description: 'An application to help HIV/AIDS patients to locate operating clinics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
