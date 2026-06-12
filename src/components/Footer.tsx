import Link from "next/link";
import { companyConfig } from "@/config/company";

export default function Footer() {
  const { company } = companyConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}>
                <circle cx="20" cy="20" r="18" stroke="#E63946" strokeWidth="2"/>
                <path d="M20 8 L20 32 M8 20 L32 20 M12 12 L28 28 M28 12 L12 28" stroke="#F4A261" strokeWidth="1.5"/>
              </svg>
              {company.name}
            </div>
            <p className="footer-desc">
              أفضل أكاديمية كرة سلة في مصر. نساعدك على تحقيق أحلامك في عالم كرة السلة مع أفضل المدربين المعتمدين دولياً.
            </p>
          </div>
          <div>
            <h4 className="footer-title">روابط سريعة</h4>
            <ul className="footer-links">
              <li><Link href="/programs">البرامج</Link></li>
              <li><Link href="/coaches">المدربون</Link></li>
              <li><Link href="/gallery">الصور</Link></li>
              <li><Link href="/blog">المقالات</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">معلومات قانونية</h4>
            <ul className="footer-links">
              <li><Link href="/terms-of-use">شروط الاستخدام</Link></li>
              <li><Link href="/privacy-policy">سياسة الخصوصية</Link></li>
              <li><Link href="/disclaimer">إخلاء مسؤولية</Link></li>
              <li><Link href="/cookie-policy">سياسة الكوكيز</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">تواصل معنا</h4>
            <ul className="footer-links">
              <li>
                <a href={`tel:${company.phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
            <div className="social-links" style={{ marginTop: "20px" }}>
              <a href={company.social.facebook} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={company.social.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href={company.social.youtube} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1A1A2E"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {currentYear} {company.name}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
