'use client';
import { useState, useEffect } from 'react';
import { 
  Ship, 
  Truck, 
  Construction, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        
        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 5s ease-in-out infinite;
        }
        
        .animate-float-rotate {
          animation: floatRotate 7s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          animation: gradientShift 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center opacity-0 animate-fade-in">
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <Ship className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">DredgePro Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium opacity-0 animate-fade-in animation-delay-${(index + 1) * 100} ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 opacity-0 animate-fade-in animation-delay-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium py-2 ${
                      activeSection === item ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-32 pb-20 bg-gradient-to-br h-[100vh] from-blue-50 via-white to-gray-100 animate-gradient-shift"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in-up">
              Expert Dredging, Transportation & Construction Solutions
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 opacity-0 animate-fade-in-up animation-delay-200">
              Providing comprehensive marine and infrastructure services with cutting-edge technology and unmatched expertise.
            </p>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors opacity-0 animate-scale-in animation-delay-400"
            >
              Get Started
            </button>

            {/* Animated floating elements */}
            <div className="absolute top-1/4 left-10 opacity-10 animate-float">
              <Ship className="h-16 w-16 text-blue-500" />
            </div>

            <div className="absolute top-1/3 right-16 opacity-10 animate-float-reverse animation-delay-1000">
              <Truck className="h-12 w-12 text-green-500" />
            </div>

            <div className="absolute bottom-1/4 left-20 opacity-10 animate-float-rotate animation-delay-2000">
              <Construction className="h-14 w-14 text-orange-500" />
            </div>
          </div>

          {/* Animated scroll indicator */}
          {/* <div className="hidden md:block md:absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
            <div
              className="animate-bounce cursor-pointer"
              onClick={() => scrollToSection('services')}
            >
              <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-bounce animation-delay-1000"></div>
              </div>
              <p className="text-blue-600 text-sm mt-2">Scroll Down</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 opacity-0 animate-fade-in-up">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-100">
              Comprehensive solutions for all your dredging, transportation, and construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dredging Service */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-200">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Ship className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dredging Services</h3>
              <ul className="space-y-3">
                {['Harbor Dredging', 'River Maintenance', 'Land Reclamation', 'Environmental Dredging', 'Pipeline Dredging'].map((service) => (
                  <li key={service} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transportation Service */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation</h3>
              <ul className="space-y-3">
                {['Heavy Equipment Transport', 'Marine Logistics', 'Bulk Material Hauling', 'Project Cargo', 'Infrastructure Transport'].map((service) => (
                  <li key={service} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Construction Service */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up animation-delay-400">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Construction className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Construction</h3>
              <ul className="space-y-3">
                {['Marine Construction', 'Port Infrastructure', 'Coastal Protection', 'Underwater Construction', 'Civil Engineering'].map((service) => (
                  <li key={service} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About DredgePro Solutions</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in the industry, DredgePro Solutions has established itself as a leader in marine and infrastructure services. Our team of experts is dedicated to delivering exceptional results for every project.
              </p>
              <div className="space-y-4">
                {['Expert Team', 'Modern Equipment', 'Quality Assurance', 'Timely Delivery'].map((item, index) => (
                  <div key={item} className="flex items-center opacity-0 animate-fade-in-up" style={{animationDelay: `${index * 100 + 200}ms`}}>
                    <div className="bg-blue-100 p-1 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-xl opacity-0 animate-fade-in-up animation-delay-300">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Expertise</h4>
                    <p className="text-blue-100">Highly skilled professionals with decades of combined experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Technology</h4>
                    <p className="text-blue-100">State-of-the-art equipment and innovative solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-1 rounded-full mr-4 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reliability</h4>
                    <p className="text-blue-100">Consistent on-time delivery and exceptional results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Features Section */}
      {/* <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 opacity-0 animate-fade-in-up">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-100">
              Discover some of our recent successful projects across dredging, transportation, and construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Port Expansion', category: 'Dredging', description: 'Deepening and widening of harbor channels' },
              { title: 'Bridge Construction', category: 'Construction', description: 'Marine foundation and support structure' },
              { title: 'Bulk Transport', category: 'Transportation', description: 'Large-scale material logistics operation' },
              { title: 'Coastal Protection', category: 'Construction', description: 'Erosion control and shoreline stabilization' },
              { title: 'River Maintenance', category: 'Dredging', description: 'Sediment removal and channel maintenance' },
              { title: 'Equipment Logistics', category: 'Transportation', description: 'Specialized heavy equipment transport' }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-blue-600 text-5xl font-bold">{index + 1}</div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-100">
              Ready to discuss your project? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (610) 6180691</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">sales@dredgeprosolutions.com.ng</p>
                  </div>
                </div>
                {/* <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-300">123 Marine Way, Coastal City, CC 12345</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center animate-pulse-slow"
                >
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="opacity-0 animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-md">
                  <Ship className="h-6 w-6" />
                </div>
                <span className="ml-2 text-xl font-bold">DredgePro Solutions</span>
              </div>
              <p className="text-gray-400">
                Providing expert dredging, transportation, and construction services with excellence and reliability.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-in-up animation-delay-100">
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Dredging</li>
                <li>Transportation</li>
                <li>Construction</li>
                <li>Marine Services</li>
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <div className="w-5 h-5"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DredgePro Solutions. All rights reserved.</p>
            <p>Designed @ Acme Innovations</p>
          </div>
        </div>
      </footer>
    </div>
  );
}