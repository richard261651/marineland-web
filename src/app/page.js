import { Waves, Compass, Droplets, Cable, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      id: "hidrografia",
      title: "Hidrografía",
      description: "Levantamientos batimétricos (monohaz y multihaz) de alta precisión.",
      icon: <Waves size={40} strokeWidth={1.5} />
    },
    {
      id: "geofisica",
      title: "Geofísica Marina",
      description: "Geomorfología y estatificación: sonar de barrido lateral, perfilador de subsuelo, magnetómetro y toma de muestras.",
      icon: <Compass size={40} strokeWidth={1.5} />
    },
    {
      id: "oceanografia",
      title: "Oceanografía",
      description: "Estudios de corrientes, oleajes y modelación de sedimentos para ingeniería de costas.",
      icon: <Droplets size={40} strokeWidth={1.5} />
    },
    {
      id: "cables",
      title: "Cables Submarinos",
      description: "Especialistas en estudios, aterrizajes (shore end landings), enterramiento, instalación y mantenimiento de cables submarinos.",
      icon: <Cable size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 5%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract background shape */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(10,14,23,0) 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            EXPLORANDO LO DESCONOCIDO. <br/>DEFINIENDO EL <span style={{ color: 'var(--brand-green)' }}>FUTURO.</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#a1a1aa',
            marginBottom: '3rem',
            maxWidth: '700px',
            lineHeight: 1.6
          }}>
            En Marineland, transformamos la incertidumbre subacuática en certeza estratégica. Como especialistas en geofísica marina, proporcionamos estudios de precisión para cables submarinos y operaciones de petróleo & gas. Operando desde Cartagena, llevamos soluciones avanzadas a clientes en toda América Latina y el Caribe, permitiéndoles construir infraestructura crítica con confianza.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="#servicios" className="btn-vibrant">
              Nuestros Servicios <ArrowRight size={24} />
            </Link>
            <Link href="https://wa.me/573163120220" target="_blank" className="btn-outline">
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" style={{ padding: '8rem 5%', backgroundColor: '#05070a' }}>
        <h2 className="section-title">LO QUE <span>HACEMOS</span></h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{service.title}</h3>
              <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.5 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" style={{ padding: '8rem 5%' }}>
         <div style={{
           backgroundColor: 'var(--brand-blue)',
           borderRadius: '32px',
           padding: '5rem',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           textAlign: 'center',
           position: 'relative',
           overflow: 'hidden'
         }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem', color: '#fff' }}>¿LISTO PARA TU PRÓXIMO PROYECTO?</h2>
            <p style={{ fontSize: '1.25rem', color: '#e0e7ff', maxWidth: '700px', marginBottom: '3rem' }}>
              Desde 2021, CS Marineland ofrece soluciones efectivas con equipos de última tecnología como Sonar de Barrido Lateral, Magnetómetros y perfiladores de subsuelo.
            </p>
            <Link href="https://wa.me/573163120220" target="_blank" className="btn-vibrant" style={{ backgroundColor: 'var(--brand-green)', color: '#000' }}>
              Solicitar Cotización <MessageSquare size={24} />
            </Link>
         </div>
      </section>
    </div>
  );
}
