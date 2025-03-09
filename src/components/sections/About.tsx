
import React, { useState } from "react";
import { Shield, Hammer, Ruler, Cube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ModelScene from "@/components/3d/ModelScene";

const features = [
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description: "Over a decade of experience in Gerard roofing and woodwork forming, delivering excellence in every project.",
  },
  {
    icon: Shield,
    title: "Sustainable Solutions",
    description: "Using top-grade materials that stand the test of time, ensuring longevity and durability for your property.",
  },
  {
    icon: Ruler,
    title: "Precision Engineering",
    description: "Expert construction of galvanized trusses, providing reliable and innovative roofing solutions.",
  },
];

const About = () => {
  const [modelFailed, setModelFailed] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-navy bg-navy/10 rounded-full">
            About Us
          </span>
          <h2 className="text-4xl font-bold text-gray-dark mb-6">
            Building Strong Foundations, One Roof at a Time
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At NIFOLAD Construction Ltd, we've built our reputation on delivering exceptional 
            roofing and construction solutions. Our commitment to excellence drives us to provide 
            superior Gerard woodwork forming, premium roof installations, and precisely engineered 
            galvanized truss construction. With every project, we bring together craftsmanship, 
            innovation, and reliability to exceed our clients' expectations.
          </p>
        </div>

        <div className="mb-16 fade-in">
          {modelFailed ? (
            <div className="w-full h-[300px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="text-center p-6">
                <Cube size={48} className="mx-auto mb-4 text-navy opacity-50" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">NIFOLAD Construction</h3>
                <p className="text-gray-600">Excellence in roofing and construction solutions</p>
              </div>
            </div>
          ) : (
            <ModelScene 
              className="hover:shadow-xl transition-all duration-300 rounded-xl" 
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-navy" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy-light"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
