export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Care Dental
            </h3>
            <p className="text-sm leading-relaxed">
              Care Multi Speciality Dental Hospital, Tenali — providing
              advanced, ethical, and patient-centric dental & maxillofacial care
              using modern technology and expert specialists.
            </p>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Clinic Timings
            </h3>
            <p className="text-sm">
              <strong>Mon – Sat:</strong><br />
              9:00 AM – 8:30 PM
            </p>
            <p className="mt-3 text-sm">
              <strong>Sunday:</strong><br />
              Emergency Only
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>
            <p className="text-sm">
              📍 Beside Sasi Delicious,<br />
              Behind Petrol Bunk,<br />
              Bhavanamvari Street,<br />
              Prakasam Road,<br />
              <strong>Tenali, Guntur DT, AP</strong>
            </p>

            <p className="mt-4 text-sm">
              📞 08644-223232<br />
              📞 91602 23232<br />
              📞 99499 48094
            </p>

            <p className="mt-4 text-sm">
              ✉️ caredentaltenali@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Care Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
