import { companyConfig } from "@/config/company";

export default function CoachesPage() {
  const { coaches, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">المدربون</h1>
          <p className="page-hero-subtitle">
            تعلم من أمهر المدربين في مصر والخليج - خبراء في تطوير اللاعبين على جميع المستويات
          </p>
        </div>
      </section>

      <section className="section coaches">
        <div className="container">
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '12px', lineHeight: '1.6' }}>
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">انضم لفريق المدربين</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              هل أنت مدرب متخصص في basketball؟ انضم لفريقنا وكن جزءًا من نجاح اللاعبين
            </p>
            <a href="/contact" className="btn btn-primary">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </>
  );
}