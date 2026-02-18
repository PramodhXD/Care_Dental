import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Care Dental</h3>
            <p className="text-sm leading-relaxed">
              Care Multi Speciality Dental Hospital, Tenali, providing advanced, ethical, and
              patient-centric dental and maxillofacial care using modern technology and expert
              specialists.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Clinic Timings</h3>
            <p className="text-sm">
              <strong>Mon - Sat:</strong>
              <br />
              9:00 AM - 8:30 PM
            </p>
            <p className="mt-3 text-sm">
              <strong>Sunday:</strong>
              <br />
              Emergency Only
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact</h3>
            <p className="text-sm">
              Beside Sasi Delicious,
              <br />
              Behind Petrol Bunk,
              <br />
              Bhavanamvari Street,
              <br />
              Prakasam Road,
              <br />
              <strong>Tenali, Guntur DT, AP</strong>
            </p>

            <div className="mt-4 space-y-1 text-sm">
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

            <a href="mailto:caredentaltenali@gmail.com" className="mt-4 block text-sm hover:underline">
              caredentaltenali@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Care Dental. All rights reserved.
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
