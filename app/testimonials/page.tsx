import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Client Stories & Testimonials | TogetherWON',
  description:
    'Real stories from TogetherWON clients who have regained strength, confidence, and independence through personalized in-home and online training.',
  keywords:
    "client success stories, senior exercise testimonials, Parkinson's recovery fitness, balance improvement seniors",
};

const testimonialsData = [
  {
    name: 'Julie',
    age: '75',
    quote: 'I have strength to do things I never imagined I could do again.',
    image: '/julie.jpg',
  },
  {
    name: 'Susan',
    age: '79',
    quote:
      "I like that I can do the exercises anywhere, I don't have to go to a gym… Thank you for your patience and concern.",
    image: '/susan.jpeg',
  },
  {
    name: 'Dan',
    age: '82',
    quote: 'I am happy that this program addresses my individual problems.',
    image: '/senior2.jpg',
  },
  {
    name: 'Kim',
    age: 'daughter of client',
    quote:
      'Kristen is a picture of warmth and kindness mixed with knowledge and expertise… This program adjusts to the needs of clients based on injuries and lifestyle changes — it is excellent.',
    image: '/kim.JPEG',
  },
];

export default function Testimonials() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-radial" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <h1 className="text-4xl leading-tight text-slate-950 sm:text-5xl">Real Stories, Real Strength</h1>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {testimonialsData.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group relative flex h-full flex-col rounded-4xl border border-white/80 bg-white/90 p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center gap-4 mb-6">
                  {testimonial.image ? (
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-lg font-semibold text-brand-700">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500">age {testimonial.age}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sand-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} className="h-4 w-4 fill-sand-200 text-sand-200" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-slate-900">— {testimonial.name}, {testimonial.age}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 px-8 py-12 text-center text-white shadow-[var(--shadow-soft)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to write your own success story?</h2>
          <p className="mt-4 text-base text-slate-300">
            Start with a free 1-hour fitness consultation. We'll assess your balance, strength, and goals—then create
            your personalized path to continued independence and freedom.
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
