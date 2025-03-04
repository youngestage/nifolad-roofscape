
import { Heart, Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NIFOLAD Construction</h3>
            <p className="text-gray-300 text-sm">
              Building Strong Foundations, One Roof at a Time
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">08064053976, 08121121890</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">info@nifoladconstruction.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">Suite 8, Fundex Building, Behind Glory Tabernacle Church</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 text-gray-300 mr-2 mt-0.5" />
                <span className="text-gray-300">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 text-sm bg-navy-dark border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-foreground"
              />
              <Button type="submit" variant="outline" className="w-full bg-transparent border-white hover:bg-white hover:text-navy transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} NIFOLAD Construction. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-xs text-gray-400">
            <span>Made with </span>
            <Heart className="h-3 w-3 mx-1 text-red-500" />
            <span> in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
