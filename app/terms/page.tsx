export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold text-[#2E3192] sm:text-4xl">Terms and Conditions</h1>
      <p className="mt-4 text-sm text-gray-600">Last updated: February 18, 2026</p>

      <div className="mt-8 space-y-6 text-gray-700">
        <p>
          The website content is provided for general informational purposes only and should not be
          treated as a substitute for professional diagnosis or treatment advice.
        </p>
        <p>
          Appointment times are subject to doctor availability and emergency cases. We recommend
          confirming your visit by phone before arrival.
        </p>
        <p>
          External links such as maps or messaging platforms are provided for convenience. Care
          Dental is not responsible for third-party service outages or policy changes.
        </p>
        <p>
          For official clinic communication, contact
          <a className="ml-1 text-[#0096D6] hover:underline" href="mailto:caredentaltenali@gmail.com">
            caredentaltenali@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
