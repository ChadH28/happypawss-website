"use client";
import { useState } from "react";

export default function ContactCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "27844664783";

    const whatsappMessage = `Hello, my name is ${form.name}.
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message} - pet sitting enquiry`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <section className="parallax">
      <div className="flex flex-col min-h-[600px] py-12 px-4 justify-center items-center">
        <div className="text-center mb-6">
          <h2 className="section-heading text-2xl md:text-5xl">Contact Us</h2>
          <p className="text-[#3D2C2E]/70 text-sm md:text-base mt-2 max-w-md">
            Ready to book? Send us a message and we&apos;ll get back to you with a wagging tail!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg bg-[#FDF8F0]/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-[#F19F1F]/10"
        >
          <div className="flex flex-col gap-3">
            <div className="input-group flex items-center rounded-xl px-3 py-2">
              <input
                type="text"
                id="name"
                className="w-full bg-transparent outline-none text-sm font-semibold text-[#3D2C2E] placeholder:text-[#F19F1F]/60"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group flex items-center rounded-xl px-3 py-2">
              <input
                type="email"
                id="email"
                className="w-full bg-transparent outline-none text-sm font-semibold text-[#3D2C2E] placeholder:text-[#F19F1F]/60"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="input-group flex items-center rounded-xl px-3 py-2">
              <input
                type="tel"
                id="phone"
                className="w-full bg-transparent outline-none text-sm font-semibold text-[#3D2C2E] placeholder:text-[#F19F1F]/60"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>
            <div className="input-group flex items-start rounded-xl px-3 py-2">
              <textarea
                id="message"
                className="w-full bg-transparent outline-none text-sm font-semibold text-[#3D2C2E] placeholder:text-[#F19F1F]/60"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your pet!"
                rows="3"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F19F1F] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#e08e12] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center"
          >
            <span>{sent ? "Message Sent!" : "Send Message"}</span>
          </button>
          <p className="text-[#3D2C2E]/50 text-xs text-center">
            We&apos;ll reply via WhatsApp within a few hours
          </p>
        </form>
      </div>
    </section>
  );
}

