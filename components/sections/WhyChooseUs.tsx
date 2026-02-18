export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[#F9FCFF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#2E3192] sm:text-4xl">
            Why Choose Care Dental
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Trusted multi speciality dental care backed by experience,
            expertise, and a commitment to patient safety.
          </p>
        </div>

        {/* HIGHLIGHTS GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-10">

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#0096D6]">
              10+ Years of Experience
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Serving the Tenali community since 2015 with consistent,
              ethical, and high-quality dental care.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#8BC34A]">
              Multi Speciality Hospital
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              From routine dental treatments to advanced maxillofacial
              surgeries, all services are available under one roof.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#0096D6]">
              Facial Trauma & Implant Center
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Specialized care for dental implants, facial injuries,
              jaw-related conditions, and complex surgical cases.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#8BC34A]">
              Experienced Specialists
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Treatments are handled by qualified dental surgeons and
              maxillofacial specialists with extensive clinical expertise.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#0096D6]">
              Advanced Technology
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Modern equipment and evidence-based techniques ensure
              precise diagnosis and long-lasting treatment outcomes.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-[#8BC34A]">
              Hygiene & Patient Safety
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Strict sterilization and hygiene protocols are followed to
              provide a safe, clean, and patient-friendly environment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
