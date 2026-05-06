import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Inicializar el cliente de Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    // Extraer el último mensaje del usuario
    const lastUserMessage = messages[messages.length - 1].content;
    
    const systemPrompt = `Eres el asistente virtual experto de CS Marineland, una empresa de geofísica y cables submarinos con sede en Cartagena, Colombia, que opera en América Latina y el Caribe.
Tus servicios incluyen:
1. Hidrografía: Levantamientos batimétricos (monohaz y multihaz).
2. Geofísica Marina: Geomorfología, sonar de barrido lateral, magnetómetro, perfilador de subsuelo.
3. Oceanografía: Estudios de corrientes y oleajes.
4. Cables Submarinos: Estudios, aterrizajes, enterramiento e instalación.
Responde a las preguntas del usuario de manera profesional, amable, y concisa. Si te piden una cotización o detalles muy específicos, recomiéndales contactar al WhatsApp: +57 3163120220. No inventes servicios que no están en la lista.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nPregunta del usuario: ${lastUserMessage}` }]
        }
      ],
      config: {
        temperature: 0.3
      }
    });

    const reply = response.text;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { reply: 'Lo siento, en este momento el sistema de IA está en mantenimiento. Por favor contacta directamente a nuestro WhatsApp: +57 3163120220.' },
      { status: 500 }
    );
  }
}
