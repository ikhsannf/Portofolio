# 🌟 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring dark mode, smooth animations, and a clean design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 16 and Turbopack
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📊 **Interactive Sections**:
  - Hero section with typing animation
  - About section with info cards
  - Projects showcase with category filters
  - Experience timeline
  - Skills with animated progress bars
  - Animated statistics counter
  - Tools & Technologies grid
  - Contact form
  - Scroll-to-top button

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with Turbopack
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Inter, Poppins)
- **Icons:** Custom SVG icons

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ikhsannf/Template.git
   cd Template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/          # Images and media files
│   └── cv/             # CV/Resume files
├── src/
│   ├── app/
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── ScrollToTop.tsx
│       ├── Statistics.tsx
│       ├── ThemeToggle.tsx
│       └── Tools.tsx
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
2. **About Section** - Edit `src/components/About.tsx`
3. **Projects** - Edit `src/components/Projects.tsx`
4. **Experience** - Edit `src/components/Experience.tsx`
5. **Skills** - Edit `src/app/page.tsx`

### Add Your CV

Place your CV file in `public/cv/` and name it `CV_Muh_Ikhsan_Fahmi.pdf` (or update the path in `About.tsx`)

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme

### Update Meta Tags

Edit `src/app/layout.tsx` to update SEO metadata

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ikhsannf/Template)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

- **Netlify:** Connect your GitHub repo
- **Railway:** Deploy with one click
- **AWS Amplify:** Connect your repository

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muh. Ikhsan Fahmi**

- GitHub: [@ikhsannf](https://github.com/ikhsannf)
- Instagram: [@justsannn](https://www.instagram.com/justsannn/)
- Email: ikhsan.f3105@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Fonts from Google Fonts
- Built with ❤️ using Next.js

---

⭐ **Star this repo if you find it helpful!**
