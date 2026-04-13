import { companyConfig } from "@/config/company";

export default function GalleryPage() {
  const { gallery, company } = companyConfig;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">معرض الصور</h1>
          <p className="page-hero-subtitle">
           شاهد لحظات التدرب والإنجازات في أكاديمية {company.name}
          </p>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', color: 'white', marginBottom: '16px' }}>
            هل أنت مستعد للبدء؟
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
            سجل الآن واحصل على تدريب مجاني لأول جلسة
          </p>
          <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
            سجل الآن
          </a>
        </div>
      </section>
    </>
  );
}