import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FirebaseInit from '@/components/FirebaseInit';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'TogetherWON | Body, Brain, Balance for Life',
  description:
    'TogetherWON delivers evidence-led in-home training for older adults who want to stay strong, sharp, and steady. Personalized programs for body, brain, and balance.',
  keywords:
    'senior fitness, older adult training, brain health, balance training, Monument Colorado personal trainer, in-home workouts, functional aging specialist',
  icons: {
    icon: '/twlogo.png',
    shortcut: '/twlogo.png',
    apple: '/twlogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="bg-sand-50 text-slate-900 antialiased">
        <FirebaseInit />
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-20 bg-warm-gradient" />
          <div className="pointer-events-none absolute -top-52 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-200/60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10rem] left-[-8rem] -z-10 h-[26rem] w-[26rem] rounded-full bg-plum-200/40 blur-3xl" />
          <Navigation />
          <main className="pt-24 lg:pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
