import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call */}
      <a
        href="tel:9160223232"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Call Care Dental"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919160223232"
        target="_blank"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp Care Dental"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
