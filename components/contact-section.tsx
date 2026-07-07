"use client"

import { useState } from "react"
import { MapPin, Phone, Send, CheckCircle } from "lucide-react"

const courseOptions = ["Chartered Accountant (CA)", "Cost Management Accountant (CMA)", "Company Secretary (CS)"]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", course: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a227] font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-balance">
            Start Your Journey Today
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <p className="text-accent leading-relaxed text-base">
              Ready to take the first step toward your professional career? Reach out to us for admissions, batch schedules, or any queries. Our team is happy to guide you.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/15 border border-[#7f1d1d]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#7f1d1d]" />
                </div>
                <div>
                  <div className="text-accent font-semibold mb-1">Our Address</div>
                  <div className="text-accent text-sm leading-relaxed">
                    MRK Complex, 255,<br />
                    Pollachi Main Road, Sundarapuram,<br />
                    Coimbatore, Tamil Nadu
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/15 border border-[#7f1d1d]/40 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#7f1d1d]" />
                </div>
                <div>
                  <div className="text-accent font-semibold mb-1">Phone</div>
                  <a
                    href="tel:09360918263"
                    className="text-accent font-medium hover:underline text-sm"
                  >
                    093609 18263
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-xl p-8 border border-[#FFD700]/30 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle className="w-14 h-14 text-[#7f1d1d]" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-bold text-[#1a3a8f]">Thank You!</h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  Your enquiry has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", course: "" }) }}
                  className="text-[#1a3a8f] text-sm font-medium hover:underline mt-2"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-xl font-bold text-[#1a3a8f]">Send an Enquiry</h3>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-black/80">
                    Full Name <span className="text-[#7f1d1d]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#1a3a8f]/20 bg-white text-black text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/60 focus:border-[#1a3a8f] transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-black/80">
                    Phone Number <span className="text-[#7f1d1d]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#1a3a8f]/20 bg-white text-black text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/60 focus:border-[#1a3a8f] transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="course" className="text-sm font-medium text-black/80">
                    Course Interest <span className="text-[#7f1d1d]">*</span>
                  </label>
                  <select
                    id="course"
                    required
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#1a3a8f]/20 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/60 focus:border-[#1a3a8f] transition"
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#7f1d1d] text-white font-semibold text-base hover:bg-[#1a3a8f] transition-colors mt-1"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}