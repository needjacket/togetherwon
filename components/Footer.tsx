import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 bg-slate-900 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_55%)]" />
      <div className="absolute inset-x-0 -top-12 mx-auto h-24 w-24 rounded-full bg-brand-400/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-3 backdrop-blur">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-200">
                TogetherWON
              </span>
              <span className="text-sm text-sand-200">Est. 2016</span>
            </div>
            <h3 className="text-4xl font-semibold text-white">
              Aging strong, thinking sharp, moving confidently.
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
              Personalized in-home programs that weave together strength, balance, cognitive training,
              and compassionate coaching—for older adults who plan to keep doing what they love.
            </p>
            <div className="mt-6 inline-flex items-center gap-4 rounded-full bg-white/10 px-10 py-4 text-base font-medium text-white transition hover:bg-white/15">
              <FiPhone className="h-4 w-4" />
              <a href="tel:7192869450" className="whitespace-nowrap">
                (719) 286-9450
              </a>
              <span aria-hidden="true" className="text-slate-400">
                •
              </span>
              <a
                href="mailto:kristen@togetherwon.com"
                className="underline decoration-brand-300 underline-offset-4 whitespace-nowrap"
              >
                kristen@togetherwon.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
              Explore
            </h4>
            <ul className="mt-6 space-y-3 text-base text-slate-300">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  Our Story & Credentials
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="transition hover:text-white">
                  Client Success
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
              Weekly Newsletter
            </h4>
            <p className="mt-6 text-base text-slate-300">
              Join older adults who receive science-backed tips for strength, cognition, and balance every
              Saturday morning.
            </p>
            <a
              href="https://forms.aweber.com/form/98/571981198.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-sand-100"
            >
              Subscribe now
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} TogetherWON. All rights reserved.</p>
          <p className="text-slate-400">
            Proud member of TCA Titans &amp; Tri-Lakes Chamber of Commerce • Serving Monument &amp; Colorado
            Springs
          </p>
        </div>
      </div>
    </footer>
  );
}
