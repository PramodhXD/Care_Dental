import Map from "./Map";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            We’re here to help you with expert dental care in Tenali
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {/* Address */}
          <div className="rounded-xl bg-white p-5 shadow-md sm:p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Address
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Care Multi Speciality Dental Hospital<br />
              Beside Sasi Delicious,<br />
              Behind Petrol Bunk,<br />
              Bhavanamvari Street,<br />
              Prakasam Road,<br />
              <strong>Tenali, Guntur DT, AP</strong>
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-white p-5 shadow-md sm:p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Contact
            </h3>
            <p className="text-gray-700 mb-2">
              Phone:
            </p>
            <div className="space-y-1 text-blue-600 font-medium">
              <a href="tel:08644223232" className="block hover:underline">
                08644-223232
              </a>
              <a href="tel:9160223232" className="block hover:underline">
                91602 23232
              </a>
              <a href="tel:9949948094" className="block hover:underline">
                99499 48094
              </a>
            </div>

            <p className="mt-4 text-gray-700">
              Email:
            </p>
            <a
              href="mailto:caredentaltenali@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              caredentaltenali@gmail.com
            </a>
          </div>

          {/* Timings */}
          <div className="rounded-xl bg-white p-5 shadow-md sm:p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Clinic Timings
            </h3>
            <p className="text-gray-700">
              <strong>Mon – Sat:</strong><br />
              9:00 AM – 8:30 PM
            </p>

            <p className="mt-4 text-gray-700">
              <strong>Sunday:</strong><br />
              Emergency Only
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 sm:mt-16">
          <Map />
        </div>
      </div>
    </section>
  );
}
