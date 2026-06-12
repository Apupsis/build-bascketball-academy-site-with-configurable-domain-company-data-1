import type { Metadata } from "next";
import { companyConfig } from "@/config/company";
import Link from "next/link";

export const metadata: Metadata = {
  title: "البرامج التدريبية",
  description:
    "اكتشف برامجنا التدريبية لكرة السلة: برنامج الناشئين، التدريب المتقدم، التدريب الفردي، والمعسكر الصيفي. للأعمار 6-18 وجميع المستويات.",
  openGraph: {
    title: "البرامج التدريبية | أكاديمية القاهرة",
    description: "اختر البرنامج المثالي لمستواك: برنامج الناشئين، التدريب المتقدم، التدريب الفردي، أو المعسكر الصيفي.",
  },
};

export default function ProgramsPage() {
  const { programs } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">البرامج التدريبية</h1>
          <p className="page-hero-subtitle">
            اختر البرنامج المناسب لمستواك وأهدافك. احصل على تدريب احترافي من أفضل المدربين في مصر
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
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title">لماذا تختار أكاديمية القاهرة؟</h2>
            <p className="section-subtitle">
              نحن ملتزمون بتطوير جيل جديد من لاعب كرة السلة في مصر من خلال التدريب الاحترافي والأساليب الحديثة
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' }}>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏀</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>مدربون محترفون</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  يتكون فريقنا من مدربين معتمدين دولياً مع خبرة واسعة في التدريب الاحترافي وتطوير اللاعبين. يجلب كل مدرب خبرة فريدة من اللعب والتدريب في أعلى المستويات.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>منهج حديث</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  نستخدم أحدث طرق التدريب والمعايير العالمية في تدريب كرة السلة. منهجنا يتم تحديثه باستمرار لدمج أحدث التقنيات والاستراتيجيات.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏟️</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>مرافق متطورة</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  تتميز مرافقنا بملاعب حديثة مجهزة بأحدث تقنيات التدريب. نحافظ على أسطح لعب عالية الجودة ومعدات تدريبية متميزة.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>نتائج مضمونة</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>
                  نوفر نظام تتبع فردي للتقدم لضمان تحقيق أقصى استفادة من كل لاعب. التقييمات المنتظمة والملاحظات تساعد اللاعبين على التحسن باستمرار.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">مزايا إضافية</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>📹</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>تحليل الفيديو</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>نقوم بتسجيل وتحليل أدائك لتحديدAreas للتحسن.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎪</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>البطولات</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>نشارك في بطولات منتظمة بين الأكاديميات.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>👕</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>زي موحد</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>استلم أزياء تدريبية واحترافية كجزء من برنامجك.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🏆</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>الشهادات</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>احصل على شهادات معترف بها عند إكمال برنامج التدريب.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🍽️</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>إرشادات التغذية</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>احصل على خطط meal ونصائح diet لتحسين أدائك.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>👥</div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>جلسات للأهالي</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>اجتماعات منتظمة لمناقشة التقدم وأهداف التدريب.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}