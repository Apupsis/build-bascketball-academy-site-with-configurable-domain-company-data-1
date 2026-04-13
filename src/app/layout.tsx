"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { companyConfig } from "@/config/company";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/programs", label: "البرامج" },
    { href: "/coaches", label: "المدربون" },
    { href: "/gallery", label: "الصور" },
    { href: "/blog", label: "المقالات" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{companyConfig.company.name} - {companyConfig.company.tagline}</title>
        <meta name="description" content="أفضل أكاديمية basketball في مصر. تدريب احترافي للناشئين والشباب." />
      </head>
      <body>
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="container header-content">
            <Link href="/" className="logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="2"/>
                <path d="M20 8 L20 32 M8 20 L32 20 M12 12 L28 28 M28 12 L12 28" stroke="#F4A261" strokeWidth="1.5"/>
              </svg>
              {companyConfig.company.name}
            </Link>
            <nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/contact" className="btn btn-primary">
              سجل الآن
            </Link>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-brand">{companyConfig.company.name}</div>
                <p className="footer-desc">
                  أفضل أكاديمية basketball في مصر. نساعدك على تحقيق أحلامك في عالم كرة السلة.
                </p>
              </div>
              <div>
                <h4 className="footer-title">روابط سريعة</h4>
                <ul className="footer-links">
                  <li><Link href="/programs">البرامج</Link></li>
                  <li><Link href="/coaches">المدربون</Link></li>
                  <li><Link href="/gallery">الصور</Link></li>
                  <li><Link href="/blog">المقالات</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-title">تواصل معنا</h4>
                <ul className="footer-links">
                  <li>{companyConfig.company.phone}</li>
                  <li>{companyConfig.company.email}</li>
                  <li>{companyConfig.company.address}</li>
                </ul>
              </div>
              <div>
                <h4 className="footer-title">تابعنا</h4>
                <div className="social-links">
                  <a href={companyConfig.company.social.facebook} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href={companyConfig.company.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                  </a>
                  <a href={companyConfig.company.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1A1A2E"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              © 2026 {companyConfig.company.name}. جميع الحقوق محفوظة.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}