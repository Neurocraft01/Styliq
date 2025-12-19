import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img src="/logo.jpg" alt="Styliq Interiors" className="h-12 w-12 object-cover rounded-md" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white tracking-widest leading-none">STYLIQ</span>
                <span className="text-brand text-xs tracking-[0.3em] leading-none mt-1">INTERIORS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Creating timeless, elegant, and functional spaces that reflect your unique style and personality. We design for life.
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com/styliqinteriors/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand transition-colors transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8 uppercase tracking-widest border-b border-brand/30 pb-2 inline-block">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand transition-all flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-brand mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8 uppercase tracking-widest border-b border-brand/30 pb-2 inline-block">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-gray-400 group">
                <MapPin className="text-brand shrink-0 mt-1 group-hover:text-white transition-colors" size={20} />
                <span className="group-hover:text-white transition-colors">123 Design Avenue, Creative District, City, Country</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-400 group">
                <Phone className="text-brand shrink-0 group-hover:text-white transition-colors" size={20} />
                <span className="group-hover:text-white transition-colors">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-400 group">
                <Mail className="text-brand shrink-0 group-hover:text-white transition-colors" size={20} />
                <span className="group-hover:text-white transition-colors">hello@styliqinteriors.com</span>
              </li>
              <li className="flex items-start space-x-4 text-gray-400 group">
                <Clock className="text-brand shrink-0 mt-1 group-hover:text-white transition-colors" size={20} />
                <div>
                  <p className="group-hover:text-white transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="group-hover:text-white transition-colors">Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8 uppercase tracking-widest border-b border-brand/30 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get the latest design trends and news.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors rounded-md"
              />
              <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 px-6 transition-colors flex items-center justify-center group rounded-md">
                Subscribe <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Styliq Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
