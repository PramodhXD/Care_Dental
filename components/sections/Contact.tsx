import Map from "./Map";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We’re here to help you with expert dental care in Tenali
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white rounded-xl shadow-md p-6">
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
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Contact
            </h3>
            <p className="text-gray-700 mb-2">
              Phone:
            </p>
            <p className="text-blue-600 font-medium">
              08644-223232<br />
              91602 23232<br />
              99499 48094
            </p>

            <p className="mt-4 text-gray-700">
              Email:
            </p>
            <p className="text-blue-600 font-medium">
              caredentaltenali@gmail.com
            </p>
          </div>

          {/* Timings */}
          <div className="bg-white rounded-xl shadow-md p-6">
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
        <div className="mt-16">
          <Map />
        </div>
      </div>
    </section>
  );
}
