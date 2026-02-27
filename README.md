# Elegance — Luxury Purse Brand Website

A premium, editorial-style multi-page React website for the **Elegance** luxury purse brand.

---

## Tech Stack

| Tool       | Purpose                        |
|------------|-------------------------------|
| React 18   | UI library                     |
| Vite 5     | Build tool & dev server        |
| Plain CSS  | Global styles + CSS variables  |
| No UI lib  | 100% custom components         |

---

## Project Structure

```
elegance/
├── public/
│   ├── index.html          # HTML entry point
│   └── favicon.svg         # Brand logomark SVG
│
├── src/
│   ├── main.jsx            # React DOM entry point
│   ├── App.jsx             # Root — routing state, grain wrapper
│   │
│   ├── styles/
│   │   └── global.css      # All CSS: tokens, animations, utilities
│   │
│   ├── data/
│   │   └── products.js     # Centralized data (products, collections, seasons)
│   │
│   ├── hooks/
│   │   └── useReveal.js    # IntersectionObserver scroll-reveal hook
│   │
│   ├── components/
│   │   ├── CustomCursor.jsx    # Dot + ring cursor tracker
│   │   ├── Nav.jsx             # Fixed top navigation with glass blur
│   │   ├── Footer.jsx          # Dark footer with newsletter + links
│   │   ├── MarqueeStrip.jsx    # Infinite scrolling ticker
│   │   └── WordmarkSection.jsx # Giant faded wordmark + chrome circle
│   │
│   └── pages/
│       ├── HomePage.jsx        # Hero, about, carousel, brand story
│       ├── CollectionsPage.jsx # Header, sidebar filters, asymmetric grid
│       ├── ArchivesPage.jsx    # Timeline scroll, quote, season registry
│       └── AboutPage.jsx       # Philosophy, collage, values, founder quote
│
├── package.json
├── vite.config.js
└── .eslintrc.cjs
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Design System

All tokens live in `src/styles/global.css` under `:root`:

```css
--primary:    #137fec   /* Azure blue — CTAs, accents */
--cornflower: #3f7cc4   /* Deeper blue — sections, headings */
--powder:     #afcdf2   /* Light blue — cards, badges */
--near-black: #0e0e0e   /* Body text */
```

**Typography**
- Display / Headings: `Playfair Display` (serif)
- Body / UI: `Manrope` (sans-serif)
- Archive notes: `Courier Prime` (monospace)

---

## Pages

| Route        | Component            | Key Sections                                     |
|--------------|----------------------|--------------------------------------------------|
| Home         | `HomePage`           | Hero, Marquee, About strip, Carousel, Brand story |
| Collections  | `CollectionsPage`    | Header, Filter sidebar, Asymmetric grid          |
| Archives     | `ArchivesPage`       | Horizontal timeline, Quote, Season registry      |
| About        | `AboutPage`          | Philosophy, Collage, Values, Founder quote       |

---

## Adding Products

All product data lives in `src/data/products.js`. To add a new carousel product:

```js
// src/data/products.js
export const CAROUSEL_PRODUCTS = [
  // ...existing products
  {
    id: 5,
    name: "New Bag Name",
    subtitle: "Edition subtitle",
    badge: "NEW",
    bg: "var(--powder)",
    textColor: "var(--cornflower)",
    image: "https://your-image-url.com/bag.jpg",
  },
];
```
