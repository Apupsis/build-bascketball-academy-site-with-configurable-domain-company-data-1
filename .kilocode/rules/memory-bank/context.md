# Active Context: Basketball Academy Website

## Current State

**Project Status**: ✅ Complete — Improved & Optimized

A fully functional basketball academy website with configurable company data, proper SEO metadata, and quality static export.

## Recently Completed (Latest Session)

- [x] **Critical Bug Fix**: Refactored `layout.tsx` from `"use client"` to server component
  - Created `src/components/Header.tsx` (client) with `usePathname()` active link detection
  - Created `src/components/Footer.tsx` (server) with logo, clickable phone/email
- [x] **SEO**: Added `export const metadata` to ALL pages (layout, homepage, programs, coaches, gallery, blog, contact, all legal pages)
- [x] **SEO**: Added `generateMetadata` for dynamic `/blog/[slug]` pages
- [x] **SEO**: Added global OpenGraph + Twitter Card tags in layout
- [x] **SEO**: Created `public/robots.txt` and `public/sitemap.xml`
- [x] **Content**: Fixed all mixed-language text (Arabic/English/Russian/Japanese)
- [x] **Content**: Fixed Chinese character `月` in prices → `شهر`
- [x] **Content**: Expanded article content (each article now has 5+ sections)
- [x] **Content**: Expanded coach biographies
- [x] **Performance**: Migrated Google Fonts @import → `next/font/google` (Tajawal)
- [x] **Performance**: Added `fetchPriority="high"` on hero image
- [x] **Build Quality**: Added `trailingSlash: true` to `next.config.ts`
- [x] **UX**: Created custom `not-found.tsx` (404 page) in site style
- [x] **Build**: TypeScript clean + 16/16 static pages generated successfully
- [x] **File Creation**: Created `domain.md` containing the current domain name `cairocourts.com`.
- [x] **Asset Localization**: Downloaded all 22 external images locally to `public/images/` and updated `company.ts` config, `page.tsx` Hero, and `layout.tsx` metadata to use them.



## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/config/company.ts` | Company data & configuration | ✅ Complete |
| `src/app/layout.tsx` | Server layout with metadata | ✅ Fixed |
| `src/components/Header.tsx` | Client header with nav | ✅ New |
| `src/components/Footer.tsx` | Server footer with logo | ✅ New |
| `src/app/not-found.tsx` | Custom 404 page | ✅ New |
| `src/app/globals.css` | Custom design system | ✅ Updated |
| `public/robots.txt` | SEO robots file | ✅ New |
| `public/sitemap.xml` | SEO sitemap | ✅ New |
| `next.config.ts` | trailingSlash: true | ✅ Updated |

## Configuration

To customize the site, edit `src/config/company.ts`:
- `domain`: Your domain (e.g., "cairocourts.com")
- `company`: Name, tagline, contact info, social links
- `programs`: Training programs array (prices use Arabic: `جم/شهر`)
- `coaches`: Coach profiles array (with full bios)
- `testimonials`: Customer testimonials (with full quotes)
- `gallery`: Training images
- `articles`: Blog articles (with full HTML content)

## Quick Start Guide

### Run development server:
```bash
npm run dev
```

### Build for production (static export):
```bash
npm run build
```

### Preview static build:
```bash
npx serve out
```

### Run typecheck:
```bash
npm run typecheck
```

## Session History

| Date | Changes |
|------|---------|
| Initial | Basketball academy website built with configurable domain and company data |
| Session 2 | RTL optimization & Arabic localization |
| Session 3 | Enhanced mobile responsive design with 4 breakpoints |
| Session 4 | Major: SEO metadata, layout refactor, content fixes, sitemap, robots.txt, 404 page, trailingSlash, next/font |
| Session 5 | Created `domain.md` with the current domain name `cairocourts.com` |
| Session 6 | Downloaded and localized all external images, removing all external remote image dependencies. |
