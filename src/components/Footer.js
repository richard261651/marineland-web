export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#05070a',
      padding: '4rem 5%',
      marginTop: '4rem',
      borderTop: '1px solid var(--card-border)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        color: '#888'
      }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>
            <span style={{ color: '#fff' }}>MARINE</span>
            <span style={{ color: 'var(--brand-green)' }}>LAND</span>
          </div>
          <p>CS Marineland is a geophysical survey company specialized in submarine cable and oil & gas industries.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Sede Principal</h4>
          <p>Cartagena, Colombia</p>
          <p>Operaciones a nivel global en América Latina y el Caribe.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Contacto</h4>
          <p>Tel: +57 3163120220</p>
          <p>Web: www.csmarineland.com</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} CS Marineland. Todos los derechos reservados.
      </div>
    </footer>
  );
}
