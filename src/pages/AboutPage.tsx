import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  User, 
  MapPin, 
  Award, 
  Target, 
  Heart, 
  Lightbulb,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product and service meets the highest industry standards.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of industry trends, offering cutting-edge solutions for modern challenges.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent business practices that build trust with every interaction.'
    }
  ];

  const achievements = [
    'Established trusted partnerships with 500+ companies worldwide',
    'Successfully delivered 1000+ projects across multiple industries',
    'Maintained 99% client satisfaction rate throughout our operation',
    'Expanded services across laboratory, agricultural, and engineering sectors',
    'Built reputation as Nigeria\'s leading contract solutions provider',
    'Developed expertise in large-scale equipment importation and setup'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Gladstone Lab</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the principles of excellence, innovation, and trust, Gladstone Lab has become a leading provider of laboratory and engineering solutions across Nigeria and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Meet Our Founder
                </h2>
                <div className="flex items-center space-x-4 text-lg">
                  <User className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-foreground">Ganiyu A Adedokun</span>
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span className="text-muted-foreground">Nigeria</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ganiyu A Adedokun is the visionary founder and CEO of Gladstone Lab. With over a decade of experience in the laboratory and engineering solutions industry, he has built a reputation for reliability, quality, and exceptional customer service.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known for his meticulous attention to detail and commitment to excellence, Ganiyu has earned the trust of hundreds of companies worldwide. His expertise spans across laboratory chemicals, equipment procurement, agricultural facilities, and large-scale industrial setups.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">Industry Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-5 w-5 text-success" />
                  <span className="text-foreground font-medium">Verified Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-info" />
                  <span className="text-foreground font-medium">Trusted Partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">Results-Driven</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-glass backdrop-blur-sm border-border/30 hover:shadow-card transition-all">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-12 w-12 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Ganiyu A Adedokun</h3>
                      <p className="text-accent font-medium">Founder & CEO</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent">10+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent">500+</div>
                        <div className="text-sm text-muted-foreground">Trusted Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent">99%</div>
                        <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto group-hover:animate-float">
                      <value.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Our Journey & Achievements
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From humble beginnings to becoming a trusted name in the industry, our journey is marked by consistent growth, innovation, and client success stories.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="leading-relaxed">
                    To provide exceptional laboratory and engineering solutions that empower businesses to achieve their goals while maintaining the highest standards of quality and service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-accent text-accent-foreground">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="leading-relaxed">
                    To be the leading provider of scientific and engineering solutions across Africa, known for innovation, reliability, and exceptional client partnerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Partner With Us Today
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join hundreds of satisfied clients who trust Gladstone Lab for their laboratory and engineering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;