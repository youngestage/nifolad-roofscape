
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
