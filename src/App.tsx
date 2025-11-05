import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Agenda } from './components/Agenda';
import { Speakers } from './components/Speakers';
import { Register } from './components/Register';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <FloatingNav />
      <Hero />
      <Marquee />
      <About />
      <Agenda />
      <Speakers />
      <Register />
      <Footer />
    </div>
  );
}
