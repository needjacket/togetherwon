import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiFeather, FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'TogetherWON Programs & Services',
  description:
    'Explore TogetherWON in-home, group, online, and caregiver fitness programs designed for adults 60+ to build strength, balance, and brain health.',
  keywords:
    'in-home senior training, post-rehab fitness, senior balance exercises, brain-body training, caregiver wellness, online fitness for seniors',
};

export default function Services() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl leading-tight text-slate-950 sm:text-5xl">
              Programs designed for your lifestyle.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              At TogetherWON, every program is built to help adults over 60 move better, think sharper, and live
              stronger. We bring science-based training into your home or online — combining expert guidance, brain-body
              exercise, and personalized support that makes progress both achievable and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* In-Home Personal Training */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">In-Home Personal Training</h2>
              <p className="text-lg font-semibold text-slate-700">
                Personalized training that comes to you — and keeps you progressing every day.
              </p>
              <p className="text-base text-slate-600">
                Our in-home training combines trainer-led sessions with daily workouts between visits. This ensures
                continuous progress while supporting independence.
              </p>
              <p className="text-base text-slate-600">TogetherWON trainers help clients:</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'Build strength for everyday tasks',
                  'Maintain independence and mobility',
                  'Transition safely after rehab — the "missing link" between therapy and normal life',
                  "Address arthritis, Parkinson's, balance issues, joint replacements, and mild cognitive decline",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <FiFeather className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-slate-600">
                Every session uses safe, science-based exercises that make movement smoother, steadier, and more
                enjoyable.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[500px]">
                  <Image
                    src="/medium-vecteezy_senior-woman-in-wheelchair-doing-home-rehabilitation_35174795_medium.jpg"
                    alt="In-home personal training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Group Training */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[500px]">
                  <Image
                    src="/medium-vecteezy_group-of-cheerful-senior-people-stacking-hands-after-sport_65579514_medium.jpg"
                    alt="Small group training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Small Group Training</h2>
              <p className="text-base text-slate-600">
                Small group sessions (2–6 participants) combine personalized attention with the motivation of community.
              </p>
              <p className="text-base text-slate-600">Each session focuses on:</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {['Strength and coordination', 'Balance and stability', 'Cognitive engagement through brain-body movement'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <FiFeather className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
              <p className="text-base text-slate-600">
                Adaptable for all levels, and designed to make fitness social, effective, and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Personal Training */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Online Personal Training</h2>
              <p className="text-lg font-semibold text-slate-700">Train anywhere with the StrongWON App.</p>
              <p className="text-base text-slate-600">Each online program includes:</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'Live 1:1 coaching via Zoom',
                  'Custom workouts with video guidance',
                  'Ongoing trainer communication and feedback',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <FiFeather className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-slate-600">
                The StrongWON App makes exercise easy to follow, with large text, simple navigation, and clear
                demonstrations.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[500px]">
                  <Image
                    src="/medium-vecteezy_fitness-workout-training-senior-adult-mature-healthy-fit_52610034_medium.jpg"
                    alt="Online personal training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Caregivers */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[500px]">
                  <Image
                    src="/medium-vecteezy_asian-woman-and-her-elderly-mother_66826229_medium.jpg"
                    alt="Caregiver program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">For Caregivers</h2>
              <p className="text-base text-slate-600">A structured, uplifting way to move together.</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'In-person or on-line sessions you can both attend',
                  'Guided exercises via the StrongWON App (videos + trainer support)',
                  'Simple routines for strength, balance, and cognition',
                  'A short caregiver training course to help you feel confident as a workout partner',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <FiFeather className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-slate-600">
                Learn more at{' '}
                <a
                  href="https://strong.togetherwon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 hover:text-brand-600"
                >
                  strong.togetherwon.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 px-8 py-12 text-center text-white shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to strengthen your independence?</h2>
          <p className="mt-4 text-base text-slate-300">
            Start with a free 1-hour fitness consultation. We'll assess your balance, strength, and goals—then match
            you with the program that fits your life.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-sand-100"
            >
              Start with a Free 1-Hour Fitness Consultation
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
