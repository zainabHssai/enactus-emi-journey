
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-enactus-black py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerAnimation}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div variants={itemAnimation} className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold tracking-tight">
                <span className="text-enactus-yellow">Enactus</span>
                <span className="text-white"> EMI</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Enactus EMI is a student organization that creates community development projects, applying business concepts to improve quality of life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-enactus-yellow transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-enactus-yellow transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-enactus-yellow transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="font-semibold text-base text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/who-we-are" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/our-projects" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/our-mission" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/palmares" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  Palmarès
                </Link>
              </li>
              <li>
                <Link to="/actuality" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  News
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="font-semibold text-base text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-enactus-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">École Mohammadia d'Ingénieurs, Avenue Ibn Sina, Rabat, Morocco</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-enactus-yellow flex-shrink-0" />
                <a href="mailto:contact@enactusemi.org" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  contact@enactusemi.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-enactus-yellow flex-shrink-0" />
                <a href="tel:+212500000000" className="text-gray-300 hover:text-enactus-yellow text-sm transition-colors duration-300">
                  +212 5 00 00 00 00
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="font-semibold text-base text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm">Subscribe to our newsletter to receive updates about our projects and events.</p>
            <form className="mt-2 space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-enactus-yellow/50 text-sm text-white placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-enactus-yellow text-enactus-black rounded-md hover:bg-enactus-yellow/90 transition-colors duration-300 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemAnimation}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} Enactus EMI. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
