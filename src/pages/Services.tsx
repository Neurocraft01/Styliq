import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, Building2, ArrowRight, Palette, Ruler } from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Home,
      title: 'Full Home Residential Interiors',
      description: 'Turnkey solutions for homeowners. From luxury apartments to private villas, we manage everything from conceptualization to the final styling of your living spaces.',
      features: ['Concept to Styling', 'Material Selection', 'Theme Alignment', 'On-site Execution']
    },
    {
      icon: Building2,
      title: 'Full Commercial Interiors',
      description: 'Results-driven design for offices, retail outlets, and hospitality spaces. We focus on brand identity, employee productivity, and customer experience.',
      features: ['Office Layouts', 'Retail & Hospitality', 'Brand Integration', 'Lighting Design']
    },
    {
      icon: Palette,
      title: 'Design Consultancy',
      description: 'Expert advice for clients who need professional direction. We provide layout optimization, material selection, and aesthetic guidance to bring your vision to life.',
      features: ['Layout Optimization', 'Material Selection', 'Aesthetic Guidance', 'Theme Roadmapping']
    },
    {
      icon: Ruler,
      title: 'Realistic 3D Renders & Designs',
      description: 'Visualize your space before a single brick is laid. Our high-fidelity 3D renderings let you experience textures, lighting, and scale with photographic realism.',
      features: ['High-fidelity Renders', 'Lighting Simulation', 'Photographic Realism', 'Scale Accuracy']
    }
  ];

  const process = [
    { step: "01", title: "Site Measurement & Rapid Quotation", desc: "Precise technical measurements of your site followed by a comprehensive quotation within 2–3 days—clear, honest pricing with no surprises." },
    { step: "02", title: "Drafting & 3D Visualization", desc: "Detailed architectural drafts and realistic 3D designs so you can virtually walk through your future space and refine with confidence." },
    { step: "03", title: "Site Analysis Report (SAR)", desc: "Once designs are finalized, we generate a standardized SAR—your master technical guide that ensures design intent matches execution on site." },
    { step: "04", title: "Certified Execution & Transparency", desc: "We work with certified vendors, maintain full transparency on budgets and milestones, and supervise quality at every stage." },
    { step: "05", title: "Structured Payment Schedule", desc: "Milestone-based payments aligned to project phases to ensure financial clarity and steady progress." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-dark text-white overflow-hidden">
      {/* Parallax Hero */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Services Hero" 
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
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Design Solutions</span>
          </motion.h1>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-dark-lighter p-6 border border-white/5 hover:border-brand/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 relative overflow-hidden rounded-lg"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <service.icon size={120} className="text-brand" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white transition-colors duration-500 text-brand">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors">
                        <span className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-lighter border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-brand text-sm font-bold tracking-[0.2em] uppercase mb-2 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Design Process</h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {process.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-dark p-8 border border-white/5 text-center group hover:-translate-y-2 transition-transform duration-500 rounded-lg"
                >
                  <div className="w-16 h-16 bg-dark border-2 border-brand text-brand font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does a typical project take?", a: "Timelines vary based on scope. A single room might take 2-4 weeks, while a full home renovation can take 3-6 months. We provide a detailed timeline during the consultation phase." },
              { q: "Do you work with my existing furniture?", a: "Absolutely! We love incorporating cherished pieces into new designs to create a space that feels uniquely yours. We can also refurbish or reupholster items to fit the new aesthetic." },
              { q: "What is your design style?", a: "While we specialize in modern luxury and contemporary aesthetics, we are versatile designers. Our primary goal is to interpret your personal style and elevate it through professional design principles." },
              { q: "How do you handle budgets?", a: "We believe in transparency. We establish a clear budget at the beginning of the project and track all expenses. We'll guide you on where to splurge and where to save to get the best value." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-dark-lighter p-8 border border-white/5 hover:border-brand/30 transition-colors rounded-lg"
              >
                <h4 className="font-bold text-xl text-white mb-3 flex items-start">
                  <span className="text-brand mr-3 text-2xl leading-none">•</span>
                  {faq.q}
                </h4>
                <p className="text-gray-400 leading-relaxed pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Have a project in mind?</h2>
          <button className="bg-white text-brand px-10 py-4 font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-colors inline-flex items-center group rounded-md">
            Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
