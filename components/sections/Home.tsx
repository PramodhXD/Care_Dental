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
      <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-[#0096D6]/15 blur-2xl z-0" />
      <div className="absolute -bottom-48 -left-48 h-[440px] w-[440px] rounded-full bg-[#8BC34A]/15 blur-2xl z-0" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight text-[#2E3192]"
          >
            Care Multi Speciality
            <br />
            Dental Hospital
          </motion.h1>

          {/* SUB HEADING */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-xl font-medium text-[#0096D6]"
          >
            Advanced dental care with compassion, safety, and precision.
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed"
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
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-800 font-medium"
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
              className="inline-flex items-center gap-3 rounded-full bg-[#0096D6] px-10 py-4 text-white font-semibold shadow-md hover:bg-[#007bb0] transition"
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
            className="relative w-[420px] h-[420px] flex items-center justify-center -translate-y-10"
          >
            <Image
              src="/images/care-dental-logo.png"
              alt="Care Dental Logo"
              width={400}
              height={400}
              className="opacity-95"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
