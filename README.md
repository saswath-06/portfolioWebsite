# portfolioWebsite

Personal portfolio site for [Saswath Yeshwanth](https://github.com/saswath-06) — a single-file HTML/CSS/JS build with no framework or build step required.

## Features

- **3D hero** — Spline scene embedded via `<spline-viewer>`, with cache-busting and automatic fallback
- **Scroll-driven animations** — IntersectionObserver reveals and sticky pinned sections for work and contact
- **Interactive portrait card** — 3D tilt effect tracking mouse position
- **Paint trail** — canvas-based cursor effect
- **Tweaks panel** — runtime controls for name, tagline, Spline scene URL, theme, grain, and vignette
- **Themes** — Light, Dark, Warm, Mono (persisted to localStorage)
- **Responsive** — mobile-friendly layout with fluid type scaling

## Stack

| Layer | Tech |
|---|---|
| Markup / styles / logic | Vanilla HTML + CSS + JS (single file) |
| 3D scene | [Spline](https://spline.design) via `@splinetool/viewer` |
| Fonts | Space Grotesk, JetBrains Mono (Google Fonts) |

## Project structure

```
.
├── Personal Site.html   # entire site — markup, styles, and scripts
├── assets/              # images referenced by the site
├── scraps/              # ignored by git
└── uploads/             # ignored by git
```

## Local development

No build step needed. Open `Personal Site.html` directly in a browser, or serve it with any static server:

```bash
npx serve .
```

## Deploying

The site is a single HTML file — drop it (along with `assets/`) onto any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.).

## Contact

- Email: s2yeshwa@uwaterloo.ca
- LinkedIn: [/in/saswath-yeshwanth](https://www.linkedin.com/in/saswath-yeshwanth/)
- GitHub: [@saswath-06](https://github.com/saswath-06)
