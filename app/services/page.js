import Link from "next/link";

const services = [
  {
    title: "Classic Bouquets",
    description: "Daily fresh arrangements wrapped in our signature cream paper. Perfect for birthdays, spontaneous smiles, and simple gestures.",
    image: "/images/classic.png"
  },
  {
    title: "Premium Bouquets",
    description: "Exotic, oversized arrangements with seasonal highlights and rare blooms. Designed to make an unforgettable statement.",
    image: "/images/premium.png"
  },
  {
    title: "Floral Hampers",
    description: "A combination of our finest blooms paired with artisanal chocolates and candles. Elegantly packaged for gifting.",
    image: "/images/floral_hamper.png"
  },
  {
    title: "Gift Hampers",
    description: "Curated lifestyle hampers featuring gourmet treats, personalized notes, and small, beautiful floral touches.",
    image: "/images/gift_hamper.png"
  },
  {
    title: "Décor Garlands",
    description: "Traditional jasmine, marigold, and rose garlands reimagined with a modern, botanical touch for your home or event.",
    image: "/images/decor_garland.png"
  },
  {
    title: "Wedding Packages",
    description: "Full-service floral styling including bridal bouquets, stage décor, centerpieces, and personalized bridal accessories.",
    image: "/images/wedding.png"
  }
];

export default function Services() {
  return (
    <>
    <div className="fade-in section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 className="serif">Our Services</h1>
        <p style={{ opacity: 0.7, maxWidth: '600px', margin: '1.5rem auto 0' }}> From intimate bouquets to grand celebrations, each arrangement is handcrafted with the freshest blooms and a touch of botanical magic.</p>
      </div>

      <div className="services-full-grid">
        {services.map((service, index) => (
          <div key={index} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            <img
              src={service.image}
              alt={service.title}
              className="service-card-image"
            />
            <div style={{ padding: '2rem' }}>
              <h3 className="serif">{service.title}</h3>
              <p style={{ fontSize: '0.95rem', margin: '1rem 0', opacity: 0.8 }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
