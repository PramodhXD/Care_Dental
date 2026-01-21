"use client";

export default function AppointmentForm() {
  return (
    <section className="p-10 bg-white/5">
      <h2 className="text-3xl font-semibold mb-4">
        Book Appointment
      </h2>

      <form className="grid gap-4 max-w-md">
        <input
          className="p-3 rounded bg-black border border-white/20"
          placeholder="Name"
        />
        <input
          className="p-3 rounded bg-black border border-white/20"
          placeholder="Phone"
        />
        <button
          type="button"
          className="p-3 bg-white text-black rounded font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
