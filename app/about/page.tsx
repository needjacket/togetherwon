import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { FaBrain, FaDumbbell } from 'react-icons/fa';
import { GiUnbalanced } from 'react-icons/gi';

export const metadata = {
  title: 'About TogetherWON & Kristen Nielsen',
  description:
    'Learn about TogetherWON mission to help adults over 60 stay strong, balanced, and mentally sharp through personalized, evidence-based training.',
  keywords:
    "senior fitness expert, Parkinson's fitness specialist, balance training, cognitive exercise, functional aging, older adult trainer",
};

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight text-slate-950 sm:text-5xl">
                Because strength is more than muscle.
              </h1>
              <p className="text-lg text-slate-600">
                At TogetherWON, we believe that staying active is about more than fitness — it's about freedom,
                confidence, and connection. Our programs help adults over 60 strengthen their bodies, brains, and
                balance so they can keep doing what they love, with the people they love.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-sand-200/50 blur-3xl" />
              <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-brand-200/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[460px]">
                  <Image
                    src="/medium-vecteezy_grandfather-having-fun-with-his-little-granddaughter-in-the_5044012_medium.jpg"
                    alt="Active senior living with joy and vitality"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-white/80 bg-white/90 p-10 shadow-[var(--shadow-soft)]">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-slate-700">
              To help adults over 60 strengthen their bodies, brains, and balance with personalized in-home training —
              so they can continue to do what they love.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Our Approach</h2>
              <p className="mt-4 text-base text-slate-600">
                Aging well means training the body and the brain. Every TogetherWON program blends:
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[var(--shadow-soft)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <FaDumbbell className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Strength Training</h3>
                <p className="mt-2 text-sm text-slate-600">
                  to build muscle, improve mobility, and make daily life easier.
                </p>
              </div>
              <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[var(--shadow-soft)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <GiUnbalanced className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Balance & Coordination</h3>
                <p className="mt-2 text-sm text-slate-600">
                  to reduce fall risk and move with confidence.
                </p>
              </div>
              <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[var(--shadow-soft)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <FaBrain className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Brain-Body Integration</h3>
                <p className="mt-2 text-sm text-slate-600">
                  fun, science-based exercises that engage focus, memory, and reaction time.
                </p>
              </div>
            </div>
            <p className="text-base text-slate-600">
              This integrated model helps clients move better, think sharper, and maintain independence longer.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-white/80 bg-white/90 p-10 shadow-[var(--shadow-soft)]">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Who We Serve</h2>
            <p className="mt-4 text-base text-slate-600">
              TogetherWON provides in-home and online personal training for adults over 60, helping them build strength
              for daily living, improve balance, and challenge their brains through engaging, science-based movement
              games.
            </p>
            <p className="mt-4 text-base text-slate-600">
              Our support includes helping clients with joint replacements, arthritis, Parkinson's disease, balance
              challenges, and mild cognitive impairment — guiding them so they can stay active and capable through every
              stage of aging.
            </p>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative">
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 shadow-[var(--shadow-card)]">
                <div className="relative h-[500px]">
                  <Image
                    src="/Kristen&Phyllis 2.jpeg"
                    alt="Kristen Nielsen, Founder of TogetherWON"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-600">Kristen (left) with Phyllis</p>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">About the Founder</h2>
                <p className="mt-2 text-xl font-semibold text-slate-700">Kristen Nielsen, Founder of TogetherWON</p>
                <p className="mt-2 text-sm text-slate-600">
                  Certified Personal Trainer | Senior Fitness Specialist | Functional Aging Specialist | Parkinson's
                  Disease Specialist | Brain Health Trainer | Corrective Exercise Specialist
                </p>
              </div>
              <p className="text-base text-slate-600">
                Kristen Nielsen believes fitness is freedom. Inspired by her grandparents' vitality later in life and
                shaped by her experience as a lifelong athlete, Kristen blends personal passion with cutting-edge science
                to help adults age with strength and purpose.
              </p>
              <p className="text-base text-slate-600">
                Through TogetherWON, she's created a holistic approach that helps clients rebuild ability, improve
                balance and brain function, and rediscover what's possible.
              </p>
              <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-5 text-sm text-brand-900">
                <p className="text-lg font-semibold">&ldquo;Fitness is freedom.&rdquo;</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Start with a Free 1-Hour Fitness Consultation
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl text-center">Our Team</h2>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Developer - Aaron Nielsen */}
              <div className="rounded-4xl border border-white/80 bg-white/90 p-8 shadow-[var(--shadow-soft)]">
                <div className="relative mb-6 h-64 overflow-hidden rounded-3xl bg-slate-100">
                  {/* Placeholder for Aaron Nielsen picture */}
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">Aaron Nielsen</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-wide">Technology</p>
                <p className="mt-4 text-base text-slate-600">
                  {/* Placeholder for paragraph */}
                </p>
              </div>

              {/* Trainer - Alex Oliver */}
              <div className="rounded-4xl border border-white/80 bg-white/90 p-8 shadow-[var(--shadow-soft)]">
                <div className="relative mb-6 h-64 overflow-hidden rounded-3xl bg-slate-100">
                  {/* Placeholder for Alex Oliver picture */}
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">Alex Oliver</h3>
                <p className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-wide">Trainer</p>
                <p className="mt-4 text-base text-slate-600">
                  {/* Placeholder for paragraph */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 px-8 py-12 text-center text-white shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let's build your path to continued independence.</h2>
          <p className="mt-4 text-base text-slate-300">
            Start with a free 1-hour fitness consultation. We'll assess your current abilities and create a personalized
            plan that honors your goals and respects where you are today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-sand-100"
            >
              Book your free consultation
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
