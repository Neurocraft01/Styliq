import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useRef } from 'react';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-dark text-white overflow-hidden">
      {/* Parallax Hero */}
      <div className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-brand text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Vision</span>
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold mb-8">Contact Information</h3>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                We're here to help you create the space of your dreams. Reach out to us for a consultation or any inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">+1 234 567 8900</p>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">+1 987 654 3210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">hello@styliqinteriors.com</p>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">support@styliqinteriors.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Visit Us</h4>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">123 Design Avenue, Creative District</p>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">City, Country, 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="h-80 w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden border border-white/10">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623345678901!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy"
                 title="Google Map"
               ></iframe>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-lighter p-10 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand/10 rounded-bl-full -mr-10 -mt-10"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-dark transition-colors flex items-center justify-center group">
                Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
