import { Waves, Compass, Droplets, Cable, ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  const services = [
    {
      id: "hidrografia",
      title: "Hidrografía",
      description: "Levantamientos batimétricos (monohaz y multihaz) de alta precisión.",
      icon: <Waves size={40} strokeWidth={1.5} />,
      detailTarget: "#detalles-hidrografia"
    },
    {
      id: "geofisica",
      title: "Geofísica Marina",
      description: "Geomorfología y estatificación: sonar de barrido lateral, perfilador de subsuelo, magnetómetro y toma de muestras.",
      icon: <Compass size={40} strokeWidth={1.5} />,
      detailTarget: "#detalles-geofisica"
    },
    {
      id: "oceanografia",
      title: "Oceanografía",
      description: "Estudios de corrientes, oleajes y modelación de sedimentos para ingeniería de costas.",
      icon: <Droplets size={40} strokeWidth={1.5} />,
      detailTarget: "#detalles-oceanografia"
    },
    {
      id: "cables",
      title: "Cables Submarinos",
      description: "Especialistas en estudios, aterrizajes (shore end landings), enterramiento, instalación y mantenimiento de cables submarinos.",
      icon: <Cable size={40} strokeWidth={1.5} />,
      detailTarget: "#detalles-cables"
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

      {/* Services Grid Section */}
      <section id="servicios" style={{ padding: '8rem 5%', backgroundColor: '#05070a' }}>
        <h2 className="section-title">LO QUE <span>HACEMOS</span></h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <Link href={service.detailTarget} key={service.id} style={{ textDecoration: 'none' }}>
              <div className="service-card" style={{ 
                cursor: 'pointer', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{service.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.5, flex: 1 }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-green)', marginTop: '1.5rem', fontWeight: 'bold' }}>
                  Ver detalles <ChevronDown size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}

      {/* 1. Hidrografía */}
      <section id="detalles-hidrografia" style={{ padding: '6rem 5%', backgroundColor: 'var(--background)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <CldImage src="img-hidrografia" width={800} height={600} crop="fill" alt="Hidrografía" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Waves size={32} color="var(--brand-green)" />
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Hidrografía</h2>
            </div>
            <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Mapeando lo invisible</h4>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>¿Qué es?</strong> Realizamos levantamientos batimétricos (monohaz y multihaz) de altísima resolución para obtener mapas topográficos exactos del fondo marino.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>¿Por qué solicitarlo?</strong> Es vital para garantizar la navegación segura, planificar rutas de tendido de cables y diseñar estructuras costeras u offshore. Sin un mapa preciso, cualquier proyecto marino opera a ciegas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Geofísica Marina */}
      <section id="detalles-geofisica" style={{ padding: '6rem 5%', backgroundColor: '#05070a' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Compass size={32} color="var(--brand-green)" />
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Geofísica Marina</h2>
            </div>
            <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Mirando debajo de la superficie</h4>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>¿Qué es?</strong> Utilizamos tecnología avanzada (sonar de barrido lateral, perfilador de subsuelo, magnetómetros) para estudiar la composición y los estratos ocultos bajo el lecho marino.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>¿Por qué solicitarlo?</strong> Permite detectar peligros geológicos, objetos enterrados o municiones sin explotar (UXO). Indispensable antes de instalar plataformas petroleras o enterrar cables de telecomunicaciones.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <CldImage src="img-geofisica" width={800} height={600} crop="fill" alt="Geofísica Marina" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* 3. Oceanografía */}
      <section id="detalles-oceanografia" style={{ padding: '6rem 5%', backgroundColor: 'var(--background)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <CldImage src="img-oceanografia" width={800} height={600} crop="fill" alt="Oceanografía" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Droplets size={32} color="var(--brand-green)" />
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Oceanografía</h2>
            </div>
            <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Entendiendo la dinámica del mar</h4>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>¿Qué es?</strong> Estudios detallados del comportamiento del agua: análisis de corrientes, medición de oleaje y modelación del transporte de sedimentos.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>¿Por qué solicitarlo?</strong> El mar está vivo. Proveemos datos críticos sobre fuerzas hidrodinámicas necesarios para la ingeniería de costas, prevención de erosión y operaciones seguras en puertos o plataformas offshore.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Cables Submarinos */}
      <section id="detalles-cables" style={{ padding: '6rem 5%', backgroundColor: '#05070a' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Cable size={32} color="var(--brand-green)" />
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Cables Submarinos</h2>
            </div>
            <h4 style={{ color: 'var(--brand-blue)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Conectando continentes</h4>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              <strong>¿Qué es?</strong> Un servicio integral que abarca desde los estudios de ruta previos, hasta los aterrizajes en costa (shore ends), enterramiento y mantenimiento de los cables.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>¿Por qué solicitarlo?</strong> El 99% del internet global viaja bajo el mar, además de enlaces vitales de energía. Aseguramos que la instalación de estos cables críticos sea exitosa, duradera y libre de interferencias naturales o humanas.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <CldImage src="img-cables" width={800} height={600} crop="fill" alt="Cables Submarinos" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" style={{ padding: '8rem 5%', backgroundColor: 'var(--background)' }}>
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
