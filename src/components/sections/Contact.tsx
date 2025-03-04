
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Phone, Mail, MapPin, Send, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "woodwork",
    comments: ""
  });
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    console.log("Contact form submitted:", contactFormData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    
    // Reset form fields
    setContactFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    console.log("Quote form submitted:", quoteFormData);
    
    toast({
      title: "Quote Request Received!",
      description: "We'll prepare your customized quote as soon as possible.",
    });
    
    // Reset form fields
    setQuoteFormData({
      name: "",
      email: "",
      phone: "",
      service: "woodwork",
      comments: ""
    });
  };
  
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-lightest">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-navy mb-4">Contact Us</h2>
        <p className="text-center text-gray mb-12 max-w-2xl mx-auto">
          Have questions or ready to start your project? Reach out to us and our team will be happy to assist you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="glass-card p-8 rounded-lg slide-up">
            <h3 className="text-2xl font-semibold text-navy mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-navy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-dark">Phone</h4>
                  <p className="mt-1">08064053976, 08121121890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-navy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-dark">Email</h4>
                  <p className="mt-1">info@nifoladconstruction.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-navy mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-dark">Address</h4>
                  <p className="mt-1">Suite 8, Fundex Building, Behind Glory Tabernacle Church, <br />Ashi Road Ojurin Bodija, Ibadan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-navy hover:bg-navy-light w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-navy">Request a Customized Quote</DialogTitle>
                  </DialogHeader>
                  
                  <form onSubmit={handleQuoteSubmit} className="mt-4 space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-1">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={quoteFormData.name}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-dark mb-1">
                            Email*
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={quoteFormData.email}
                            onChange={handleQuoteChange}
                            className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-dark mb-1">
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={quoteFormData.phone}
                            onChange={handleQuoteChange}
                            className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-1">
                          Service Required*
                        </label>
                        <select
                          name="service"
                          value={quoteFormData.service}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                          required
                        >
                          <option value="woodwork">Gerard Woodwork Forming</option>
                          <option value="roof">Gerard Roof Sales & Installation</option>
                          <option value="trusses">Galvanized Truss Construction</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-dark mb-1">
                          Additional Comments
                        </label>
                        <textarea
                          name="comments"
                          value={quoteFormData.comments}
                          onChange={handleQuoteChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        ></textarea>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-navy hover:bg-navy-light">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Quote Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-lg slide-up">
            <h3 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-dark mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-dark mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-dark mb-1">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-navy hover:bg-navy-light">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
