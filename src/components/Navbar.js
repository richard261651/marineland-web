import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
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
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="#servicios" style={{ fontWeight: 600, color: '#fff' }}>Servicios</Link>
        <Link href="#nosotros" style={{ fontWeight: 600, color: '#fff' }}>Nosotros</Link>
        <Link href="https://wa.me/573163120220" target="_blank" className="btn-vibrant" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
          Cotizar
        </Link>
      </div>
    </nav>
  );
}
