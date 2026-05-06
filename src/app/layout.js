import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import "./globals.css";

export const metadata = {
  title: "CS Marineland | Submarine Cable & Geophysics Specialists",
  description: "CS Marineland is a geophysical survey company specialized in submarine cable and oil & gas industries in Latin America and Caribbean region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
