
import { Home, Shield, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Gerard Woodwork Forming",
    description: "Expert craftsmanship in forming Gerard woodwork structures, ensuring durability and aesthetic appeal for your property.",
  },
  {
    icon: Shield,
    title: "Gerard Roof Sales & Installation",
    description: "Premium Gerard roofing solutions with professional installation services, protecting your investment for years to come.",
  },
  {
    icon: Construction,
    title: "Galvanized Truss Construction",
    description: "Specialized construction of galvanized trusses, providing robust support structures for various roofing applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-navy bg-navy/10 rounded-full">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-dark mb-4">
            Premium Construction Solutions
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Discover our comprehensive range of construction and roofing services, 
            delivered with unmatched expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-navy" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-navy hover:text-navy-light hover:bg-navy/5">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
