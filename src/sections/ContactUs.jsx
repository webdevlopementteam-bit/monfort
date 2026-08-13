"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // Add your API / email service here
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          CONTACT HERO
      ====================================================== */}

      <section
        className="relative overflow-hidden bg-white py-10 lg:py-15 scroll-mt-24"
        id="contact"
      >
        {/* Background Decorations */}

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#34acb1]/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34acb1]/5 blur-3xl" />

        {/* Decorative dots */}

        <div className="pointer-events-none absolute left-[8%] top-[25%] hidden h-2 w-2 rounded-full bg-[#34acb1]/30 sm:block" />

        <div className="pointer-events-none absolute right-[12%] top-[30%] hidden h-3 w-3 rounded-full bg-[#34acb1]/20 md:block" />

        <div className="pointer-events-none absolute bottom-[15%] left-[15%] hidden h-2 w-2 rounded-full bg-[#34acb1]/20 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* =================================================
              HERO HEADER
          ================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#34acb1] sm:w-10" />

              <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#258F94] sm:text-sm sm:tracking-[4px]">
                Contact Us
              </span>

              <span className="h-[2px] w-8 bg-[#34acb1] sm:w-10" />
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.12] text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Build Your
              <br />
              <span className="italic font-medium text-[#34acb1]">
                Perfect Kitchen.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
              Have a question about our kitchen sinks or looking for the right
              solution for your project? Get in touch with the Monfort Kitchen
              team. We&apos;re always happy to help.
            </p>
          </div>

          {/* =================================================
              MAIN CONTACT AREA
          ================================================== */}

          <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            {/* =================================================
                LEFT — CONTACT INFORMATION
            ================================================== */}

            <div className="relative overflow-hidden rounded-[30px] bg-[#0B1112] p-6 shadow-2xl sm:p-8 lg:p-10">
              {/* Glows */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#34acb1]/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#34acb1]/10 blur-3xl" />

              {/* Grid decoration */}

              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 opacity-[0.05]">
                <div className="grid h-full w-full grid-cols-6 gap-3">
                  {[...Array(36)].map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#34acb1]"
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                {/* Label */}

                <div className="inline-flex items-center gap-2 rounded-full border border-[#34acb1]/30 bg-[#34acb1]/10 px-4 py-2">
                  <Sparkles size={14} className="text-[#34acb1]" />

                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#34acb1]">
                    Get In Touch
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  We&apos;d Love To
                  <br />
                  <span className="italic text-[#34acb1]">Hear From You.</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  Whether you&apos;re a homeowner, interior designer, contractor
                  or business, our team is ready to help you find the right
                  kitchen sink.
                </p>

                {/* Contact Details */}

                <div className="mt-8 space-y-4">
                  {/* Phone */}

                  <a
                    href="tel:+919871667213"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#34acb1]/40 hover:bg-[#34acb1]/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34acb1]/10 text-[#34acb1] transition-colors group-hover:bg-[#34acb1] group-hover:text-white">
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-gray-500">
                        Call Us
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        +91 9871667213
                      </p>
                    </div>
                  </a>

                  {/* Email */}

                  <a
                    href="mailto:harshkansal280@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#34acb1]/40 hover:bg-[#34acb1]/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34acb1]/10 text-[#34acb1] transition-colors group-hover:bg-[#34acb1] group-hover:text-white">
                      <Mail size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-gray-500">
                        Email Us
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-white">
                        harshkansal280@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}

                  <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#34acb1]/40 hover:bg-[#34acb1]/10">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34acb1]/10 text-[#34acb1] transition-colors group-hover:bg-[#34acb1] group-hover:text-white">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-gray-500">
                        Visit Us
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        G-108, sector -3, Bawana industrial area, Delhi-11039
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}

                <div className="mt-6 rounded-2xl border border-[#34acb1]/20 bg-[#34acb1]/5 p-5">
                  <div className="flex items-start gap-3">
                    <Clock3
                      size={20}
                      className="mt-0.5 shrink-0 text-[#34acb1]"
                    />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Business Hours
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-400">
                        Monday – Saturday
                        <br />
                        9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — CONTACT FORM
            ================================================== */}

            <div className="relative rounded-[30px] border border-gray-100 bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">
              {/* Top accent */}

              <div className="absolute left-8 right-8 top-0 h-1 rounded-b-full bg-gradient-to-r from-[#258F94] via-[#34acb1] to-[#258F94] sm:left-10 sm:right-10" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-[#258F94]">
                    Send An Enquiry
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                    Tell Us What You Need.
                  </h2>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F7] text-[#258F94] sm:flex">
                  <MessageCircle size={23} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              {/* Form */}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name + Phone */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                    />
                  </div>
                </div>

                {/* Email + Subject */}

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                    />
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-700"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                    >
                      <option value="">Select enquiry type</option>
                      <option value="product-enquiry">Product Enquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="commercial-project">
                        Commercial Project
                      </option>
                      <option value="dealer-enquiry">Dealer Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-[1px] text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#34acb1] focus:bg-white focus:ring-4 focus:ring-[#34acb1]/10"
                  />
                </div>

                {/* Submit */}

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#34acb1]"
                    />

                    <span className="text-xs text-gray-500">
                      We&apos;ll respond to your enquiry shortly.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1112] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#34acb1] hover:shadow-[#34acb1]/30"
                  >
                    Send Enquiry
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* =================================================
              BOTTOM QUICK CONTACT CARDS
          ================================================== */}

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
            {/* Product Enquiry */}

            <Link
              href="#products"
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                <ArrowRight size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">
                  Explore Products
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Find your perfect sink
                </p>
              </div>

              <ArrowRight
                size={17}
                className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
              />
            </Link>

            {/* FAQ */}

            <Link
              href="#faq"
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                <MessageCircle size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">Read FAQs</p>

                <p className="mt-1 text-xs text-gray-500">Find quick answers</p>
              </div>

              <ArrowRight
                size={17}
                className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
              />
            </Link>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919871667213"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#34acb1]/30 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F7F7] text-[#258F94] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                <MessageCircle size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">WhatsApp Us</p>

                <p className="mt-1 text-xs text-gray-500">Quick assistance</p>
              </div>

              <ArrowRight
                size={17}
                className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#34acb1]"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM DIVIDER
      ====================================================== */}

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 pb-14 sm:gap-4 sm:px-6 sm:pb-20 lg:px-8">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[2.5px] text-[#34acb1] sm:text-[10px] sm:tracking-[4px]">
          Monfort Kitchen
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>
    </main>
  );
}
