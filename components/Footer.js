import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--dark-teal)', color: 'var(--cream)' }}>

      {/* Top CTA Row */}
      <div className="footer-cta-section" style={{ borderBottom: '0.5px solid rgba(245, 240, 232, 0.15)', padding: '3rem 0' }}>
        <div className="container footer-cta-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem', lineHeight: 1.2, maxWidth: '400px', flex: '0 0 auto' }}>
            Need a custom <em style={{ color: 'var(--dusty-rose)' }}>arrangement?</em>
          </h2>
          <div className="footer-cta-divider" style={{ flex: 1, borderLeft: '0.5px solid rgba(245, 240, 232, 0.2)', paddingLeft: '3rem' }}>
            <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '400px' }}>
              Every moment is unique. We love creating bespoke pieces that reflect your personal story.
            </p>
            <Link href="/contact" className="btn" style={{ borderColor: 'var(--dusty-rose)', color: 'var(--dusty-rose)', letterSpacing: '0.12em' }}>
              Start a Custom Order
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Branding Row */}
      <div style={{ padding: '1.5rem 0' }}>
        <div className="container footer-brand-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p className="serif" style={{ fontSize: '1.4rem', fontWeight: 600 }}>
            Gifting <em style={{ color: 'var(--dusty-rose)' }}>Bouquet</em>
          </p>
          <p style={{ opacity: 0.35, fontSize: '0.75rem', letterSpacing: '0.05em' }}>© 2025 Gifting Bouquet · Delhi-NCR</p>
        </div>
      </div>

    </footer>
  );
}

