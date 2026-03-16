"use client";

import { useState } from "react";
import { companyConfig } from "@/config/company";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const { company, programs, coaches, testimonials, gallery } = companyConfig;

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-content">
          <a href="#" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="2" />
              <path
                d="M20 8C14.5 8 10 12.5 10 20C10 27.5 14.5 32 20 32C25.5 32 30 27.5 30 20C30 12.5 25.5 8 20 8Z"
                stroke="#E63946"
                strokeWidth="2"
              />
              <path d="M10 20H30M20 8V32" stroke="#E63946" strokeWidth="1.5" />
              <path
                d="M14 14L26 26M14 26L26 14"
                stroke="#F4A261"
                strokeWidth="1.5"
              />
            </svg>
            {company.name}
          </a>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#coaches">Coaches</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: "10px 24px" }}>
              Enroll Now
            </a>
          </nav>
          <button className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Train Like a <span>Champion</span>
            </h1>
            <p className="hero-subtitle">
              {company.tagline} - Join the premier basketball academy and unlock your full potential with world-class coaching.
            </p>
            <div className="hero-buttons">
              <a href="#programs" className="btn btn-primary">
                View Programs
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section programs">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Choose the perfect training program for your skill level and goals
          </p>
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <img src={program.image} alt={program.title} className="program-image" />
                <div className="program-content">
                  <span className="program-age">{program.ageGroup}</span>
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                  <ul className="program-features">
                    {program.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="program-footer">
                    <span className="program-price">{program.price}</span>
                    <span className="program-duration">{program.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="section coaches">
        <div className="container">
          <h2 className="section-title">Meet Our Coaches</h2>
          <p className="section-subtitle">
            Learn from experienced professionals who have played at the highest levels
          </p>
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card">
                <img src={coach.image} alt={coach.name} className="coach-image" />
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-title">{coach.title}</p>
                <p className="coach-specialization">{coach.specialization}</p>
                <p className="coach-experience">{coach.experience} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">
            Hear from our community of athletes and their families
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-content">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section gallery">
        <div className="container">
          <h2 className="section-title">Training Gallery</h2>
          <p className="section-subtitle">
            Get a glimpse of what awaits you at {company.name}
          </p>
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your basketball journey? Contact us today!
          </p>
          <div className="contact-grid">
            <form className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your goals and interests..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <strong>Address</strong>
                  {company.address}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <strong>Email</strong>
                  {company.email}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <strong>Phone</strong>
                  {company.phone}
                </div>
              </div>
              <div className="social-links">
                <a href={company.social.facebook} className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href={company.social.instagram} className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={company.social.youtube} className="social-link" aria-label="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">{company.name}</div>
              <p className="footer-desc">
                {company.tagline}. Providing world-class basketball training to athletes of all ages and skill levels.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Programs</h4>
              <ul className="footer-links">
                <li><a href="#programs">Youth Development</a></li>
                <li><a href="#programs">Elite Training</a></li>
                <li><a href="#programs">Private Coaching</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li>{company.phone}</li>
                <li>{company.email}</li>
                <li>{company.address}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
