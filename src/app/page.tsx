import { companyConfig } from "@/config/company";

export default function Home() {
  const { company, programs, coaches, testimonials, gallery } = companyConfig;

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              تدرب كال<span>البطل</span>
            </h1>
            <p className="hero-subtitle">
              {company.tagline} - انضم لأفضل أكاديمية basketball في مصر وحقق أقصى إمكاناتك مع مدربين دوليين.
            </p>
            <div className="hero-buttons">
              <a href="/programs" className="btn btn-primary">
                عرض البرامج
              </a>
              <a href="/contact" className="btn btn-secondary">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs">
        <div className="container">
          <h2 className="section-title">برامجنا التدريبية</h2>
          <p className="section-subtitle">
            اختر البرنامج المثالي لمستواك وأهدافك
          </p>
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image-wrapper">
                  <img src={program.image} alt={program.title} className="program-image" />
                </div>
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

      <section className="section coaches">
        <div className="container">
          <h2 className="section-title">مدربونا</h2>
          <p className="section-subtitle">
            تعلم من محترفين ذوي خبرة عالمية في عالم كرة السلة
          </p>
          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card">
                <div className="coach-image-wrapper">
                  <img src={coach.image} alt={coach.name} className="coach-image" />
                </div>
                <h3 className="coach-name">{coach.name}</h3>
                <p className="coach-title">{coach.title}</p>
                <p className="coach-specialization">{coach.specialization}</p>
                <p className="coach-experience">{coach.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">آراء أولياء الأمور</h2>
          <p className="section-subtitle">
           听听我们运动员和家人的心声
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  <p className="testimonial-content">{testimonial.content}</p>
                </div>
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

      <section className="section gallery">
        <div className="container">
          <h2 className="section-title">معرض الصور</h2>
          <p className="section-subtitle">
            شاهد ما ينتظرك في {company.name}
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

      <section className="section contact">
        <div className="container">
          <h2 className="section-title">تواصل معنا</h2>
          <p className="section-subtitle">
            هل أنت مستعد لبدء رحلتك في basketball؟ تواصل معنا اليوم!
          </p>
          <div className="contact-grid">
            <form className="contact-form">
              <div className="form-group">
                <label>الاسم</label>
                <input type="text" placeholder="أدخل اسمك" required />
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input type="email" placeholder="البريد@example.com" required />
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input type="tel" placeholder="+20 10 xxxx xxxx" />
              </div>
              <div className="form-group">
                <label>الرسالة</label>
                <textarea placeholder="أخبرنا عن أهدافك واهتماماتك..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                إرسال الرسالة
              </button>
            </form>
            <div className="contact-info">
              <h3>معلومات الاتصال</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>العنوان</strong>
                  {company.address}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>البريد الإلكتروني</strong>
                  {company.email}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div className="contact-details">
                  <strong>الهاتف</strong>
                  {company.phone}
                </div>
              </div>
              <div className="social-links">
                <a href={company.social.facebook} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href={company.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href={company.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}