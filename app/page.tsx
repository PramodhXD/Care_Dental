import HomeSection from "@/components/sections/Home";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import DoctorsSection from "@/components/sections/Doctors";
import WhyChooseUsSection from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/Testimonials";
import ClinicGallery from "@/components/sections/ClinicGallery";
import ContactSection from "@/components/sections/Contact";

import ScrollReveal from "@/components/animation/ScrollReveal";

export default function Page() {
  return (
    <main>

      <ScrollReveal>
        <HomeSection />
      </ScrollReveal>

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ClinicGallery />
      </ScrollReveal>

      <ScrollReveal>
        <DoctorsSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

    </main>
  );
}
