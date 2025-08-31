import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building, Shield, Package, Clock, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";
import Logo from "@/components/Logo";

const Services = () => {
  const mainServices = [
    {
      title: "Fleet Owners",
      description: "Professional fleet management with modern vehicles for reliable transportation across all routes",
      icon: Truck,
      features: ["Modern Vehicle Fleet", "Regular Maintenance", "GPS Tracking", "Professional Drivers"],
      color: "primary"
    },
    {
      title: "Transport Contractors",
      description: "Comprehensive transport contracting services with guaranteed delivery schedules",
      icon: Building,
      features: ["Contract Management", "Route Optimization", "Scheduled Deliveries", "Load Management"],
      color: "secondary"
    },
    {
      title: "Commission Agent",
      description: "Trusted commission agent services with transparent dealings and competitive rates",
      icon: Shield,
      features: ["Transparent Pricing", "Commission Based", "Market Connections", "Trusted Network"],
      color: "primary"
    }
  ];

  const additionalServices = [
    { title: "Door-to-Door Delivery", icon: Package },
    { title: "Express Transportation", icon: Clock },
    { title: "Long Distance Routes", icon: MapPin },
    { title: "24/7 Support", icon: Clock },
    { title: "Load Tracking", icon: Truck }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gradient-hero shadow-hero relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-primary-foreground hover:text-secondary transition-smooth">
              <Logo size="md" className="text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold">A.M. Cargo Movers</h1>
                <p className="text-sm opacity-90">Est. 2010</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-6 text-primary-foreground">
              <Link to="/" className="hover:text-secondary transition-smooth">Home</Link>
              <Link to="/about" className="hover:text-secondary transition-smooth">About</Link>
              <Link to="/services" className="text-secondary font-semibold">Services</Link>
              <Link to="/coverage" className="hover:text-secondary transition-smooth">Coverage</Link>
              <Link to="/contact" className="hover:text-secondary transition-smooth">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/90"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-scale-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in delay-300">
            Comprehensive transportation solutions for all your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional transportation services tailored to your business needs
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <service.icon className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-bounce-gentle" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-primary animate-bounce-gentle" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Value-added services to enhance your transportation experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient and reliable service delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Request Quote", description: "Contact us with your transportation requirements" },
              { step: "02", title: "Route Planning", description: "We optimize the best route for your cargo" },
              { step: "03", title: "Transportation", description: "Professional drivers handle your cargo with care" },
              { step: "04", title: "Delivery", description: "Safe and timely delivery to your destination" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in hover:scale-105 transition-transform duration-300 group" style={{animationDelay: `${index * 200}ms`}}>
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:animate-bounce-gentle">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">Need Transportation Services?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your specific transportation requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                Get Quote Now
              </Button>
            </Link>
            <Link to="/coverage">
              <Button variant="heroOutline" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                View Coverage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">A.M Cargo Movers</h3>
          <p className="text-background/80 mb-4">Your Trusted Transport Partner Since 2010</p>
          <p className="text-background/60">
            © 2024 A.M Cargo Movers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;