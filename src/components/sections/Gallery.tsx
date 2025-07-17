
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Residential Roofing",
    category: "Gerard Roof Installations",
    description: "Premium Gerard roof installation for a contemporary home",
    image: "/Gallery/roof1.jpg",
  },
  {
    id: 2,
    title: "Custom Woodwork Design",
    category: "Woodwork Forming Projects",
    description: "Precision woodwork forming for unique architectural features",
    image: "/Gallery/roof2.jpg",
  },
  {
    id: 3,
    title: "Commercial Complex",
    category: "Galvanized Truss Constructions",
    description: "Large-scale galvanized truss installation for commercial building",
    image: "/Gallery/roof3.jpg",
  },
  {
    id: 4,
    title: "Modern Architecture",
    category: "Gerard Roof Installations",
    description: "Contemporary roofing solution for modern architecture",
    image: "/Gallery/roof4.jpg",
  },
  {
    id: 5,
    title: "Structural Excellence",
    category: "Galvanized Truss Constructions",
    description: "Complex structural solutions with galvanized trusses",
    image: "/Gallery/roof5.jpg",
  },
  {
    id: 6,
    title: "Premium Roof Finish",
    category: "Gerard Roof Installations",
    description: "High-quality finishing touches on a residential roof project",
    image: "/Gallery/roof6.jpg",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = projects.filter((project) =>
    activeCategory === "all" ? true : project.category === activeCategory
  );

  const handlePrevious = () => {
    setSelectedImage((current) => {
      if (current === null) return null;
      return current > 0 ? current - 1 : filteredProjects.length - 1;
    });
  };

  const handleNext = () => {
    setSelectedImage((current) => {
      if (current === null) return null;
      return current < filteredProjects.length - 1 ? current + 1 : 0;
    });
  };

  return (
    <section id="gallery" className="py-24 bg-gray-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-navy bg-navy/10 rounded-full">
            Our Projects
          </span>
          <h2 className="text-4xl font-bold text-gray-dark mb-6">
            Featured Projects Gallery
          </h2>
          <p className="text-gray max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful projects, showcasing our expertise in
            roofing, woodwork forming, and truss construction.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`capitalize ${
                  activeCategory === category
                    ? "bg-navy hover:bg-navy-light"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${project.id === 1 ? 'object-cover object-top' : 'object-cover'}`}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-black/95 border-none p-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {selectedImage !== null && (
                <>
                  <img
                    src={filteredProjects[selectedImage].image}
                    alt={filteredProjects[selectedImage].title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 ml-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevious();
                      }}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 mr-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {filteredProjects[selectedImage].title}
                    </h3>
                    <p className="text-gray-200">
                      {filteredProjects[selectedImage].description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
