import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Instagram, 
  Globe,
  MapPin,
  Clock,
  Phone,
  User,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed message',
      value: 'contact@gladstonelab.com',
      action: 'mailto:contact@gladstonelab.com',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat and instant responses',
      value: '+234 XXX XXX XXXX',
      action: '#',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Direct consultation',
      value: '+234 XXX XXX XXXX',
      action: 'tel:+234XXXXXXXXX',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'Professional network and updates',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Behind the scenes and projects',
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: Globe,
      name: 'Wikipedia',
      description: 'Company information and history',
      href: '#',
      color: 'hover:text-gray-600'
    }
  ];

  const businessInfo = [
    {
      icon: User,
      title: 'Contact Person',
      value: 'Ganiyu A Adedokun'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nigeria'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 8:00 AM - 6:00 PM WAT'
    }
  ];

  const services = [
    'Laboratory Equipment',
    'Chemical Supplies',
    'Agricultural Facilities',
    'Engineering Solutions',
    'Equipment Repair',
    'Large Equipment Import',
    'Company Setup',
    'Technical Consulting'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your project? Contact Ganiyu A Adedokun directly for personalized consultation and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Methods
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred way to reach out. We respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto group-hover:animate-float`}>
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-medium text-foreground mb-6">{method.value}</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    <a href={method.action}>
                      Contact Now
                      <Send className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-card transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..." 
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-glow">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Business Information */}
            <div className="space-y-6">
              <Card className="hover:shadow-card transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {businessInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="hover:shadow-card transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Follow Us</CardTitle>
                  <p className="text-muted-foreground">Stay connected and updated with our latest projects.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                      <div>
                        <h5 className="font-medium">{social.name}</h5>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Quote */}
              <Card className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Need a Quick Quote?</h3>
                  <p className="mb-4 opacity-90">Contact us directly for immediate assistance and pricing information.</p>
                  <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Contact Gladstone Lab?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                <p className="text-muted-foreground text-sm">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Free Consultation</h3>
                <p className="text-muted-foreground text-sm">Initial project discussion at no cost</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground text-sm">Best value for quality solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;