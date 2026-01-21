"use client";

export default function Map() {
  return (
    <div className="w-full h-[320px] rounded-xl overflow-hidden border">
      <iframe
        title="Care Dental Location"
        src="https://www.google.com/maps?q=Care+Multi+Speciality+Dental+Hospital+Tenali&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
