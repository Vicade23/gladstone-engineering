import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Beaker, 
  Microscope, 
  Wrench, 
  Truck, 
  Factory, 
  Wheat,
  HardHat,
  Package,
  ArrowRight,
  Star,
  Users,
  ShieldCheck
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Beaker,
      title: 'Laboratory Chemicals',
      description: 'High-purity chemicals and reagents for research, analysis, and industrial applications.',
      features: ['Analytical grade chemicals', 'Custom formulations', 'Safety compliance', 'Global sourcing'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Microscope,
      title: 'Laboratory Equipment',
      description: 'Advanced instruments and equipment for modern laboratory operations.',
      features: ['Scientific instruments', 'Measurement devices', 'Safety equipment', 'Calibration services'],
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      icon: Package,
      title: 'Laboratory Wears',
      description: 'Professional laboratory clothing and personal protective equipment.',
      features: ['Lab coats & aprons', 'Safety goggles', 'Protective gloves', 'Clean room attire'],
      color: 'bg-teal-50 border-teal-200'
    },
    {
      icon: Factory,
      title: 'Lab Facilities Setup',
      description: 'Complete laboratory design, construction, and installation services.',
      features: ['Facility planning', 'Equipment installation', 'Ventilation systems', 'Safety compliance'],
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      icon: Wheat,
      title: 'Agricultural Solutions',
      description: 'Comprehensive agricultural facilities and equipment for modern farming.',
      features: ['Irrigation systems', 'Greenhouse setup', 'Farm equipment', 'Soil testing labs'],
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: HardHat,
      title: 'Engineering Facilities',
      description: 'Industrial engineering solutions for manufacturing and production.',
      features: ['Plant design', 'Industrial equipment', 'Process optimization', 'Quality systems'],
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: Truck,
      title: 'Equipment Importation',
      description: 'Large-scale equipment sourcing and importation services worldwide.',
      features: ['Global sourcing', 'Customs clearance', 'Logistics management', 'Quality assurance'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Wrench,
      title: 'Equipment Repair',
      description: 'Professional maintenance, repair, and calibration services.',
      features: ['Preventive maintenance', 'Emergency repairs', 'Calibration services', 'Parts replacement'],
      color: 'bg-red-50 border-red-200'
    }
  ];

  const additionalServices = [
    'Company Production Setup',
    'Technical Consulting',
    'Quality Assurance',
    'Training & Support',
    'Maintenance Contracts',
    'Custom Solutions'
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Proven Excellence',
      description: '10+ years of successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with industry expertise'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'ISO standards and certified processes'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive laboratory, agricultural, and engineering solutions tailored to meet your specific business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From laboratory essentials to large-scale industrial setups, we cover all aspects of your technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-accent/50 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:animate-float">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-muted-foreground">
                We also provide specialized services to complement our core offerings.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-card transition-all border-border/50 hover:border-accent/50">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-medium text-foreground">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Gladstone Lab?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all border-border/50 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                      <item.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Process */}
          <Card className="bg-gradient-glass backdrop-blur-sm border-border/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Service Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 text-accent-foreground font-bold">1</div>
                  <h4 className="font-medium text-foreground mb-2">Consultation</h4>
                  <p className="text-sm text-muted-foreground">Understanding your specific requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 text-accent-foreground font-bold">2</div>
                  <h4 className="font-medium text-foreground mb-2">Planning</h4>
                  <p className="text-sm text-muted-foreground">Custom solution design and proposal</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 text-accent-foreground font-bold">3</div>
                  <h4 className="font-medium text-foreground mb-2">Implementation</h4>
                  <p className="text-sm text-muted-foreground">Professional delivery and installation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 text-accent-foreground font-bold">4</div>
                  <h4 className="font-medium text-foreground mb-2">Support</h4>
                  <p className="text-sm text-muted-foreground">Ongoing maintenance and assistance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Contact Ganiyu today to discuss your project requirements and receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-4"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;