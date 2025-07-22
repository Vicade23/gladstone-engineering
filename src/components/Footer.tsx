import { Beaker, Linkedin, Globe, Instagram, MessageCircle, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Wikipedia',
      icon: Globe,
      href: '#',
      color: 'hover:text-gray-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: '#',
      color: 'hover:text-green-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@gladstonelab.com',
      color: 'hover:text-accent'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Lab Equipment',
    'Chemical Supplies',
    'Agricultural Facilities',
    'Engineering Solutions',
    'Equipment Repair',
    'Large Equipment Import'
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Beaker className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Gladstone Lab</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional laboratory and engineering solutions provider, trusted by companies worldwide for quality equipment and services.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`p-2 text-muted-foreground transition-colors ${social.color}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-foreground">Founder & CEO</p>
                <p className="text-muted-foreground">Ganiyu A Adedokun</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Nigeria</p>
              </div>
              <Button variant="outline" className="w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Gladstone Lab. All rights reserved. | Trusted worldwide for quality and excellence.
          </p>
          <div className="text-muted-foreground text-center mt-3">Maintained by <a className='underline' target='_blank' href="https://revosystem.vercel.app">Revo System</a> and contributors</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;