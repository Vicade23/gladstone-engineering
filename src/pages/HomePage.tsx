import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Beaker, 
  Microscope, 
  Wrench, 
  ShieldCheck, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';

const HomePage = () => {
  const services = [
    {
      icon: Beaker,
      title: 'Lab Chemicals',
      description: 'High-quality laboratory chemicals for research and analysis'
    },
    {
      icon: Microscope,
      title: 'Lab Equipment',
      description: 'Advanced laboratory instruments and equipment'
    },
    {
      icon: Wrench,
      title: 'Equipment Repair',
      description: 'Professional maintenance and repair services'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const trustIndicators = [
    'ISO Certified Quality',
    'Trusted by 500+ Companies',
    'International Shipping',
    'Expert Technical Support'
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern Laboratory" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gladstone Lab
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional laboratory and engineering solutions provider. Trusted worldwide for 
              <span className="text-accent font-semibold"> quality equipment</span>, 
              <span className="text-accent font-semibold"> expert services</span>, and 
              <span className="text-accent font-semibold"> reliable support</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Contact Ganiyu
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From laboratory essentials to large-scale industrial equipment, we provide comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto group-hover:animate-float">
                      <service.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet Ganiyu A Adedokun
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founder and CEO of Gladstone Lab, Ganiyu is a trusted professional from Nigeria with extensive experience in laboratory and engineering solutions. His dedication to quality and customer satisfaction has earned trust from companies worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-success" />
                  <span className="text-foreground font-medium">Verified Professional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">Industry Expert</span>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-glass p-8 rounded-2xl backdrop-blur-sm border border-border/30">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Client-Focused Approach</h4>
                      <p className="text-muted-foreground">Personalized solutions for every client</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ShieldCheck className="h-8 w-8 text-success" />
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                      <p className="text-muted-foreground">ISO standards and certified processes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-info" />
                    <div>
                      <h4 className="font-semibold text-foreground">Proven Track Record</h4>
                      <p className="text-muted-foreground">10+ years of successful partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with Ganiyu today for a personalized consultation and quote for your laboratory or engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-4"
              >
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;