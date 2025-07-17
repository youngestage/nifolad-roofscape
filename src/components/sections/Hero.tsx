
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-navy/80 rounded-full">
            Premium Roofing & Construction Services
          </span>
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building Excellence, <br />
            Crafting Dreams
          </h1>
          <p className="mb-8 text-lg text-gray-200 max-w-2xl">
            NIFOLAD Construction Ltd specializes in Gerard woodwork, roof installations, 
            and galvanized truss construction. Experience superior craftsmanship and 
            unmatched quality in every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-navy hover:bg-gray-100"
            >
              <a href="#get-quote" className="flex items-center">
                Get a Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
