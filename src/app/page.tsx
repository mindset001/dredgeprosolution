// app/page.jsx
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
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.8
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400
    }
  },
  tap: {
    scale: 0.95
  }
};

const backgroundVariants = {
  hidden: { 
    backgroundPosition: '0% 50%',
    opacity: 0 
  },
  visible: {
    backgroundPosition: '100% 50%',
    opacity: 1,
    transition: {
      backgroundPosition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear"
      },
      opacity: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
};


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

  const scrollToSection = (sectionId: any) => {
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
      {/* Navigation */}
     <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-600 text-white p-2 rounded-md">
                <Ship className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">DredgePro Solutions</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'projects', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
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
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
     <motion.section 
        id="home" 
        className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 bg-[length:200%_200%]"
        // variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              // variants={itemVariants}
            >
              Expert Dredging, Transportation & Construction Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              // variants={itemVariants}
            >
              Providing comprehensive marine and infrastructure services with cutting-edge technology and unmatched expertise.
            </motion.p>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              // variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </motion.button>

            {/* Animated floating elements */}
            <motion.div
              className="absolute top-1/4 left-10 opacity-10"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Ship className="h-16 w-16 text-blue-500" />
            </motion.div>

            <motion.div
              className="absolute top-1/3 right-16 opacity-10"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Truck className="h-12 w-12 text-green-500" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-20 opacity-10"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Construction className="h-14 w-14 text-orange-500" />
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('services')}
              className="cursor-pointer"
            >
              <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-blue-600 rounded-full mt-2"
                />
              </div>
              <p className="text-blue-600 text-sm mt-2">Scroll Down</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your dredging, transportation, and construction needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dredging Service */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
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
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
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
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About DredgePro Solutions</h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in the industry, DredgePro Solutions has established itself as a leader in marine and infrastructure services. Our team of experts is dedicated to delivering exceptional results for every project.
              </p>
              <div className="space-y-4">
                {['Expert Team', 'Modern Equipment', 'Quality Assurance', 'Timely Delivery'].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-xl">
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
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to discuss your project? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@dredgeprosolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-300">123 Marine Way, Coastal City, CC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
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
                    // rows="4" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
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
            <div>
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
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Dredging</li>
                <li>Transportation</li>
                <li>Construction</li>
                <li>Marine Services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
                  <div className="w-5 h-5"></div>
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600">
                  <div className="w-5 h-5"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DredgePro Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}