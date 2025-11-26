'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'Our Story' },
    { href: '/services', label: 'Programs' },
    { href: '/testimonials', label: 'Results' },
    { href: '/contact', label: 'Connect' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-lg backdrop-blur-md'
          : 'bg-white/75 shadow-outline-soft backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image
                src="/twlogo.png"
                alt="TogetherWON Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.4em] text-brand-600">
                TogetherWON
              </span>
              <span className="block text-lg font-semibold text-slate-950">
                Body • Brain • Balance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7192869450"
              className="ml-6 inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:text-brand-800"
            >
              <FiPhoneCall className="h-4 w-4" />
              (719) 286-9450
            </a>
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-full border border-slate-200 p-2 text-slate-700 transition-colors hover:border-brand-200 hover:text-brand-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:7192869450"
              className="flex items-center justify-center gap-2 rounded-xl border border-brand-200 px-4 py-3 text-base font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiPhoneCall className="h-5 w-5" />
              (719) 286-9450
            </a>
            <Link
              href="/contact"
              className="block rounded-xl bg-brand-600 px-6 py-3 text-center text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
