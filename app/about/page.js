export default function About() {
  const values = ["Fresh daily", "Handcrafted", "Bespoke designs", "Same-day delivery"];

  return (
    <div className="fade-in section-padding container">
      <div className="about-grid">
        <div className="about-content">
          <h1 className="serif">Our Story</h1>
          <p style={{ fontSize: '1.1rem', margin: '2.5rem 0', lineHeight: '1.8' }}>
            What started as a labor of love—creating weekend arrangements for friends and family—has bloomed into a full floral studio dedicated to the art of botanical storytelling. 
          </p>
          <p style={{ opacity: 0.8, marginBottom: '3rem' }}>
            At Gifting Bouquet, we believe every flower has a story to tell. Based in Delhi-NCR, our team of passionate floral designers handpicks the finest blooms daily to create handcrafted arrangements that reflect your most precious moments. From intimate bouquets to grand celebrations, our mission is to bring your vision to life through the timeless beauty of flowers.
          </p>
          
          <div className="values-pills">
            {values.map((v, i) => (
              <span key={i} className="pill">{v}</span>
            ))}
          </div>

          <div className="badge">
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.3rem' }}>100%</span>
            Handcrafted with care.
          </div>
        </div>

        <div className="about-visual">
          <img 
            src="/images/about_abstract.png" 
            alt="Abstract botanical visual" 
            style={{ 
              width: '100%', 
              borderRadius: '200px 200px 0 0', 
              aspectRatio: '3/4', 
              objectFit: 'cover',
              boxShadow: '0 40px 100px -20px rgba(74, 124, 111, 0.1)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
