// HexaCall – Dark Cinematic Voice AI Agency Website // Stack: React + Tailwind CSS (Next.js compatible) // Design goals: calm confidence, cinematic pacing, zero fluff, revenue-focused

import { motion } from "framer-motion"; import { useState } from "react";

export default function HexaCallWebsite() { const [form, setForm] = useState({ name: "", email: "", phone: "" }); const [loading, setLoading] = useState(false); const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => { e.preventDefault(); setLoading(true); try { await fetch("https://hook.eu1.make.com/hue6ragf2283mnnh5a7wocfgfgtlteb6", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form), }); setSubmitted(true); } catch (err) { console.error(err); } finally { setLoading(false); } };

return ( <div className="bg-[#0B0F14] text-gray-200 font-sans overflow-x-hidden"> {/* ================= HERO ================= */} <section className="min-h-screen flex items-center justify-center relative px-6"> <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#0E1622] to-[#0B0F14]" />

<motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-10 max-w-4xl text-center"
    >
      <p className="text-sm tracking-widest text-blue-400 mb-4">
        AI CALL ANSWERING & APPOINTMENT BOOKING
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
        Never Miss a Call.<br />
        <span className="text-blue-400">Never Miss the Money.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
        HexaCall answers your calls after hours, during peak times, and when
        your staff misses them — and books appointments automatically.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#demo"
          className="px-8 py-4 rounded-xl bg-blue-500 text-black font-medium hover:bg-blue-400 transition"
        >
          Try It Live
        </a>
        <a
          href="#how"
          className="px-8 py-4 rounded-xl border border-gray-700 text-gray-300 hover:border-gray-500 transition"
        >
          See How It Works
        </a>
      </div>
    </motion.div>
  </section>

  {/* ================= HOW IT WORKS ================= */}
  <section id="how" className="py-32 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-center mb-20"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Call Rings",
            desc: "A patient or customer calls your business — even after hours.",
          },
          {
            title: "We Answer",
            desc: "HexaCall answers instantly with a calm, professional voice.",
          },
          {
            title: "Booked",
            desc: "Appointments get booked instead of sent to voicemail.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="bg-[#111827] rounded-2xl p-8 border border-gray-800"
          >
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold mb-6">
              {i + 1}
            </div>
            <h3 className="text-xl font-medium mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* ================= SERVICES ================= */}
  <section className="py-32 px-6 bg-[#0E1622]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-center mb-16"
      >
        What We Do
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {["AI Call Answering (After-Hours & Overflow)", "Appointment Booking", "Appointment Rescheduling & Cancellations", "Call Forwarding + Smart Routing", "SMS & Email Confirmations", "Missed Call Capture", "Weekend & After-Hours Lead Recovery"].map(
          (service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
              <p className="text-lg text-gray-300">{service}</p>
            </motion.div>
          )
        )}
      </div>

      <p className="text-center text-gray-400 mt-16 max-w-3xl mx-auto">
        No apps for your staff. No dashboards to learn. No extra work.
        <br />
        <span className="text-gray-200">Just more booked appointments.</span>
      </p>
    </div>
  </section>

  {/* ================= DEMO ================= */}
  <section id="demo" className="py-32 px-6 relative">
    <div className="max-w-xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6"
      >
        Try It Live
      </motion.h2>
      <p className="text-gray-400 mb-10">
        Enter your details. Our system will call you instantly and show how
        appointments get booked after hours.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] p-8 rounded-2xl border border-gray-800 space-y-4"
        >
          <input
            required
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-[#0B0F14] border border-gray-700"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-lg bg-[#0B0F14] border border-gray-700"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            required
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-[#0B0F14] border border-gray-700"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <button
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-500 text-black font-medium hover:bg-blue-400 transition"
          >
            {loading ? "Calling…" : "Call Me Now"}
          </button>
        </form>
      ) : (
        <div className="bg-[#111827] p-10 rounded-2xl border border-gray-800">
          <p className="text-lg">Your phone should ring any second.</p>
        </div>
      )}
    </div>
  </section>

  {/* ================= PRICING ================= */}
  <section className="py-32 px-6 bg-[#0E1622]">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6"
      >
        Pricing
      </motion.h2>
      <p className="text-gray-400 mb-10">
        Custom pricing based on call volume and appointment volume.
      </p>

      <div className="bg-[#111827] p-10 rounded-2xl border border-gray-800">
        <p className="text-lg mb-2">Typical investment:</p>
        <p className="text-gray-300">• One-time onboarding setup</p>
        <p className="text-gray-300">• Monthly usage-based pricing</p>
        <p className="text-gray-400 mt-6">
          Exact numbers are discussed on the call.
        </p>
      </div>
    </div>
  </section>

  {/* ================= FAQ ================= */}
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-center mb-16"
      >
        FAQ
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {["Does this replace my staff?", "No. It handles overflow and after-hours.", "Does it work with our scheduling?", "Yes. It fits into your existing workflow.", "Is this hard to set up?", "No. Your team doesn’t need to change anything.", "Who is this for?", "Businesses where every call equals revenue."].map(
          (item, i) => (
            <div key={i}>
              {i % 2 === 0 ? (
                <h4 className="text-lg font-medium mb-2">{item}</h4>
              ) : (
                <p className="text-gray-400">{item}</p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  </section>

  {/* ================= CONTACT ================= */}
  <footer className="py-20 px-6 bg-[#0B0F14] border-t border-gray-800 text-center">
    <p className="text-gray-400 mb-2">Want to stop missing calls?</p>
    <p className="text-blue-400">hexacall.ai@gmail.com</p>
    <p className="text-xs text-gray-600 mt-6">© {new Date().getFullYear()} HexaCall</p>
  </footer>
</div>

); }
