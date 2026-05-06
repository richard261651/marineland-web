"use client";

import { useState } from 'react';
import { Waves, Compass, Droplets, Cable, ArrowRight, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "hidrografia",
      title: "Hidrografía",
      description: "Levantamientos batimétricos (monohaz y multihaz) de alta precisión.",
      icon: <Waves size={40} strokeWidth={1.5} />,
      imageId: "hidrografia_img_1778086991696_pxvsqi",
      detailSubtitle: "Mapeando lo invisible",
      detailWhat: "Realizamos levantamientos batimétricos (monohaz y multihaz) de altísima resolución para obtener mapas topográficos exactos del fondo marino.",
      detailWhy: "Es vital para garantizar la navegación segura, planificar rutas de tendido de cables y diseñar estructuras costeras u offshore. Sin un mapa preciso, cualquier proyecto marino opera a ciegas."
    },
    {
      id: "geofisica",
      title: "Geofísica Marina",
      description: "Geomorfología y estratificación: sonar de barrido lateral, perfilador de subsuelo, magnetómetro y toma de muestras.",
      icon: <Compass size={40} strokeWidth={1.5} />,
      imageId: "geofisica_img_1778087005280_sfjsed",
      detailSubtitle: "Mirando debajo de la superficie",
      detailWhat: "Utilizamos tecnología avanzada (sonar de barrido lateral, perfilador de subsuelo, magnetómetros) para estudiar la composición y los estratos ocultos bajo el lecho marino.",
      detailWhy: "Permite detectar peligros geológicos, objetos enterrados o municiones sin explotar (UXO). Indispensable antes de instalar plataformas petroleras o enterrar cables de telecomunicaciones."
    },
    {
      id: "oceanografia",
      title: "Oceanografía",
      description: "Estudios de corrientes, oleajes y modelación de sedimentos para ingeniería de costas.",
      icon: <Droplets size={40} strokeWidth={1.5} />,
      imageId: "oceanografia_img_1778087022898_bdzmpx",
      detailSubtitle: "Entendiendo la dinámica del mar",
      detailWhat: "Estudios detallados del comportamiento del agua: análisis de corrientes, medición de oleaje y modelación del transporte de sedimentos.",
      detailWhy: "El mar está vivo. Proveemos datos críticos sobre fuerzas hidrodinámicas necesarios para la ingeniería de costas, prevención de erosión y operaciones seguras en puertos o plataformas offshore."
    },
    {
      id: "cables",
      title: "Cables Submarinos",
      description: "Estudios, aterrizajes, enterramiento, instalación y mantenimiento.",
      icon: <Cable size={40} strokeWidth={1.5} />,
      imageId: "cables_img_1778087037549_hfz3gv",
      detailSubtitle: "Conectando continentes",
      detailWhat: "Un servicio integral que abarca desde los estudios de ruta previos, hasta los aterrizajes en costa (shore ends), enterramiento y mantenimiento de los cables.",
      detailWhy: "El 99% del internet global viaja bajo el mar, además de enlaces vitales de energía. Aseguramos que la instalación de estos cables críticos sea exitosa, duradera y libre de interferencias naturales o humanas."
    }
  ];

  const handleServiceClick = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => {
            const isActive = activeService === service.id;
            return (
              <div 
                key={service.id}
                onClick={() => {
                  handleServiceClick(service.id);
                  if (activeService !== service.id) {
                    setTimeout(() => {
                      document.getElementById('service-details-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 100);
                  }
                }}
                className="service-card" 
                style={{ 
                  cursor: 'pointer', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: isActive ? '2px solid var(--brand-green)' : '1px solid var(--card-border)',
                  boxShadow: isActive ? '0 10px 30px rgba(164, 255, 0, 0.15)' : 'none',
                  transform: isActive ? 'translateY(-5px)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="icon-wrapper" style={{ backgroundColor: isActive ? 'rgba(164, 255, 0, 0.1)' : '' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{service.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.5, flex: 1 }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isActive ? '#fff' : 'var(--brand-green)', marginTop: '1.5rem', fontWeight: 'bold' }}>
                  {isActive ? 'Ocultar detalles' : 'Ver detalles'} 
                  {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width Detail Panel */}
        {activeService && (
          <div 
            id="service-details-panel"
            style={{
              marginTop: '4rem',
              padding: '3rem',
              backgroundColor: 'var(--background)',
              borderRadius: '24px',
              border: '1px solid var(--brand-blue)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4rem',
              alignItems: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            {(() => {
              const service = services.find(s => s.id === activeService);
              return (
                <>
                  <div style={{ flex: '1 1 400px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ color: 'var(--brand-green)' }}>{service.icon}</div>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }}>{service.title}</h2>
                    </div>
                    <h4 style={{ color: 'var(--brand-green)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>{service.detailSubtitle}</h4>
                    <p style={{ color: '#e0e7ff', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      <strong style={{ color: '#fff' }}>¿Qué es?</strong><br/> {service.detailWhat}
                    </p>
                    <p style={{ color: '#e0e7ff', fontSize: '1.15rem', lineHeight: 1.7 }}>
                      <strong style={{ color: '#fff' }}>¿Por qué solicitarlo?</strong><br/> {service.detailWhy}
                    </p>
                  </div>
                  <div style={{ flex: '1 1 400px', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <CldImage 
                      src={service.imageId}
                      width={800}
                      height={600}
                      crop="fill"
                      alt={service.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block'
                      }} 
                    />
                  </div>
                </>
              );
            })()}
          </div>
        )}
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

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
