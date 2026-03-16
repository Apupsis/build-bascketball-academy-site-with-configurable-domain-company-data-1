# Basketball Academy Website Specification

## Project Overview

- **Project Name**: Pro Court Academy
- **Type**: Multi-tenant basketball academy website with configurable domain
- **Core Functionality**: Showcase basketball academy services, programs, coaches, and allow contact/enrollment
- **Target Users**: Parents, young athletes, basketball enthusiasts looking for training programs

## UI/UX Specification

### Layout Structure

**Header (Fixed)**
- Logo (left) - company name with basketball icon
- Navigation: Home, Programs, Coaches, Gallery, Contact
- CTA Button: "Enroll Now"
- Height: 80px

**Hero Section**
- Full-width background image with overlay
- Main headline + subheadline
- Two CTA buttons: "View Programs" and "Contact Us"
- Height: 90vh

**Programs Section**
- 3-column grid of program cards
- Each card: image, title, description, price, duration

**Coaches Section**
- 4-column grid of coach profiles
- Each: photo, name, title, specialization, experience

**Testimonials Section**
- Carousel with student/parent testimonials

**Gallery Section**
- Masonry grid of basketball training photos

**Contact Section**
- Two-column: contact form + contact info
- Map placeholder

**Footer**
- Logo, quick links, social media, copyright

### Visual Design

**Color Palette**
- Primary: #E63946 (Vibrant Red)
- Secondary: #1D3557 (Deep Navy)
- Accent: #F4A261 (Warm Orange)
- Background: #F8F9FA (Off-white)
- Dark Background: #1A1A2E (Dark Navy)
- Text Primary: #1D3557
- Text Light: #FFFFFF

**Typography**
- Headings: "Bebas Neue", sans-serif
- Body: "Barlow", sans-serif
- Hero Title: 80px
- Section Titles: 48px
- Card Titles: 24px
- Body: 16px

**Spacing**
- Section Padding: 100px vertical
- Container Max Width: 1200px
- Card Gap: 30px

**Visual Effects**
- Hero: Diagonal split with image and gradient
- Cards: Subtle shadow on hover, scale 1.02
- Buttons: Hover scale 1.05 with color shift
- Smooth scroll between sections
- Parallax effect on hero background

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## Functionality Specification

### Configurable Data Structure

```typescript
interface CompanyConfig {
  domain: string;
  company: {
    name: string;
    tagline: string;
    logo: string;
    email: string;
    phone: string;
    address: string;
    social: {
      facebook: string;
      instagram: string;
      youtube: string;
    };
  };
  programs: Program[];
  coaches: Coach[];
  testimonials: Testimonial[];
  gallery: string[];
}
```

### Core Features
1. **Dynamic Company Data**: All content loaded from config file
2. **Domain-based Configuration**: Site adapts to configured domain
3. **Smooth Navigation**: Single-page scroll with anchor links
4. **Contact Form**: Functional form with validation
5. **Responsive Design**: Works on all devices
6. **SEO Ready**: Proper meta tags and semantic HTML

### User Interactions
- Hover effects on all interactive elements
- Smooth scroll to sections
- Form validation on contact form
- Mobile hamburger menu

## Acceptance Criteria

1. Site loads without errors
2. All sections render correctly
3. Contact form validates inputs
4. Responsive on mobile/tablet/desktop
5. All colors and fonts match specification
6. Company data is configurable via single config file
