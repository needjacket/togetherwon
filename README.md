# Together Won - Fitness Training Website

A professional, modern website for Together Won fitness training services, specializing in in-home fitness training for older adults.

## Features

- **Modern Next.js 14** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, professional styling
- **Framer Motion** for smooth animations
- **React Icons** for consistent iconography
- **SEO optimized** with metadata configuration

## Pages

- **Home** - Hero section, benefits, training philosophy, and CTAs
- **About** - Kristen Nielsen's profile, certifications, and story
- **Services** - Individual and small group training options
- **Testimonials** - Client success stories and transformations
- **Resources** - Articles, videos, and downloadable resources
- **Contact** - Contact form, information, and FAQs

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

This command runs `next build` with `output: 'export'`, so the fully static site is written to the `out/` directory and is ready to publish without a Node.js server.

### Deploying to GitHub Pages

1. Run `npm run build` to refresh the `out/` folder.
2. Commit the contents of `out/` to a `gh-pages` branch (or let an action push that folder to GitHub Pages).
3. Ensure the published branch contains the generated `CNAME` file so GitHub keeps the `www.togetherwon.com` domain setting.
4. Leave the `.nojekyll` file untouched—this prevents GitHub Pages from stripping the `_next` assets that Next.js needs.

### Production

```bash
npm start
```

## Project Structure

```
togetherwon/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── testimonials/      # Testimonials page
│   ├── resources/         # Resources page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── public/               # Static assets
└── package.json          # Dependencies
```

## Customization

### Images

The website uses Unsplash images for stock photography. To use your own images:

1. Replace the Unsplash URLs in the pages with your own image paths
2. Add images to the `/public` folder
3. Update the `next.config.js` image domains if using external images

### Contact Form

The contact form currently logs to the console. To make it functional:

1. Set up a backend API route or use a service like Formspree
2. Update the `handleSubmit` function in `app/contact/page.tsx`

### Branding

- Update colors in `tailwind.config.ts`
- Modify fonts in `app/globals.css`
- Replace "Together Won" text throughout the site
- Add your logo to the navigation component

## Technologies

- Next.js 14.2.3
- React 18.3.1
- TypeScript 5
- Tailwind CSS 3.4.3
- Framer Motion 11.2.10
- React Icons 5.2.1

## License

All rights reserved - Together Won
