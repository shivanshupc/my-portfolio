# Personal Portfolio

A modern, minimal personal portfolio website built with Next.js and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
- Update your name and title in `app/layout.tsx` (metadata)
- Update hero content in `components/Hero.tsx`
- Fill in your about information in `app/about/page.tsx`
- Add your real skills in `app/skills/page.tsx`
- Update resume content in `app/resume/page.tsx`
- Replace sample photos in `app/photography/page.tsx`

### Contact Info
- Update email and social links in `components/Footer.tsx`
- Update contact details in `components/ContactSection.tsx`

### Images
- Add your profile photo to `public/images/profile.jpg`
- Add photography images to `public/images/photography/`
- Add your resume PDF to `public/resume.pdf`

### Colors
- Customize the color scheme in `tailwind.config.ts`

## Deployment

Deploy to Vercel:

```bash
npm i -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Typography**: Inter font
- **Icons**: Lucide React
- **Deployment**: Vercel