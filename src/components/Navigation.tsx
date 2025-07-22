import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Beaker } from 'lucide-react';
import { Button } from '../components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg group-hover:animate-glow transition-all">
              <Beaker className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Gladstone Lab</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-accent bg-accent-light'
                      : 'text-foreground hover:text-accent hover:bg-accent-light/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium transition-all ${
                      isActive
                        ? 'text-accent bg-accent-light'
                        : 'text-foreground hover:text-accent hover:bg-accent-light/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button className="mt-4 bg-gradient-primary">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;