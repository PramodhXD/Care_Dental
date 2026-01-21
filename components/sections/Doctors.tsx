"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

/* ------------------ Animations ------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function DoctorsSection() {
  return (
    <section
      id="doctors"
      className="scroll-mt-16 py-24 bg-gradient-to-b from-[#F6FAFF] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-18"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E3192] tracking-tight">
            Our Dental Specialists
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced dental professionals delivering ethical, advanced,
            and patient-focused oral healthcare under one roof.
          </p>

          {/* Accent line */}
          <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-[#0096D6]" />
        </motion.div>

        {/* CARD */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="
            relative bg-white rounded-3xl
            shadow-[0_20px_40px_-20px_rgba(46,49,146,0.25)]
            border border-[#E6EEFF]
            overflow-hidden
            grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]
            transition hover:shadow-[0_30px_60px_-25px_rgba(46,49,146,0.35)]
          "
        >
          {/* IMAGE FRAME */}
          <div className="relative h-[400px] lg:h-[440px] bg-gradient-to-br from-[#F1F6FF] to-[#FAFCFF] flex items-center justify-center">
            <div className="relative w-full h-full p-6">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/doctors/our-doctors.jpg"
                  alt="Care Dental Doctors"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="p-8 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#2E3192]">
              Expert Care You Can Trust
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Care Multi Speciality Dental Hospital is led by qualified and
              experienced dental surgeons committed to providing comprehensive
              oral healthcare with precision, safety, and compassion.
            </p>

            {/* DOCTOR 1 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-[#0096D6]">
                Dr. N.R.K. Anil Kumar
              </h4>
              <p className="text-sm font-medium text-gray-800">
                BDS (Osmania), MDS
              </p>
              <p className="text-sm text-gray-600">
                Oral & Maxillofacial Surgeon · Implantologist
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Specialist in facial trauma management, dental implants,
                wisdom tooth surgery, and complex oral & maxillofacial
                surgical procedures.
              </p>
            </div>

            {/* DOCTOR 2 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-[#0096D6]">
                Dr. N. Ramya Sravanthi
              </h4>
              <p className="text-sm font-medium text-gray-800">
                BDS
              </p>
              <p className="text-sm text-gray-600">
                Dental Surgeon
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Provides comprehensive dental care including preventive,
                restorative, pediatric, and cosmetic dentistry with a
                strong patient-first approach.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
