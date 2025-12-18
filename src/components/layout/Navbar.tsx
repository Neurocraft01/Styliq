import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative overflow-hidden rounded-lg">
            <img src="/logo.jpg" alt="Styliq Interiors" className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-serif font-bold text-white tracking-widest leading-none group-hover:text-brand transition-colors duration-300">STYLIQ</span>
            <span className="text-brand text-xs tracking-[0.3em] leading-none font-medium mt-1">INTERIORS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest hover:text-brand transition-all duration-300 relative group ${location.pathname === link.path ? 'text-brand' : 'text-gray-300'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link to="/contact" className="bg-gradient-to-r from-brand to-brand-light hover:from-brand-dark hover:to-brand text-white font-bold py-3 px-8 rounded-none skew-x-[-10deg] transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,92,13,0.5)]">
            <span className="block skew-x-[10deg]">Book Meeting</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand text-center text-dark font-bold py-3 rounded-lg">
                Book a Meeting
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
