import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Clock, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section ref={ref} className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-dark"></div>
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-brand text-lg md:text-xl tracking-[0.5em] uppercase mb-6 font-medium">Welcome to Styliq</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 text-white leading-tight">
              Design That <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand">Inspires</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              We craft immersive environments that blend modern aesthetics with timeless elegance. Your space, reimagined.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/projects" className="group relative px-10 py-4 bg-brand text-white font-bold text-lg overflow-hidden skew-x-[-10deg] hover:shadow-[0_0_30px_rgba(232,92,13,0.6)] transition-all duration-300">
                <span className="absolute inset-0 w-full h-full bg-brand-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative flex items-center skew-x-[10deg]">
                  View Portfolio <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </span>
              </Link>
              <Link to="/contact" className="group px-10 py-4 border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-dark transition-all duration-300 skew-x-[-10deg]">
                <span className="block skew-x-[10deg]">Book Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto mb-2"></div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* Introduction / About Teaser */}
      <section className="py-32 bg-dark relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-brand/20 rounded-lg z-0 hidden md:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1000&auto=format&fit=crop" 
                alt="About Styliq" 
                className="rounded-lg shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 bg-dark-card p-8 shadow-xl border border-white/5 z-20 hidden md:block">
                <p className="text-4xl font-serif font-bold text-brand mb-2">15+</p>
                <p className="text-gray-400 uppercase tracking-wider text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-brand tracking-widest uppercase mb-4 font-bold">Who We Are</h4>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">Redefining <span className="text-brand">Luxury</span> <br/> Living Spaces</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                At Styliq Interiors, we believe that your home should be a reflection of your personality and lifestyle. Our team of expert designers is dedicated to creating spaces that are not only visually stunning but also functional and comfortable.
              </p>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                From the initial concept to the final touch, we ensure every detail is perfect. We don't just design spaces; we curate experiences that last a lifetime.
              </p>
              <Link to="/about" className="text-white font-bold text-lg hover:text-brand transition-colors inline-flex items-center group">
                Read More About Us <span className="ml-2 bg-brand rounded-full p-1 group-hover:ml-4 transition-all"><ChevronRight size={16} className="text-dark" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-dark-lighter relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 skew-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <h4 className="text-brand tracking-widest uppercase mb-4 font-bold">Our Expertise</h4>
              <h2 className="text-5xl font-serif font-bold">What We <span className="text-brand">Do</span></h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-gray-400 hover:text-white transition-colors mt-6 md:mt-0">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential Design", desc: "Tailored homes that tell your story.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" },
              { title: "Commercial Spaces", desc: "Inspiring workplaces for modern businesses.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
              { title: "Architectural Planning", desc: "Structural precision meets aesthetic beauty.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                  <span className="text-brand font-bold uppercase tracking-wider text-sm flex items-center">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-brand font-bold">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose <span className="text-brand">Styliq</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We go beyond design to deliver an experience that is seamless, transparent, and transformative.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award size={50} />, title: "Award Winning Design", desc: "Recognized globally for excellence in residential and commercial spaces." },
              { icon: <Clock size={50} />, title: "On-Time Delivery", desc: "We respect your time and ensure projects are completed on schedule, every time." },
              { icon: <CheckCircle size={50} />, title: "Quality Assurance", desc: "Premium materials and top-tier craftsmanship guaranteed for lasting beauty." }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark-card p-10 rounded-xl border border-white/5 hover:border-brand/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-brand mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Redesigned */}
      <section className="py-32 bg-brand relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-dark">Client <span className="text-white">Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Homeowner", text: "Styliq transformed our living room into a dream space. The attention to detail is unmatched!" },
              { name: "Michael Chen", role: "CEO, TechCorp", text: "Our office redesign has significantly boosted employee morale. Highly recommended for commercial projects." },
              { name: "Emma Davis", role: "Boutique Owner", text: "Professional, creative, and easy to work with. They perfectly captured the essence of my brand." }
            ].map((t, i) => (
              <div key={i} className="bg-dark p-10 rounded-xl shadow-2xl border border-white/10 relative mt-6 md:mt-0">
                <div className="absolute -top-6 left-10 bg-brand-light text-dark p-3 rounded-full">
                  <Star fill="currentColor" size={24} />
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-brand text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Ready to Transform <br/> Your Space?</h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">Book a consultation today and let's start the journey to your dream interior.</p>
          <Link to="/contact" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold py-5 px-12 rounded-none skew-x-[-10deg] transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,92,13,0.4)] text-xl">
            <span className="block skew-x-[10deg]">Start Your Project</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
