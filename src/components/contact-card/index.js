"use client";
import { useState } from "react";

export default function ContactCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const whatsappNumber = "27637407158"; // your WhatsApp number with country code (no + or spaces)
    const whatsappNumber = "27844664783"; // your WhatsApp number with country code (no + or spaces)

    const whatsappMessage = `Hello, my name is ${form.name}.
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message} - pet sitting enquiry`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.location.href = url;
    console.log(url);
  };
  return (
    <div className="parallax">
      <div className="form-container flex flex-col h-[600px] p-4 justify-center items-center">
        <div className="lined_header  text-center relative">
          <h2 className="text-base md:text-6xl">{"Contact Us"}</h2>
        </div>
        <form
          onSubmit={handleSubmit}
          data-aos="zoom-in-right"
          className="needs-validation bg-white flex flex-col gap-4 min-w-xl max-[1024px]:min-w-full p-8 rounded-4xl"
          // noValidate
        >
          <div className="flex flex-col gap-4">
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  aria-describedby="inputGroupPrepend"
                  placeholder="First Name"
                  // pattern="[A-Za-z]{1,25}"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] far fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="user@example.com"
                  // pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] fas fa-phone" />
                  </span>
                </div>
                <input
                  value={form.phone}
                  onChange={handleChange}
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="123 456 7891*"
                  // min="10"
                  // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  required
                />
              </div>
            </div>
            <div className="input-group border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message Here*"
                rows="3"
                required
              />
            </div>
          </div>
          <button
            data-sitekey="reCAPTCHA_site_key"
            data-callback="onSubmit"
            data-action="submit"
            type="submit"
            className="btn g-recaptcha text-white send bg-[#F19F1F] py-3 px-4 rounded-xl cursor-pointer"
          >
            Send <i className="fas text-white fa-paper-plane" />
          </button>
        </form>
      </div>
    </div>
  );
}
