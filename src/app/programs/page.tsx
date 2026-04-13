import { companyConfig } from "@/config/company";
import Link from "next/link";

export default function ProgramsPage() {
  const { programs } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">البرامج التدريبية</h1>
          <p className="page-hero-subtitle">
            اختر البرنامج المناسب لمستواك وأهدافك واحصل على تدريب احترافي من أفضل المدربين في مصر
          </p>
        </div>
      </section>

      <section className="section programs">
        <div className="container">
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
                  <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px', width: '100%' }}>
                    سجل الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">لماذا تختارنا؟</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏀</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>مدربون محترفون</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>فريق من المدربين الدوليين ذوي الخبرة الكبيرة في التدريب والاحتراف</p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>منهج حديث</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>نستخدم أحدث_methods التدريبية والمعايير العالمية في التدريب</p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏟️</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>مرافق متقدمة</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>ملاعب حديثة ومجهزة بأحدث التقنيات والأدوات التدريبية</p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>نتائج مضمونة</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>نظام متابعه فردي لضمان تحقيق أقصى استفادة من كل لاعب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}