// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-amber-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}