import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
