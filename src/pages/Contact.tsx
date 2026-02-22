import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import SEO from '../components/seo/SEO';
import { localBusinessSchema, buildBreadcrumb } from '../components/seo/schemas';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-dark text-white overflow-hidden">
      <SEO
        title="Contact STYLIQ INTERIORS | Book Interior Design Consultation Pune"
        description="Get in touch with STYLIQ INTERIORS in Pune. Book a free interior design consultation, call +91 7447415182, or visit us at Pimpri Colony, Pune. We reply within 24 hours."
        canonical="/contact"
        keywords="contact interior designer Pune, book interior design consultation Pune, STYLIQ INTERIORS contact, interior design studio Pimpri Pune"
        schema={[localBusinessSchema, buildBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])]}
      />
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

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
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
                    <p className="text-gray-400 group-hover:text-brand transition-colors">7447415182</p>
                    <p className="text-gray-400 group-hover:text-brand transition-colors">8805500590</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                    <a href="mailto:istyliq@gmail.com" className="text-gray-400 group-hover:text-brand transition-colors">istyliq@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="bg-brand/10 p-4 rounded-sm text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">Visit Us</h4>
                    <a href="https://maps.app.goo.gl/9QwaAzt7pmssKCeN7" target="_blank" rel="noopener noreferrer" className="text-gray-400 group-hover:text-brand transition-colors block">
                      Near Laxmi Sweets, Yashwantrao Chavan Road<br />
                      Pimpri Colony, Pune - 411018
                    </a>
                    <a href="https://maps.app.goo.gl/9QwaAzt7pmssKCeN7" target="_blank" rel="noopener noreferrer" className="text-brand text-sm mt-1 inline-flex items-center hover:underline">
                      View on Google Maps →
                    </a>
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
            <div className="h-80 w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-lg overflow-hidden border border-white/10">
               <iframe 
                 src="https://maps.google.com/maps?q=Near+Laxmi+Sweets+Yashwantrao+Chavan+Road+Pimpri+Colony+Pune+411018&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy"
                 title="Styliq Interiors - Google Map"
               ></iframe>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-lighter p-10 border border-white/5 relative overflow-hidden rounded-lg"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand/10 rounded-bl-full -mr-10 -mt-10"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-8">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-md">
                <p className="text-green-400 text-center">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
                <p className="text-red-400 text-center">Oops! Something went wrong. Please try again.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Name*</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Email*</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-brand transition-colors">Message*</label>
                <textarea 
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border-b-2 border-white/10 px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors placeholder-transparent resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-dark transition-colors flex items-center justify-center group rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />}
              </button>
            </form>

            {/* Instagram Feed — fills the blank space below the form */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
                    <div className="bg-dark-lighter rounded-full p-1.5">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Follow Our Work</p>
                    <a href="https://instagram.com/styliqinteriors/" target="_blank" rel="noopener noreferrer" className="text-brand text-xs hover:underline">@styliqinteriors</a>
                  </div>
                </div>
                <a
                  href="https://instagram.com/styliqinteriors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand transition-colors"
                >
                  View All →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  '/Gallery1.jpeg',
                  '/moderntheme1.jpeg',
                  '/classicaltheme1.jpeg',
                  '/Gallery5.jpeg',
                  '/neoclassicaltheme1.jpeg',
                  '/bohemiantheme1.jpg',
                ].map((src, idx) => (
                  <a
                    key={idx}
                    href="https://instagram.com/styliqinteriors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-md block"
                  >
                    <img src={src} alt="Styliq on Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
