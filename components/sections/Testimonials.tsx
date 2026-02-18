import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[#1e2a78]">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-center text-sm text-gray-600 sm:text-base">
          Trusted by hundreds of happy patients in Tenali
        </p>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>

              <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                “{t.review}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#1e2a78]">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
