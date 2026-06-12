import type { Metadata } from "next";
import { companyConfig } from "@/config/company";

export const metadata: Metadata = {
  title: "معرض الصور",
  description:
    "استكشف لحظات التدريب والبطولات والإنجازات في أكاديمية القاهرة لكرة السلة. شاهد مرافقنا العصرية وجلسات التدريب الاحترافية.",
  openGraph: {
    title: "معرض الصور | أكاديمية القاهرة",
    description: "لحظات من التدريب والبطولات والإنجازات في أكاديمية القاهرة لكرة السلة.",
  },
};

export default function GalleryPage() {
  const { gallery, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">معرض الصور</h1>
          <p className="page-hero-subtitle">
            استكشف لحظات التدريب والبطولات والإنجازات في أكاديمية القاهرة
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`${company.name} - صورة ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <h2 className="section-title">أنشطة الأكاديمية</h2>
          <p className="section-subtitle">
            ننظم أنشطة متنوعة طوال العام لتطوير رياضيين متكاملين
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏀</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>التدريب المنتظم</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>جلسات يومية لجميع المستويات</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏆</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>البطولات</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>مسابقات شهرية بين الأكاديميات</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎪</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>معسكرات الصيف</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>برامج مكثفة في العطلات</p>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎓</div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>ورش متخصصة</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>عيادات تدريبية متخصصة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">فلسفتنا في التدريب</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', lineHeight: '1.9', fontSize: '16px' }}>
              في أكاديمية القاهرة، نؤمن بتطوير الرياضي المتكامل. جلساتنا تتجاوز مجرد تعليم مهارات كرة السلة — نركز على بناء الشخصية وروح الفريق والمهارات الحياتية من خلال الرياضة. كل جلسة مصممة لتحدي اللاعبين جسدياً مع تنمية عقليتهم وحبهم للعبة.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', lineHeight: '1.9', fontSize: '16px' }}>
              توفر مرافقنا ذات المستوى الأول البيئة المثالية للتعلم والتحسن. من المبتدئين إلى التدريب التنافسي المتقدم، يجد كل لاعب مكانه في أكاديمية القاهرة. نفخر برؤية لاعبينا ينمون — ليس فقط كلاعبي رياضة، بل كأفراد يحملون دروس الملعب إلى حياتهم اليومية.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '16px' }}>
            هل أنت مستعد للبدء؟
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
            سجل الآن واحصل على جلسة تجريبية مجانية لتجربة تدريبنا بنفسك
          </p>
          <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
            سجل الآن
          </a>
        </div>
      </section>
    </>
  );
}