# Active Context: Basketball Academy Website

## Current State

**Project Status**: ✅ Complete

A fully functional basketball academy website with configurable company data and domain.

## Recently Completed

- [x] Created SPEC.md specification document
- [x] Built basketball academy website with:
  - Configurable company data (src/config/company.ts)
  - Domain configuration
  - Programs section (Youth Development, Elite Training, Private Coaching)
  - Coaches section (4 coaches with profiles)
  - Testimonials section
  - Gallery section
  - Contact form with validation
  - Responsive design (mobile/tablet/desktop)
- [x] Custom design system with:
  - Color palette: Primary #E63946, Secondary #1D3557, Accent #F4A261
  - Typography: Bebas Neue (headings), Barlow (body)
  - Smooth animations and hover effects
- [x] All typecheck and build passes

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/config/company.ts` | Company data & configuration | ✅ Complete |
| `src/app/page.tsx` | Main homepage | ✅ Complete |
| `src/app/layout.tsx` | Root layout with metadata | ✅ Complete |
| `src/app/globals.css` | Custom design system | ✅ Complete |
| `public/logo.svg` | Basketball logo | ✅ Complete |
| `SPEC.md` | Project specification | ✅ Complete |

## Configuration

To customize the site, edit `src/config/company.ts`:
- `domain`: Your domain (e.g., "myacademy.com")
- `company`: Name, tagline, contact info, social links
- `programs`: Training programs array
- `coaches`: Coach profiles array
- `testimonials`: Customer testimonials
- `gallery`: Training images

## Quick Start Guide

### Run development server:
```bash
bun run dev
```

### Build for production:
```bash
bun run build
```

### Run typecheck:
```bash
bun run typecheck
```

### Run lint:
```bash
bun run lint
```

## Session History

| Date | Changes |
|------|---------|
| Initial | Basketball academy website built with configurable domain and company data |
