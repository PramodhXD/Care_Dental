"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ------------------ Motion Tokens ------------------ */
const MOTION = {
  duration: 0.6,
  distance: 24,
  ease: [0.16, 1, 0.3, 1] as const,
};

/* ------------------ Variants ------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: MOTION.distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration,
      ease: MOTION.ease,
    },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION.duration,
      ease: MOTION.ease,
    },
  },
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="scroll-mt-16 relative overflow-hidden bg-gradient-to-br from-[#F4FCFF] via-white to-[#F3FAF6]"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-48 -right-48 z-0 h-[360px] w-[360px] rounded-full bg-[#0096D6]/15 blur-2xl sm:h-[520px] sm:w-[520px]" />
      <div className="absolute -bottom-48 -left-48 z-0 h-[300px] w-[300px] rounded-full bg-[#8BC34A]/15 blur-2xl sm:h-[440px] sm:w-[440px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-12">

        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold leading-tight text-[#2E3192] sm:text-4xl md:text-5xl lg:text-[56px]"
          >
            Care Multi Speciality
            <br />
            Dental Hospital
          </motion.h1>

          {/* SUB HEADING */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base font-medium text-[#0096D6] sm:text-lg md:text-xl"
          >
            Advanced dental care with compassion, safety, and precision.
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:text-lg"
          >
            Care Dental is a multi speciality dental hospital in Tenali offering
            complete oral healthcare under one roof. We follow strict hygiene
            protocols and use modern dental technology to provide safe, painless,
            and long-lasting treatments.
            <br /><br />
            Our experienced dental specialists deliver personalized care for
            children, adults, and senior patients with transparency, comfort,
            and ethical treatment planning.
          </motion.p>

          {/* KEY HIGHLIGHTS */}
          <motion.div
            variants={stagger}
            className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 text-sm font-medium text-gray-800 sm:mt-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 sm:text-base"
          >
            {[
              "Advanced Dental Equipment & Technology",
              "Strict Sterilization & Hygiene Standards",
              "Experienced & Qualified Specialists",
              "Affordable & Ethical Treatment Plans",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-[#0096D6]"
                />
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={scaleIn} className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#0096D6] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#007bb0] sm:px-10 sm:py-4 sm:text-base"
            >
              Book a Dental Consultation →
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL (LOGO – BIG & ALIGNED) */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: MOTION.ease,
            }}
            className="relative flex h-[240px] w-[240px] items-center justify-center sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px] lg:-translate-y-10"
          >
            <Image
              src="/images/care-dental-logo.webp"
              alt="Care Dental Logo"
              width={400}
              height={400}
              quality={80}
              className="opacity-95"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
