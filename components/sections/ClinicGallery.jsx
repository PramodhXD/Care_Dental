"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import "swiper/css";

const clinicImages = [
  "/images/clinic/clinic-1.jpg",
  "/images/clinic/clinic-2.jpg",
  "/images/clinic/clinic-3.jpg",
  "/images/clinic/clinic-4.jpg",
  "/images/clinic/clinic-5.jpg",
];

export default function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔒 Disable background scroll when popup open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <section id="gallery" className="bg-white py-16 text-black sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Clinic Infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            Modern equipment, hygienic environment, and world-class dental care facilities
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.05 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {clinicImages.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(src)}
                className="overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
              >
                <Image
                  src={src}
                  alt={`Clinic Image ${index + 1}`}
                  width={700}
                  height={500}
                  className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[280px]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* FULLSCREEN POPUP (CLICK ONLY) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:scale-110 transition"
                aria-label="Close"
              >
                <FiX />
              </button>

              <Image
                src={selectedImage}
                alt="Clinic Full View"
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full max-h-[80vh] bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
