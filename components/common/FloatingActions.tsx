import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      {/* Call */}
      <a
        href="tel:9160223232"
        className="rounded-full bg-blue-600 p-3 text-white shadow-lg transition hover:bg-blue-700 sm:p-4"
        aria-label="Call Care Dental"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919160223232"
        target="_blank"
        className="rounded-full bg-green-500 p-3 text-white shadow-lg transition hover:bg-green-600 sm:p-4"
        aria-label="WhatsApp Care Dental"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
