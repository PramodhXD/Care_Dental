"use client";

export default function Map() {
  return (
    <div className="h-[260px] w-full overflow-hidden rounded-xl border sm:h-[320px]">
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
