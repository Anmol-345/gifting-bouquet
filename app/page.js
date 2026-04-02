import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="serif">Your moments, <br /><span>our blooms.</span></h1>
            <p className="delay-1" style={{ fontSize: '1.2rem', margin: '1.5rem 0 2.5rem', color: 'var(--deep-teal)' }}>
              Bespoke handcrafted florals designed to celebrate life's most precious occasions in Delhi-NCR.
            </p>
            <div className="flex gap-4 delay-2">
              <Link href="/services" className="btn btn-filled">Explore our work</Link>
              <Link href="/contact" className="btn">Get in touch</Link>
            </div>
          </div>
        </div>
        <img
          src="/images/hero.png"
          alt="Elegant floral bouquet"
          className="hero-image"
        />
      </section>

      {/* Services Overview */}
      <section className="section-padding container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="serif">Our Offerings</h2>
          <p style={{ opacity: 0.7 }}>Handpicked and handcrafted with love.</p>
        </div>

        <div className="services-grid">
          <div className="card">
            <h3 className="serif">Bouquets</h3>
            <p style={{ fontSize: '0.9rem', margin: '1rem 0' }}>Classic and premium arrangements for every mood.</p>
            <Link href="/services" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--deep-teal)' }}>View All &rarr;</Link>
          </div>
          <div className="card">
            <h3 className="serif">Hampers</h3>
            <p style={{ fontSize: '0.9rem', margin: '1rem 0' }}>Curated gift boxes featuring florals and artisanal treats.</p>
            <Link href="/services" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--deep-teal)' }}>View All &rarr;</Link>
          </div>
          <div className="card">
            <h3 className="serif">Garlands</h3>
            <p style={{ fontSize: '0.9rem', margin: '1rem 0' }}>Traditional and contemporary décor for your space.</p>
            <Link href="/services" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--deep-teal)' }}>View All &rarr;</Link>
          </div>
          <div className="card">
            <h3 className="serif">Weddings</h3>
            <p style={{ fontSize: '0.9rem', margin: '1rem 0' }}>Complete floral styling for your special day.</p>
            <Link href="/services" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--deep-teal)' }}>View All &rarr;</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
