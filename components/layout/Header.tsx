"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/images/care-dental-logo.png"
            alt="Care Dental"
            width={34}
            height={34}
            priority
          />
          <span className="text-base font-semibold text-[#2E3192] sm:text-lg">
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

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+919160223232"
            className="rounded-md border border-[#0096D6] px-3 py-1.5 text-sm font-semibold text-[#0096D6]"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-md p-1.5 text-gray-700"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Doctors", "#doctors"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-gray-50 hover:text-[#0096D6]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
