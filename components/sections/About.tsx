export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#F9FCFF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-[#2E3192] sm:text-4xl">
            About Care Dental
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-700 sm:mt-6 sm:text-lg">
            Care Multi Speciality Dental Hospital is a trusted dental care
            center in Tenali, providing comprehensive dental and
            maxillofacial treatments since <strong>2015</strong>. As a
            Facial Trauma & Implant Center, we specialize in both routine
            and advanced dental procedures using modern technology and
            evidence-based practices.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Led by experienced dental surgeons and specialists, our hospital
            focuses on personalized treatment plans designed for long-term
            oral health. We strictly follow international hygiene and
            sterilization protocols to ensure a safe, comfortable, and
            patient-friendly environment.
          </p>

          {/* TRUST POINTS */}
          <div className="mt-8 space-y-3 text-gray-800 font-medium">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0096D6]" />
              Multi speciality dental hospital in Tenali
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8BC34A]" />
              Facial trauma & implant treatment center
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0096D6]" />
              Experienced dentists & maxillofacial specialists
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8BC34A]" />
              Advanced technology with strict hygiene standards
            </div>
          </div>
        </div>

        {/* RIGHT – MISSION & VISION */}
        <div className="relative">
          {/* Soft background glow */}
          <div className="absolute -inset-8 bg-gradient-to-br from-[#0096D6]/10 to-[#8BC34A]/10 blur-3xl rounded-3xl" />

          <div className="relative rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-[#2E3192] sm:text-2xl">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To deliver ethical, affordable, and high-quality dental care
              with compassion, precision, and professionalism — helping our
              patients maintain healthy, confident smiles for life.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-[#2E3192] sm:mt-10 sm:text-2xl">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be recognized as one of the most trusted dental hospitals
              in the region by continuously improving clinical excellence,
              patient satisfaction, and community care.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
