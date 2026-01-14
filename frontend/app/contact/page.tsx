"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://balufix-landscapes.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Let’s design an outdoor space that reflects your vision, lifestyle,
            and purpose. Share your details and we’ll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-6">
              Get in Touch
            </h2>

            <p className="text-slate-300 mb-6">
              Whether it’s a residential garden, commercial space, or luxury
              hospitality project, our team is ready to help.
            </p>

            <div className="space-y-4 text-slate-300">
              <p>📍 Chennai, Tamil Nadu</p>
              <p>📞 +91 98420 63557</p>
              <p>📧 balufix@gmail.com</p>
            </div>

            <a
              href="https://wa.me/919842063557"
              target="_blank"
              className="inline-block mt-8 px-8 py-4 bg-green-600 text-black rounded-full font-semibold hover:bg-green-500 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                />

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-black py-4 rounded-lg font-semibold hover:bg-green-500 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  Thank You!
                </h3>
                <p className="text-slate-300">
                  Your message has been received. We’ll contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
