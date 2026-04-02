export default function Contact() {
  const whatsappNumber = "918950407529"; // Replace with actual number
  const email = "gifting.bouquet@gmail.com"; // Replace with actual email
  const whatsappMessage = encodeURIComponent("Hi! I'd like to enquire about your floral services.");

  return (
    <div className="fade-in section-padding container">
      <div className="contact-wrapper">
        <h1 className="serif" style={{ marginBottom: '1.5rem' }}>Get in Touch</h1>
        <p style={{ fontSize: '1.15rem', opacity: 0.75, marginBottom: '4rem', lineHeight: 1.8 }}>
          Whether it's a bespoke bouquet or your dream wedding, we'd love to hear from you.
          Reach out to us directly — we're just a message away.
        </p>

        {/* Contact Cards */}
        <div className="contact-cards-grid">
          {/* Email Card */}
          <div className="card" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.75rem' }}>Email Us</p>
            <h3 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Drop a Message</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem' }}>
              For custom orders, wedding consultations, and general enquiries.
            </p>
            <a
              href={`mailto:${email}`}
              className="btn btn-filled"
              style={{ display: 'inline-block' }}
            >
              {email}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="card" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.75rem' }}>WhatsApp</p>
            <h3 className="serif" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Chat with Us</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem' }}>
              For quick responses, same-day orders, and a personal touch.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp-btn"
              style={{ display: 'inline-block' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Info Row */}
        <div className="contact-info-row">
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.5rem' }}>Location</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem' }}>Delhi-NCR, India</p>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.5rem' }}>Delivery</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem' }}>Same-day before 2 PM</p>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5, marginBottom: '0.5rem' }}>Consultations</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem' }}>By appointment only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
