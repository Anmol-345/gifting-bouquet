'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <div className="container">
        {/* Logo (Left on Desktop/Mobile) */}
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          Gifting <span>Bouquet</span>
        </Link>

        {/* Navigation Links (Right on Desktop) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        {/* Hamburger Menu Icon (Right on Mobile, Hidden on Desktop) */}
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
