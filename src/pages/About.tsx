import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;
    
    const node = ref.current;
    const controls = animate(0, numericValue, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(val) {
        if (node) node.textContent = Math.floor(val) + suffix;
      }
    });

    return () => controls.stop();
  }, [numericValue, suffix, inView]);

  return <span ref={ref}>{0 + suffix}</span>;
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "350+", label: "Projects Completed", icon: CheckCircle },
    { number: "15+", label: "Design Awards", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience, Sarah leads our design vision with a focus on sustainable luxury."
    },
    {
      name: "Michael Chen",
      role: "Senior Interior Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Michael brings a unique perspective to spatial planning and material selection, creating harmonious environments."
    },
    {
      name: "Elena Rodriguez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Elena ensures every project is delivered on time and within budget, maintaining our high standards of quality."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-dark text-white overflow-hidden">
      {/* Parallax Hero */}
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="About Us Hero" 
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
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Crafting Spaces with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Soul</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate designers, architects, and dreamers dedicated to transforming ordinary spaces into extraordinary experiences.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand text-sm font-bold tracking-[0.2em] uppercase mb-2 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                A Decade of <br/>Design Excellence
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded in 2014, Styliq Interiors began with a simple mission: to make high-end interior design accessible, personal, and deeply meaningful. What started as a small boutique studio has grown into a full-service design firm with a portfolio spanning residential, commercial, and hospitality projects.
                </p>
                <p>
                  We believe that good design is not just about aesthetics; it's about how a space makes you feel. It's about creating environments that enhance your daily life, foster connection, and inspire creativity.
                </p>
                <p>
                  Our approach is collaborative and client-centric. We listen, we observe, and we translate your vision into reality with precision, passion, and an unwavering commitment to quality.
                </p>
              </div>
              
              <div className="mt-10">
                <img 
                  src="https://signature1.com/wp-content/uploads/2020/09/signature-signature.png" 
                  alt="Founder Signature" 
                  className="h-16 opacity-70 invert"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-brand/20 z-0 hidden md:block"></div>
              <div className="relative z-10 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our Studio" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-serif italic text-xl">"Design is intelligence made visible."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-lighter border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6 group-hover:bg-brand/20 transition-colors duration-300">
                  <stat.icon className="text-brand w-8 h-8" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <Counter value={stat.number} />
                </h3>
                <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-brand text-sm font-bold tracking-[0.2em] uppercase mb-2 block">The Minds Behind</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="overflow-hidden mb-6 relative aspect-[3/4]">
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-black/40 backdrop-blur-sm">
                    <button className="bg-white text-dark px-6 py-3 font-bold uppercase tracking-wider hover:bg-brand hover:text-white transition-colors rounded-md">
                      View Profile
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand text-sm uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 skew-x-12 translate-x-20 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Ready to Transform <br/>Your Space?
              </h2>
              <p className="text-gray-600 text-lg max-w-md mb-8">
                Let's collaborate to create a space that tells your story. Schedule a consultation with our design team today.
              </p>
              <button className="bg-dark text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand transition-colors flex items-center group rounded-md">
                Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 border-2 border-dark translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Interior Detail" 
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

