import Link from 'next/link';
import Image from 'next/image';
import {
  FiActivity,
  FiArrowRight,
  FiFeather,
  FiHeart,
  FiShield,
  FiStar,
  FiTarget,
  FiUsers,
  FiZap,
  FiCheckCircle,
  FiPlay,
} from 'react-icons/fi';
import { FaBrain, FaDumbbell } from 'react-icons/fa';
import { GiUnbalanced } from 'react-icons/gi';

export const metadata = {
  title: 'TogetherWON | Body, Brain, Balance for Life',
  description:
    'TogetherWON helps adults over 60 stay strong, steady, and sharp with in-home and online personal training that builds strength, balance, and brain function.',
  keywords:
    "in-home senior fitness, online senior training, balance training for seniors, brain-body exercise, Parkinson's exercise program, older adult fitness",
};

const pillars = [
  {
    title: 'Body',
    description: 'Build strength for everyday life.',
    icon: <FaDumbbell className="h-10 w-10" />,
    image: '/medium-vecteezy_senior-bearded-man-showing-muscles-wearing-white-t-shirt-pose_3162345_medium.jpg',
  },
  {
    title: 'Brain',
    description: 'Challenge memory and coordination.',
    icon: <FaBrain className="h-10 w-10" />,
    image: '/medium-vecteezy_elderly-woman-health-lifestyle-eyeglasses-isolated-background_25017369_medium.jpg',
  },
  {
    title: 'Balance',
    description: 'Improve stability and prevent falls.',
    icon: <GiUnbalanced className="h-10 w-10" />,
    image: '/medium-vecteezy_a-happy-elderly-woman-gives-a-thumbs-up-gesture-to-show-her_65656293_medium.jpg',
  },
];

const programs = [
  {
    name: 'In-Home Personal Training',
    summary:
      'Trainer-led sessions in your home plus a daily exercise plan for the days between visits. We help you rebuild strength, improve balance, and stay independent — the missing link between rehab and real life.',
    image: '/medium-vecteezy_senior-woman-in-wheelchair-doing-home-rehabilitation_35174795_medium.jpg',
  },
  {
    name: 'Small Group Training',
    summary:
      'Train with 2–6 people in fun, focused workouts that build strength, improve balance, and boost brain function — all in a supportive group environment.',
    image: '/medium-vecteezy_group-of-cheerful-senior-people-stacking-hands-after-sport_65579514_medium.jpg',
  },
  {
    name: 'Online Personal Training',
    summary:
      'Get personalized coaching anywhere in the country through live Zoom sessions and our easy-to-use StrongWON App, designed specifically for older adults.',
    image: '/medium-vecteezy_fitness-workout-training-senior-adult-mature-healthy-fit_52610034_medium.jpg',
  },
  {
    name: 'For Caregivers',
    summary:
      'Structured, engaging workout plan to do together — plus a short caregiver training course to help you feel confident as a workout partner.',
    image: '/medium-vecteezy_asian-woman-and-her-elderly-mother_66826229_medium.jpg',
    link: 'https://strong.togetherwon.com/',
  },
];

const whyChoose = [
  'Designed specifically for adults 60+',
  'Safe, science-based, and personalized',
  'Integrates strength, balance, and brain training',
  'Supports post-rehab recovery and long-term independence',
  'Senior-friendly app with videos and trainer support',
  'Trainers who meet you where you are — physically and emotionally',
];

const testimonials = [
  {
    quote: 'I have strength to do things I never imagined I could do again.',
    name: 'Julie, age 75',
  },
  {
    quote:
      "I like that I can do the exercises anywhere, I don't have to go to a gym… Thank you for your patience and concern.",
    name: 'Susan, age 79',
  },
  {
    quote: 'I am happy that this program addresses my individual problems.',
    name: 'Dan, age 82',
  },
  {
    quote:
      'Kristen is a picture of warmth and kindness mixed with knowledge and expertise… This program adjusts to the needs of clients based on injuries and lifestyle changes — it is excellent.',
    name: 'Kim, daughter of client',
  },
];

export default function Home() {
  return (
    <div className="space-y-28 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="absolute inset-0 -z-20 bg-hero-radial-bottom" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-8">
              <h1 className="text-4xl leading-[1.1] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                Helping adults over 60 strengthen their bodies, brains, and balance — so they can keep doing what they
                love.
              </h1>
              <p className="max-w-xl text-lg text-slate-700">
                Personalized in-home and online fitness programs that help you move better, think sharper, and live
                stronger — with the guidance and support of trainers who care.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Start with a Free 1-Hour Fitness Consultation
                  <FiArrowRight className="ml-3 h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-3xl bg-brand-200/60 blur-3xl" />
              <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-plum-200/60 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl bg-white shadow-[var(--shadow-card)]">
                <div className="relative h-[520px]">
                  <Image
                    src="/senior2.jpeg"
                    alt="Active senior strength training at home"
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

      {/* Our Approach — Body • Brain • Balance */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Our Approach — Body • Brain • Balance</h2>
            <p className="mt-4 text-base text-slate-600">
              TogetherWON combines strength, balance, and cognitive training to help older adults stay strong, steady,
              and mentally sharp. Every program is personalized, evidence-based, and designed to support independence —
              so you can enjoy the activities, people, and moments that matter most.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-4xl border border-white/80 bg-white/80 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 px-6 pb-8 pt-6">
                  <div className="inline-flex items-center gap-3 rounded-full bg-brand-50 px-4 py-2 text-base font-semibold text-brand-700">
                    {pillar.icon}
                    {pillar.title}
                  </div>
                  <p className="text-base text-slate-600">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet TogetherWON (Video Section) */}
      <section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-white/80 bg-white/90 p-10 shadow-[var(--shadow-soft)]">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Meet TogetherWON</h2>
              <p className="text-lg font-semibold text-slate-700">A personal message from our founder, Kristen Nielsen.</p>
              <p className="mx-auto max-w-2xl text-base text-slate-600">
                Hear why we created TogetherWON, how our programs help adults over 60 stay active and independent, and
                what makes our approach different. We believe fitness should feel empowering, encouraging, and
                achievable for everyone — and we're here to help you every step of the way.
              </p>
              <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-3xl bg-slate-200">
                {/* Placeholder for video - replace with actual video embed */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <FiPlay className="mx-auto h-16 w-16 text-brand-600" />
                    <p className="mt-4 text-sm text-slate-600">Video coming soon</p>
                  </div>
                </div>
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

      {/* What We Offer */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Programs designed for your lifestyle.</h2>
            <p className="text-base text-slate-600">
              Whether you prefer training in your home, online, or with a small group, TogetherWON offers flexible
              options that fit your goals and abilities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <article
                key={program.name}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent" />
                </div>
                <div className="flex flex-1 flex-col space-y-5 px-6 pb-8 pt-6">
                  <h3 className="text-xl font-semibold text-slate-900">{program.name}</h3>
                  <p className="text-sm text-slate-600">{program.summary}</p>
                  {program.link ? (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-600"
                    >
                      Learn more
                      <FiArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-600"
                    >
                      Check availability
                      <FiArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Start with a Free 1-Hour Fitness Consultation
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Clients Choose TogetherWON */}
      <section>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/70 bg-white/85 px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Why TogetherWON is different.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm"
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                  <p className="text-base text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories, Real Strength (Testimonials) */}
      <section>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-plum-100/70 bg-plum-50/60 px-6 py-14 shadow-[var(--shadow-soft)] sm:px-10 lg:px-16">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Real Stories, Real Strength</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="flex items-center gap-2 text-sand-500">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} className="h-4 w-4 fill-sand-300 text-sand-300" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base text-slate-700">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 px-8 py-12 text-center text-white shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to start moving better and feeling stronger?</h2>
          <p className="mt-4 text-base text-slate-300">
            Your first session is free — a one-hour consultation and fitness evaluation where we'll learn about your goals,
            assess your movement and balance, and create a plan that fits your life.
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
