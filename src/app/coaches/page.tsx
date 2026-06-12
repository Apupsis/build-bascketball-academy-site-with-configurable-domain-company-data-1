import type { Metadata } from "next";
import { companyConfig } from "@/config/company";

export const metadata: Metadata = {
  title: "فريق المدربين",
  description:
    "تعرف على فريق مدربينا المعتمدين دولياً في أكاديمية القاهرة لكرة السلة. خبرة تجمع بين الاحتراف الدولي والمعرفة المحلية.",
  openGraph: {
    title: "فريق المدربين | أكاديمية القاهرة",
    description: "مدربون معتمدون دولياً بخبرة تزيد عن 8 سنوات لكل منهم. تعلم من أفضل المتخصصين في كرة السلة بمصر.",
  },
};

export default function CoachesPage() {
  const { coaches, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">فريق المدربين</h1>
          <p className="page-hero-subtitle">
            تعلم من أفضل المدربين في مصر والشرق الأوسط - خبراء في تطوير اللاعبين على جميع المستويات
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
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title">فلسفة التدريب</h2>
            <p className="section-subtitle">
              يجمع نهجنا في التدريب بين أفضل الممارسات الدولية مع فهم الثقافة المحلية واحتياجات تطوير اللاعبين
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '50px' }}>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>التركيز الفردي</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  كل لاعب فريد من نوعه. نقوم بتقييم نقاط القوة والضعف لدى كل لاعب لإنشاء خطة تطوير شخصية تزيد من إمكاناته.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📈</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>التدريب المتدرج</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  برامجنا التدريبية تتطور مع كل لاعب. نزيد الشدة والتعقيد تدريجياً مع تطور اللاعبين واكتسابهم مهارات جديدة.
                </p>
              </div>
              <div style={{ padding: '30px', background: 'var(--bg-dark)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧠</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px' }}>التطوير العقلي</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                  كرة السلة ليست رياضة جسدية فحسب بل عقلية أيضاً. نعلم اللاعبين على التركيز والتعامل مع الضغط وبناء الثقة بالنفس.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">مؤهلات المدربين</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '40px' }}>
            <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>الشهادات الدولية</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', listStyle: 'none' }}>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> مدربون معتمدون من فيبا</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> مرخصون من USA Basketball</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> شارات التدريب الأوروبية</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span>Degrees في علوم الرياضية</li>
              </ul>
            </div>
            <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px' }}>خبرة اللعب</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', listStyle: 'none' }}>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> دوريات محترفة</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> المنتخبات الوطنية</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> مسابقات دولية</li>
                <li style={{ paddingRight: '24px', position: 'relative' }}><span style={{ position: 'absolute', right: 0, color: 'var(--primary)' }}>✓</span> كرة السلة الجامعية</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: 'var(--text-primary)', marginBottom: '20px' }}>انضم لفريق المدربين</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            هل أنت مدرب كرة سلة معتمد؟ انضم لفريقنا وكن جزءاً من تطوير جيل جديد من اللاعبين المصريين.
          </p>
          <a href="/contact" className="btn btn-primary">
            تواصل معنا
          </a>
        </div>
      </section>
    </>
  );
}