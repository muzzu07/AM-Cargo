import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Building, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";
import Logo from "@/components/Logo";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 96993 12120", "+91 90290 82120", "+91 72080 56287"],
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["amcargo1@gmail.com"],
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      color: "primary"
    },
    {
      icon: Building,
      title: "Established",
      details: ["Since 2010", "13+ Years of Service"],
      color: "secondary"
    }
  ];

  const quickServices = [
    "Fleet Owner Services",
    "Transport Contracting",
    "Commission Agent",
    "Express Delivery",
    "Long Distance Transport"
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
              <Link to="/services" className="hover:text-secondary transition-smooth">Services</Link>
              <Link to="/coverage" className="hover:text-secondary transition-smooth">Coverage</Link>
              <Link to="/contact" className="text-secondary font-semibold">Contact</Link>
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in delay-300">
            Get in touch for all your transportation needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your transportation requirements? Contact us today!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8 text-center">
                  <info.icon className={`h-16 w-16 mx-auto mb-6 group-hover:animate-bounce-gentle ${info.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-8 text-foreground">Send Us A Message</h3>
              <Card className="shadow-card bg-gradient-card border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <Input className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="Your Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                        <Input className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="Your Phone Number" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="Your Email" type="email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                      <Input className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="e.g., Fleet Services, Transport Contract" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Route/Destination</label>
                      <Input className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="From - To (e.g., Mumbai - Vapi)" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea className="hover:border-primary/50 focus:border-primary transition-colors duration-300" placeholder="Tell us about your requirements..." rows={4} />
                    </div>
                    <Button className="w-full hover:scale-105 transition-all duration-300 group" size="lg">
                      <Send className="h-5 w-5 mr-2 group-hover:animate-bounce-gentle" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Services & Why Choose Us */}
            <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
              <h3 className="text-3xl font-bold mb-8 text-foreground">Quick Services</h3>
              <Card className="shadow-card bg-gradient-card border-0 mb-8">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-4">
                    {quickServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-fade-in group" style={{animationDelay: `${index * 100}ms`}}>
                        <MapPin className="h-5 w-5 text-primary group-hover:animate-bounce-gentle" />
                        <span className="font-medium text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-0">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose A.M Cargo Movers?</h4>
                  <div className="space-y-3">
                    {[
                      "13+ years of trusted service",
                      "Professional fleet management",
                      "All India coverage network",
                      "Reliable transport contracting",
                      "24/7 customer support"
                    ].map((point, index) => (
                      <div key={index} className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Need Immediate Assistance?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            For urgent transportation requirements or emergency services, call us directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919699312120">
              <Button variant="hero" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                <Phone className="h-5 w-5 mr-2 animate-bounce-gentle" />
                Call Now: +91 96993 12120
              </Button>
            </a>
            <a href="mailto:amcargo1@gmail.com">
              <Button variant="heroOutline" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                <Mail className="h-5 w-5 mr-2 animate-float" />
                Email Us
              </Button>
            </a>
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

export default Contact;