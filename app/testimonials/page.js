const testimonials = [
  {
    name: "Priya S.",
    occasion: "Wedding Package",
    rating: 5,
    text: "The floral styling for our engagement was beyond beautiful. Every single guest complimented the arrangements. Thank you for making our day so special!"
  },
  {
    name: "Riya M.",
    occasion: "Birthday Hamper",
    rating: 5,
    text: "Received the most exquisite floral hamper for my birthday. The blooms were fresh for days, and the pairing with artisanal candles was such a thoughtful touch."
  },
  {
    name: "Meena K.",
    occasion: "Garland & Pooja Décor",
    rating: 5,
    text: "Loved the traditional but modern feel of the garlands. They brought such a serene and festive vibe to our house pooja. Will definitely order again!"
  },
  {
    name: "Aisha & Rahul",
    occasion: "Full Wedding",
    rating: 5,
    text: "From my bridal bouquet to the grand centerpieces, Gifting Bouquet captured our romantic vision perfectly. They were so professional and artistic."
  },
  {
    name: "Nikhil D.",
    occasion: "Anniversary Bouquet",
    rating: 5,
    text: "The premium bouquet I ordered for my anniversary was absolutely stunning. My wife was thrilled with the unique choice of flowers and colors."
  },
  {
    name: "Sonali T.",
    occasion: "Dried Floral Hamper",
    rating: 5,
    text: "Such a beautiful and everlasting gift! The dried arrangement is still as festive and colorful as day one. A sustainable and artistic choice."
  }
];

const StarRating = ({ count }) => (
  <div className="rating">
    {[...Array(count)].map((_, i) => (
      <span key={i} style={{ marginRight: '2px' }}>★</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <div className="fade-in section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 className="serif">Kind Words</h1>
        <p style={{ opacity: 0.7, maxWidth: '600px', margin: '1.5rem auto 0' }}>It is an honor to be part of your most cherished moments. Here's what our wonderful clients have to say about Gifting Bouquet.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="quote-mark">“</span>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>{t.text}</p>
            </div>
            <div>
              <StarRating count={t.rating} />
              <h4 className="serif" style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{t.name}</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t.occasion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
