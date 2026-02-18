"use client";

import { motion, type Variants } from "framer-motion";

/* ------------------ Motion Tokens ------------------ */
const MOTION = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

/* ------------------ Variants ------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration, ease: MOTION.ease },
  },
};

const stagger: Variants = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ------------------ Services Data (FROM POSTER) ------------------ */
const services = [
  {
    title: "General & Preventive Dentistry",
    desc: "Comprehensive dental check-ups, professional cleaning, fillings, and preventive care to maintain long-term oral health.",
  },
  {
    title: "Root Canal Treatment",
    desc: "Advanced and painless root canal procedures designed to save natural teeth and relieve dental pain effectively.",
  },
  {
    title: "Pediatric Dentistry",
    desc: "Specialized and gentle dental care for children in a comfortable and child-friendly environment.",
  },
  {
    title: "Orthodontics – Braces & Aligners",
    desc: "Correction of misaligned teeth using braces and modern clear aligner systems for improved function and aesthetics.",
  },
  {
    title: "Crowns & Bridges",
    desc: "Restoration of damaged or missing teeth using durable, natural-looking crowns and bridges.",
  },
  {
    title: "Laser Dentistry",
    desc: "Minimally invasive laser-assisted dental treatments with reduced pain, faster healing, and improved comfort.",
  },
  {
    title: "Dental Implants",
    desc: "Permanent tooth replacement solutions using advanced implant systems for natural appearance and long-term stability.",
  },
  {
    title: "Full Mouth Rehabilitation",
    desc: "Comprehensive treatment planning to restore function, aesthetics, and oral health in complex dental cases.",
  },
  {
    title: "Wisdom Tooth Surgery",
    desc: "Safe and precise surgical removal of impacted or problematic wisdom teeth.",
  },
  {
    title: "Facial Trauma & Facial Fractures",
    desc: "Expert management of facial injuries and fractures by experienced oral and maxillofacial surgeons.",
  },
  {
    title: "Cysts & Tumors",
    desc: "Diagnosis and surgical management of oral cysts and tumors with high standards of care and precision.",
  },
  {
    title: "TMJ Joint Problems",
    desc: "Evaluation and treatment of jaw joint disorders causing pain, clicking, or restricted mouth movement.",
  },
  {
    title: "Salivary Gland Problems",
    desc: "Diagnosis and treatment of salivary gland disorders affecting oral health and comfort.",
  },
];

/* ------------------ Component ------------------ */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-10 text-center sm:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-[#2E3192]"
          >
            Our Dental Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-sm text-gray-600 sm:text-base"
          >
            As a multispeciality dental hospital and facial trauma & implant
            center, we provide comprehensive dental, surgical, and rehabilitative
            treatments under one roof.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="rounded-xl border border-gray-100 bg-[#F9FBFF] p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <h3 className="text-lg font-semibold text-[#2E3192]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
