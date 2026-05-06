"use client";

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: '¡Hola! Soy el asistente virtual de CS Marineland. ¿En qué te puedo ayudar hoy con nuestros servicios de geofísica o cables submarinos?' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Hubo un error de conexión. Por favor contacta directamente a nuestro WhatsApp: +57 3163120220.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'transparent',
          border: 'none',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 100,
          transition: 'transform 0.3s',
          padding: 0
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src="/bot-icon.png" alt="Marineland AI" style={{ width: '120px', height: 'auto', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '350px',
          height: '500px',
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 100,
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: 'var(--brand-blue)',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--brand-green)', borderRadius: '50%' }} />
              <span style={{ fontWeight: 600 }}>CS Marineland Bot</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: m.role === 'user' ? 'var(--brand-green)' : '#1f2937',
                color: m.role === 'user' ? '#000' : '#fff',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                maxWidth: '85%',
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}>
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', color: '#888', fontSize: '0.8rem' }}>Escribiendo...</div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} style={{ borderTop: '1px solid var(--card-border)', padding: '1rem', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #374151',
                backgroundColor: '#111827',
                color: 'white',
                outline: 'none'
              }}
            />
            <button type="submit" style={{
              backgroundColor: 'var(--brand-green)',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              padding: '0 1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
