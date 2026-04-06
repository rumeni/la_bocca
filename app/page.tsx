import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import VisitUs from '@/components/VisitUs';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <VisitUs />
      <Footer />
      <BackToTop />
    </main>
  );
}
