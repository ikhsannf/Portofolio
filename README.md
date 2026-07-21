# 🌟 Personal Portfolio — Muh. Ikhsan Fahmi

A modern, single-page portfolio with an editorial **ink + cobalt** design, built with Next.js 16 and framer-motion. Interactive canvas backgrounds, scroll-driven animations, and a working contact form.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0066?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Editorial dark theme** — a single ink (`#0c0c0c`) + cobalt (`#3b5bff`) design on warm cream accents
- 🖱️ **Interactive hero** — a cursor-reactive dot-field canvas background (React Bits `DotField`)
- 🧑‍💻 **Pixel portrait** — the About photo shimmers with a cobalt pixel effect on hover (React Bits `PixelCard`)
- 📜 **Scroll-driven motion** — stacked project cards, reveal animations, and a parallax tech-stack marquee
- 🔄 **Rotating project showcase** — auto-cycling, clickable index of all projects
- 🧭 **Context-aware navbar** — text flips between light and dark depending on the section behind it
- ✉️ **Working contact form** — email delivery via [Resend](https://resend.com) through a Next.js Route Handler
- 📱 **Fully responsive** and accessible (respects `prefers-reduced-motion`)

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (config-less, tokens in `globals.css`)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [Resend](https://resend.com/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Font:** [Kanit](https://fonts.google.com/specimen/Kanit) (Google Fonts)
- **Effects:** [React Bits](https://reactbits.dev/) — `DotField`, `PixelCard`

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Steps

1. **Clone & install**
   ```bash
   git clone https://github.com/ikhsannf/<repo>.git
   cd <repo>
   npm install
   ```

2. **Set up environment variables** — the contact form needs a Resend API key:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and set `RESEND_API_KEY` (get one at [resend.com](https://resend.com)).

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── public/
│   ├── assets/       # photo, tech-stack logos
│   ├── cv/           # CV (PDF)
│   ├── certificate/  # certificate (PDF)
│   └── proposals/    # project proposal (PDF)
├── src/
│   ├── app/
│   │   ├── api/send-email/route.ts  # Resend contact endpoint
│   │   ├── globals.css              # Tailwind v4 theme tokens + custom utilities
│   │   ├── layout.tsx
│   │   └── page.tsx                 # assembles all sections
│   └── components/
│       ├── Header.tsx      Hero.tsx       Marquee.tsx
│       ├── About.tsx       Services.tsx   Projects.tsx
│       ├── Showcase.tsx    Experience.tsx Contact.tsx
│       ├── DotField.jsx    PixelCard.jsx  # React Bits effects (+ .css / .d.ts)
│       └── FadeIn.tsx      AnimatedText.tsx  ContactButton.tsx  PillLink.tsx
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🎨 Customization

- **Content** — edit the data arrays at the top of `Projects.tsx`, `Experience.tsx`, `Showcase.tsx`, and the copy in `Hero.tsx` / `About.tsx`.
- **Colors** — change the palette tokens (`--color-ink`, `--color-accent`, …) in `src/app/globals.css`. Two button gradients are inlined in `ContactButton.tsx` and `Contact.tsx` — update those to match if you change the accent.
- **CV / documents** — replace the files under `public/cv`, `public/certificate`, `public/proposals`.
- **Metadata / SEO** — edit `src/app/layout.tsx`.

## 🌐 Deployment

Deploys cleanly to [Vercel](https://vercel.com). Push to GitHub, import the repo, and add the `RESEND_API_KEY` environment variable in the project settings.

## 👤 Author

**Muh. Ikhsan Fahmi**

- GitHub: [@ikhsannf](https://github.com/ikhsannf)
- LinkedIn: [justsann](https://www.linkedin.com/in/justsann/)
- Instagram: [@justsannn](https://www.instagram.com/justsannn/)
- Email: ikhsan.f3105@gmail.com

## 🙏 Acknowledgments

- Interactive effects from [React Bits](https://reactbits.dev/)
- Icons from [Lucide](https://lucide.dev/)
- Font from [Google Fonts](https://fonts.google.com/)
