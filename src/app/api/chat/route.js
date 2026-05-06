import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    // Extraer el último mensaje del usuario
    const lastUserMessage = messages[messages.length - 1].content.toLowerCase();
    
    let reply = "Lo siento, no entendí tu pregunta. Por favor contacta a nuestro WhatsApp +57 3163120220.";

    // Respuestas predeterminadas simples para demostración
    if (lastUserMessage.includes('servicios') || lastUserMessage.includes('hacen')) {
      reply = "Ofrecemos servicios de Hidrografía (Batimetrías), Geofísica Marina, Oceanografía y soporte para Cables Submarinos. ¿Te interesa alguno en particular?";
    } else if (lastUserMessage.includes('contacto') || lastUserMessage.includes('whatsapp') || lastUserMessage.includes('telefono')) {
      reply = "Puedes contactarnos directamente por WhatsApp o llamando al +57 3163120220.";
    } else if (lastUserMessage.includes('hola') || lastUserMessage.includes('buenas')) {
      reply = "¡Hola! ¿En qué puedo ayudarte hoy con CS Marineland?";
    } else if (lastUserMessage.includes('cable') || lastUserMessage.includes('submarino')) {
      reply = "Somos especialistas en la industria de cables submarinos. Realizamos estudios de ruta, aterrizajes (shore end landings), enterramiento e instalación.";
    } else if (lastUserMessage.includes('geofisica') || lastUserMessage.includes('hidrografia')) {
       reply = "Usamos equipos de última tecnología como Sonar de Barrido Lateral, Perfiladores de Subsuelo y Magnetómetros. ¿Necesitas un levantamiento específico?";
    } else {
       reply = "Esa es una excelente pregunta. Para darte la mejor asesoría técnica, te recomiendo hablar con nuestros especialistas al +57 3163120220 o enviarnos un WhatsApp. ¡Estaremos encantados de ayudarte!";
    }

    // Simular un poco de tiempo de procesamiento para el efecto de "escribiendo"
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: 'Error procesando el mensaje' },
      { status: 500 }
    );
  }
}
