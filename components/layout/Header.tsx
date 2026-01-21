"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/images/care-dental-logo.png"
            alt="Care Dental"
            width={38}
            height={38}
            priority
          />
          <span className="text-lg font-semibold text-[#2E3192]">
            Care <span className="text-[#0096D6]">Dental</span>
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <Link href="#home" className="hover:text-[#0096D6] transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#0096D6] transition">
            About
          </Link>
          <Link href="#services" className="hover:text-[#0096D6] transition">
            Services
          </Link>
          <Link href="#doctors" className="hover:text-[#0096D6] transition">
            Doctors
          </Link>
          <Link href="#contact" className="hover:text-[#0096D6] transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+91XXXXXXXXXX"
            className="text-sm font-medium text-gray-700 hover:text-[#0096D6]"
          >
            📞 Call
          </a>

          <Link
            href="#contact"
            className="rounded-md border border-[#0096D6] px-4 py-2 text-sm font-semibold text-[#0096D6] hover:bg-[#0096D6] hover:text-white transition"
          >
            Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
