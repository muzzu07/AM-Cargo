import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, MapPin, Users, Award, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";
import servicesImage from "@/assets/services-logistics.jpg";
import Logo from "@/components/Logo";

const About = () => {
  const achievements = [
    { icon: Clock, title: "13+ Years", description: "Of trusted service since 2010" },
    { icon: Truck, title: "500+", description: "Successful deliveries monthly" },
    { icon: Users, title: "100+", description: "Satisfied clients across India" },
    { icon: Award, title: "Top Rated", description: "Transport service provider" }
  ];

  const values = [
    {
      title: "Reliability",
      description: "Consistent and dependable service delivery every time",
      icon: Shield
    },
    {
      title: "Trust",
      description: "Built on transparent dealings and honest communication",
      icon: Users
    },
    {
      title: "Excellence",
      description: "Committed to exceeding expectations in every transport",
      icon: Award
    }
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
              <Link to="/about" className="text-secondary font-semibold">About</Link>
              <Link to="/services" className="hover:text-secondary transition-smooth">Services</Link>
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
            About Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in delay-300">
            Your trusted transport partner since 2010
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-8 text-foreground">Our Journey</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2010, A.M Cargo Movers began as a vision to revolutionize 
                  transportation services in India. What started as a small fleet operation 
                  has grown into a comprehensive logistics solution provider.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Over the years, we have established ourselves as reliable fleet owners, 
                  trusted transport contractors, and professional commission agents, 
                  serving clients across major cities and routes throughout India.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to excellence, transparency, and customer satisfaction 
                  has made us a preferred choice for businesses and individuals seeking 
                  reliable transportation solutions.
                </p>
                <Link to="/contact">
                  <Button variant="default" size="lg" className="hover:scale-105 transition-transform duration-300">
                    Work With Us
                  </Button>
                </Link>
              </div>
              <div className="animate-scale-in hover:shadow-hero transition-all duration-500">
                <img 
                  src={servicesImage} 
                  alt="Our Services" 
                  className="w-full h-96 object-cover rounded-lg shadow-card hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that define our success
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in group hover:scale-105" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:animate-bounce-gentle" />
                  <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our operations and relationships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <value.icon className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-float" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">Ready to Partner with Us?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a trusted transport partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                Get Quote
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

export default About;