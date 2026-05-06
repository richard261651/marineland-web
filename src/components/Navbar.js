"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-container" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 5%',
      backgroundColor: 'var(--background)',
      borderBottom: '1px solid var(--card-border)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Placeholder for Logo */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 900,
          lineHeight: 1
        }}>
          <div style={{ color: 'var(--brand-blue)', fontSize: '1.5rem', alignSelf: 'center', marginBottom: '-5px' }}>▲</div>
          <div style={{ fontSize: '2rem', letterSpacing: '-1px' }}>
            <span style={{ color: '#fff' }}>MARINE</span>
            <span style={{ color: 'var(--brand-green)' }}>LAND</span>
          </div>
          <div style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '2px', textAlign: 'center' }}>
            CABLE SPECIALIST
          </div>
        </div>
      </div>
      
      {/* Desktop Links */}
      <div className="nav-desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="#servicios" style={{ fontWeight: 600, color: '#fff' }}>Servicios</Link>
        <Link href="#nosotros" style={{ fontWeight: 600, color: '#fff' }}>Nosotros</Link>
        <Link href="https://wa.me/573163120220" target="_blank" className="btn-vibrant" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
          Cotizar
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--card-bg)',
          borderBottom: '1px solid var(--card-border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 5%',
          gap: '1.5rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 49
        }}>
          <Link href="#servicios" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, color: '#fff', fontSize: '1.2rem', textAlign: 'center' }}>
            Servicios
          </Link>
          <Link href="#nosotros" onClick={() => setIsMenuOpen(false)} style={{ fontWeight: 600, color: '#fff', fontSize: '1.2rem', textAlign: 'center' }}>
            Nosotros
          </Link>
          <Link href="https://wa.me/573163120220" target="_blank" onClick={() => setIsMenuOpen(false)} className="btn-vibrant" style={{ padding: '0.8rem', fontSize: '1.1rem', textAlign: 'center', width: '100%' }}>
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
}
