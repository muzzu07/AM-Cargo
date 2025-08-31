import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Truck, Clock, Route } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";
import Logo from "@/components/Logo";

const Coverage = () => {
  const primaryRoutes = [
    { from: "Mumbai", to: "Vapi", time: "2-3 hours", distance: "120 km" },
    { from: "Vapi", to: "Daman", time: "30 mins", distance: "25 km" },
    { from: "Vapi", to: "Silvassa", time: "45 mins", distance: "35 km" },
    { from: "Mumbai", to: "Bangalore", time: "18-20 hours", distance: "980 km" },
    { from: "Delhi", to: "Mumbai", time: "20-24 hours", distance: "1400 km" },
    { from: "Chennai", to: "Bangalore", time: "5-6 hours", distance: "350 km" }
  ];

  const majorCities = [
    { name: "Mumbai", state: "Maharashtra", speciality: "Commercial Hub" },
    { name: "Delhi", state: "Delhi", speciality: "Capital Region" },
    { name: "Bangalore", state: "Karnataka", speciality: "Tech Capital" },
    { name: "Chennai", state: "Tamil Nadu", speciality: "Industrial Hub" },
    { name: "Hyderabad", state: "Telangana", speciality: "IT Corridor" },
    { name: "Kolkata", state: "West Bengal", speciality: "Eastern Gateway" },
    { name: "Pune", state: "Maharashtra", speciality: "Auto Hub" },
    { name: "Ahmedabad", state: "Gujarat", speciality: "Textile Center" }
  ];

  const specialRoutes = [
    { name: "Vapi", description: "Major chemical and industrial hub", icon: MapPin },
    { name: "Daman", description: "Port city with excellent connectivity", icon: Route },
    { name: "Silvassa", description: "Industrial township with regular services", icon: Truck },
    { name: "Bangalore", description: "IT capital with frequent freight movement", icon: Clock }
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
              <Link to="/coverage" className="text-secondary font-semibold">Coverage</Link>
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
            Coverage Areas
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in delay-300">
            Serving major cities and routes across India
          </p>
        </div>
      </section>

      {/* Special Routes */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Specialty Routes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Primary routes we serve with dedicated services and regular schedules
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialRoutes.map((route, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8 text-center">
                  <route.icon className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-bounce-gentle" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {route.name}
                  </h3>
                  <p className="text-muted-foreground">{route.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Routes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Primary Routes</h2>
            <p className="text-xl text-muted-foreground">
              Regular service routes with estimated time and distance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {primaryRoutes.map((route, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {route.from}
                    </div>
                    <Route className="h-6 w-6 text-primary group-hover:animate-bounce-gentle" />
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {route.to}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Distance:</span>
                      <span className="font-semibold">{route.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Transit Time:</span>
                      <span className="font-semibold">{route.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Major Cities We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across India's major metropolitan areas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {majorCities.map((city, index) => (
              <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-500 bg-gradient-card border-0 animate-fade-in hover:scale-105 group" style={{animationDelay: `${index * 80}ms`}}>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-float" />
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{city.state}</p>
                  <p className="text-xs text-primary font-medium">{city.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All India Coverage */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">All India Coverage</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Beyond our specialty routes, we provide transportation services to all major cities, 
              towns, and industrial areas across India. No destination is too far for our reliable service.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-primary-foreground/90">
              <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
                <Truck className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-xl font-bold mb-2">Regional Coverage</h3>
                <p>Comprehensive coverage across all Indian states and union territories</p>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
                <Clock className="h-12 w-12 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-2">Scheduled Services</h3>
                <p>Regular scheduled services to major industrial and commercial hubs</p>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '600ms'}}>
                <Route className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-xl font-bold mb-2">Custom Routes</h3>
                <p>Flexible routing solutions for special cargo and urgent deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Don't See Your Route?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for custom routing solutions. We serve destinations across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="default" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
                View Services
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

export default Coverage;