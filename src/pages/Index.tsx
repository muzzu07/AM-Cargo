import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, Shield, Clock, Phone, Mail, Building } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";
import servicesImage from "@/assets/services-logistics.jpg";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";

const Index = () => {
  const services = [
    {
      title: "Fleet Owners",
      description: "Professional fleet management with modern vehicles for reliable transportation",
      icon: Truck
    },
    {
      title: "Transport Contractors",
      description: "Comprehensive transport contracting services across all major routes",
      icon: Building
    },
    {
      title: "Commission Agent",
      description: "Trusted commission agent services with transparent dealings",
      icon: Shield
    }
  ];

  const locations = [
    "Vapi", "Daman", "Silvassa", "Bangalore", "Mumbai", "Delhi", "Chennai", "Kolkata", "Hyderabad"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gradient-hero shadow-hero relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground">
              <Logo size="sm" className="sm:hidden text-primary-foreground" />
              <Logo size="md" className="hidden sm:block text-primary-foreground" />
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">A.M. Cargo Movers</h1>
                <p className="text-xs sm:text-sm opacity-90">Est. 2010</p>
              </div>
            </div>
            <div className="hidden lg:flex space-x-6 text-primary-foreground">
              <a href="#about" className="hover:text-secondary transition-smooth">About</a>
              <a href="#services" className="hover:text-secondary transition-smooth">Services</a>
              <a href="#coverage" className="hover:text-secondary transition-smooth">Coverage</a>
              <a href="#contact" className="hover:text-secondary transition-smooth">Contact</a>
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in-up">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Logo size="lg" className="text-primary-foreground animate-scale-in" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-scale-in px-2">
            A.M. Cargo Movers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 opacity-90 animate-fade-in delay-300 px-2">
            Your Trusted Transport Partner Since 2010
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-80 max-w-2xl mx-auto animate-fade-in delay-500 px-4">
            Professional fleet owners, transport contractors, and commission agents 
            serving Vapi, Daman, Silvassa, Bangalore, and all over India
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-700 px-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="text-base sm:text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                Get Quote
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="lg" className="text-base sm:text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground animate-fade-in-up">About A.M. Cargo Movers</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in">
                <p className="text-lg text-muted-foreground mb-6">
                  Established in 2010, A.M Cargo Movers has been a trusted name in the transportation 
                  industry for over a decade. We specialize in providing comprehensive logistics solutions 
                  as fleet owners, transport contractors, and commission agents.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-primary animate-bounce-gentle" />
                    <span className="text-muted-foreground">13+ Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Shield className="h-6 w-6 text-primary animate-float" />
                    <span className="text-muted-foreground">Trusted & Reliable Service</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary animate-bounce-gentle" />
                    <span className="text-muted-foreground">All India Coverage</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-card animate-scale-in hover:shadow-hero transition-all duration-500 order-1 lg:order-2 mb-6 lg:mb-0">
                <img 
                  src={servicesImage} 
                  alt="Logistics Services" 
                  className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground px-2">Our Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <service.icon className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-primary mx-auto mb-4 sm:mb-6 group-hover:animate-bounce-gentle transition-all duration-300" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground px-2">Coverage Areas</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Serving major cities and routes across India
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-card animate-scale-in hover:shadow-hero transition-all duration-500">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-bounce-gentle" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{location}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 text-center animate-fade-in">
                <p className="text-base sm:text-lg font-semibold text-primary mb-2 animate-float">And All Over India</p>
                <p className="text-sm sm:text-base text-muted-foreground px-4">We provide transportation services to all major cities and routes across the country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground px-2">Contact Us</h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 px-4">
              Get in touch for your transportation needs
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary-foreground">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary animate-bounce-gentle" />
                      <div className="text-primary-foreground text-sm sm:text-base">
                        <div>+91 96993 12120</div>
                        <div>+91 90290 82120</div>
                        <div>+91 72080 56287</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-secondary animate-float" />
                      <span className="text-primary-foreground text-sm sm:text-base">amcargo1@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                      <span className="text-primary-foreground text-sm sm:text-base">Established Since 2010</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary-foreground">Why Choose Us?</h3>
                  <ul className="space-y-3 text-primary-foreground/90 text-sm sm:text-base">
                    <li>• 13+ years of trusted service</li>
                    <li>• Professional fleet management</li>
                    <li>• All India coverage network</li>
                    <li>• Reliable transport contracting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">A.M. Cargo Movers</h3>
          <p className="text-background/80 mb-3 sm:mb-4 text-sm sm:text-base">Your Trusted Transport Partner Since 2010</p>
          <p className="text-background/60 text-xs sm:text-sm">
            © 2024 A.M. Cargo Movers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;