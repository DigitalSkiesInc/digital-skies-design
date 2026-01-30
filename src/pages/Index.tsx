import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Approach } from '@/components/sections/Approach';
import { Principles } from '@/components/sections/Principles';
import { Portfolio } from '@/components/sections/Portfolio';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        {/* <Principles /> */}
        {/* <Portfolio /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
