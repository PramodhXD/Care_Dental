import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#f8fbff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1e2a78]">
          What Our Patients Say
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Trusted by hundreds of happy patients in Tenali
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
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
