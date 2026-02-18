import HomeSection from "@/components/sections/Home";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import DoctorsSection from "@/components/sections/Doctors";
import WhyChooseUsSection from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/Testimonials";
import ClinicGallery from "@/components/sections/ClinicGallery";
import ContactSection from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ClinicGallery />
      <DoctorsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
