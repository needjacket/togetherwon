'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formBody = new URLSearchParams(formData as any).toString();
      console.log('Sending form data:', formBody);

      const response = await fetch('https://api.faceprints.net/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 5000);
      } else {
        console.error('Form submission failed:', response.status, responseText);
        alert('Unable to send form data at this time. Please try emailing us at kristen@togetherwon.com');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Unable to send form data at this time. Please try emailing us at kristen@togetherwon.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl leading-tight text-slate-950 sm:text-5xl">Let's get you moving again.</h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              We'd love to meet you, learn about your goals, and help you take the first step toward a stronger,
              steadier, and more confident life. Your first session is completely free — a one-hour consultation and
              movement assessment where we'll discuss your needs and design a plan that fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-8">
              <div className="rounded-4xl border border-white/80 bg-white/90 p-8 shadow-[var(--shadow-soft)]">
                <h2 className="text-3xl font-semibold text-slate-950">Reach out directly</h2>
                <p className="mt-3 text-base text-slate-600">
                  Have questions about training, pricing, or getting started? Reach out anytime—we are here to help.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: <FiMail className="h-5 w-5" />,
                      label: 'Email',
                      value: (
                        <a
                          href="mailto:kristen@togetherwon.com"
                          className="text-brand-700 transition hover:text-brand-600"
                        >
                          kristen@togetherwon.com
                        </a>
                      ),
                    },
                    {
                      icon: <FiPhone className="h-5 w-5" />,
                      label: 'Phone',
                      value: (
                        <a
                          href="tel:7192869450"
                          className="text-brand-700 transition hover:text-brand-600"
                        >
                          (719) 286-9450
                        </a>
                      ),
                    },
                    {
                      icon: <FiMapPin className="h-5 w-5" />,
                      label: 'Service area',
                      value: 'Serving Colorado Springs & Tri-Lakes area. Online training available nationwide.',
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white px-4 py-3 shadow-sm">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-slate-700">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-white/80 bg-white/95 p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-3xl font-semibold text-slate-950">Tell us about you</h2>
              <p className="mt-2 text-sm text-slate-600">
                I respond within one business day with next steps and available consultation times.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-3xl border border-brand-200 bg-brand-50/80 p-6 text-center">
                  <FiCheckCircle className="mx-auto h-10 w-10 text-brand-600" />
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">Message received!</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Thank you for reaching out. I will respond within 24 hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold tracking-wide text-slate-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold tracking-wide text-slate-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold tracking-wide text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="(719) 555-1234"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold tracking-wide text-slate-700">
                      Which service are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    >
                      <option value="">Select a service</option>
                      <option value="in-home">In-Home Personal Training</option>
                      <option value="small-group">Small Group Training</option>
                      <option value="online">Online Personal Training</option>
                      <option value="caregivers">For Caregivers</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold tracking-wide text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="Tell us about your goals, current activities, or any questions you have."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700"
                  >
                    Submit & Schedule My Free Consultation
                    <FiSend className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
