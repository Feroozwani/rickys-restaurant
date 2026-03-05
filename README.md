# 🍽️ Ricky's Restaurant — Next.js Website

A fully-featured, production-ready restaurant website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, inspired by [rickyrestaurants.com](https://rickyrestaurants.com).

---

## ✨ Features

### Design & UX
- 🎨 Luxury dark aesthetic with gold accent palette (`#c8a96e`)
- 📱 **Fully responsive** — mobile, tablet, and desktop optimized
- 🖋️ Elegant typography using Playfair Display + Lato (Google Fonts)
- 🌊 Smooth scroll animations and hover micro-interactions
- 🔝 Custom scrollbar, scroll-to-top button, WhatsApp float
- 🎯 CSS-only dropdown menus with sub-menus

### Pages Included
| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about-us` |
| Menu | `/menu` |
| Contact / Reservation | `/contact-us` |
| Private Catering | `/private-catering` |
| Wedding Catering | `/wedding-catering-in-dubai` |
| Birthday Party | `/birthday-party-catering-in-dubai` |
| Corporate Catering | `/corporate-catering-in-dubai` |
| Catering Inquiry Form | `/catering-inquiry-form` |
| Privacy Policy | `/privacy-policy` |
| 404 Page | (auto) |

### Technical Highlights
- ⚡ **Next.js 14 App Router** with server components where possible
- 🔒 **TypeScript** throughout for type safety
- 🎛️ **Client components** only where interactivity is needed
- 📊 **Animated counters** triggered by IntersectionObserver
- 🖼️ Image optimization hints with `next/image` config
- 🗺️ Embedded Google Map on Contact page (dark-themed)
- 📝 Working contact form with success state
- 🍽️ Tabbed menu interface
- 💬 Testimonial carousel
- 📍 Breadcrumb navigation on all inner pages
- 🔍 SEO metadata on every page

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
ricky-restaurant/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles + CSS variables
│   ├── page.tsx                # Home page
│   ├── about-us/page.tsx
│   ├── menu/page.tsx           # Tabbed menu (client)
│   ├── contact-us/page.tsx     # Reservation form + map (client)
│   ├── private-catering/page.tsx
│   ├── wedding-catering-in-dubai/page.tsx
│   ├── birthday-party-catering-in-dubai/page.tsx
│   ├── corporate-catering-in-dubai/page.tsx
│   ├── catering-inquiry-form/page.tsx
│   ├── privacy-policy/page.tsx
│   └── not-found.tsx           # Custom 404
├── components/
│   ├── Navbar.tsx              # Sticky nav with dropdowns (client)
│   ├── Footer.tsx              # Footer with gallery grid (server)
│   ├── PageLayout.tsx          # Page wrapper with hero
│   └── ClientUtils.tsx         # ScrollToTop, WhatsApp, Counter, Testimonials
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design Decisions

### Color System
```css
--gold: #c8a96e          /* Primary accent */
--gold-dark: #b8945a     /* Hover state */
--dark: #111111          /* Background */
--dark-card: #1a1a1a     /* Card background */
--dark-deep: #0d0d0d     /* Hero/deep sections */
```

### Enhancements vs Original
1. **CSS Variables** — consistent theming throughout
2. **Scroll-aware Navbar** — glass effect with backdrop blur on scroll  
3. **Animated counters** — visible only when in viewport
4. **"Why Choose Us" section** — added value proposition section
5. **Form validation states** — success message after submission
6. **Dark-themed map** — consistent with site aesthetic
7. **WhatsApp direct CTA** — on contact page with chat link
8. **Tabbed menu** — organized into categories for better UX
9. **Custom scrollbar** — gold-themed browser scrollbar
10. **CSS-only animations** — `slideUp` on hero, hover transforms on cards

---

## 📞 Contact

- **Phone:** +971 54 339 2616 / +971 4 514 7066
- **Email:** director@rickyrestaurants.com
- **Address:** Shop No. 5, Marina Pearl View Hotel Apt., Dubai Marina

---

*Built with ❤️ — Ricky's Restaurant, Dubai*
