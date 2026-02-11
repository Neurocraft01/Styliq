import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const categories = ['All', 'Modern Interior', 'Classic Interior', 'Neo-Classic Interior', 'Bohemian (Boho) Interior'];

const themesData = [
  {
    id: 1,
    title: 'Modern Interior',
    subtitle: 'The Art of Simplicity and Function',
    category: 'Modern Interior',
    tagline: 'The Vibe: Sophisticated, calm, functional',
    summary: 'Key: Open plans · Neutrals · Natural materials',
    description: 'Modern design is rooted in the "less is more" philosophy. It focuses on clean lines, geometric shapes, and a clutter-free environment. This theme is perfect for those who appreciate an organized, sleek, and airy living space.',
    keyFeatures: ['Open floor plans', 'Neutral color palettes', 'Natural materials like wood, glass, and metal'],
    vibe: 'Sophisticated, calm, and effortlessly functional',
    image: '/moderntheme1.jpeg',
    galleryImages: ['/moderntheme1.jpeg', '/moderntheme2.jpeg', '/moderntheme3.jpeg']
  },
  {
    id: 2,
    title: 'Classic Interior',
    subtitle: 'Timeless Elegance and Grandeur',
    category: 'Classic Interior',
    tagline: 'The Vibe: Warm, luxurious, refined',
    summary: 'Key: Symmetry · Rich details · Dark woods',
    description: 'Classic interior design is inspired by 18th and 19th-century European styles. It is a structured and noble aesthetic that prioritizes symmetry, balance, and rich details. This theme is ideal for clients who want a home that feels prestigious and enduring.',
    keyFeatures: ['Intricate moldings', 'Dark wood furniture', 'Rich fabrics like velvet or silk', 'Central focal point (like a fireplace or chandelier)'],
    vibe: 'Warm, luxurious, and refined',
    image: '/classicaltheme1.jpeg',
    galleryImages: ['/classicaltheme1.jpeg', '/classicaltheme2.jpeg', '/classicaltheme3.jpeg', '/classicaltheme4.jpeg']
  },
  {
    id: 3,
    title: 'Neo-Classic Interior',
    subtitle: 'The Perfect Blend of Heritage and Modernity',
    category: 'Neo-Classic Interior',
    tagline: 'The Vibe: Stately yet breathable',
    summary: 'Key: Soft palettes · Modern finishes',
    description: 'Neo-classic design is a contemporary interpretation of classical elegance. It maintains the grace and symmetry of traditional decor but strips away the heavy ornamentation in favor of a cleaner, more updated look. It is the bridge between the old world and the new.',
    keyFeatures: ['High ceilings', 'Soft color palettes (creams, grays, and muted blues)', 'Mix of traditional silhouettes with modern finishes'],
    vibe: 'Stately yet breathable; formal yet comfortable',
    image: '/neoclassicaltheme1.jpeg',
    galleryImages: ['/neoclassicaltheme1.jpeg', '/neoclassicaltheme2.jpeg', '/neoclassicaltheme3.jpeg', '/neoclassicaltheme4.jpeg']
  },
  {
    id: 4,
    title: 'Bohemian (Boho) Interior',
    subtitle: 'Creative, Spirited, and Uniquely Yours',
    category: 'Bohemian (Boho) Interior',
    tagline: 'The Vibe: Cozy, vibrant, expressive',
    summary: 'Key: Layered textures · Global accents',
    description: 'Bohemian design is for the rule-breakers and the adventurers. It is a "maximalist" approach that embraces layers of texture, pattern, and color. This theme celebrates individuality and creates a relaxed, lived-in atmosphere that feels deeply personal.',
    keyFeatures: ['Indoor greenery', 'Eclectic furniture', 'Layered rugs', 'Global-inspired accents (macramé, rattan, and bold prints)'],
    vibe: 'Cozy, vibrant, and artistically expressive',
    image: '/bohemiantheme1.jpg',
    galleryImages: ['/bohemiantheme1.jpg', '/bohemiantheme2.webp', '/bohemiantheme3.jpg', '/bohemiantheme4.avif']
  }
];

const Themes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState<typeof themesData[0] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredThemes = activeCategory === 'All' 
    ? themesData 
    : themesData.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-dark text-white overflow-hidden">
      {/* Theme Detail Modal */}
      <AnimatePresence>
        {selectedTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTheme(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-dark-lighter border border-white/10 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTheme(null)}
                className="absolute top-4 right-4 z-10 bg-brand text-white p-2 rounded-full hover:bg-brand-dark transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <span className="text-brand text-sm font-bold tracking-[0.2em] uppercase mb-2 block">{selectedTheme.category}</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">{selectedTheme.title}</h2>
                  <p className="text-2xl text-gray-400 italic mb-6">{selectedTheme.subtitle}</p>
                  <p className="text-lg text-gray-300 leading-relaxed">{selectedTheme.description}</p>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedTheme.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg aspect-video group">
                      <img 
                        src={img} 
                        alt={`${selectedTheme.title} ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-brand">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedTheme.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2 shrink-0"></span>
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Vibe */}
                <div className="bg-dark p-6 rounded-lg border border-brand/30 mb-8">
                  <h3 className="text-xl font-serif font-bold mb-2 text-brand">The Vibe</h3>
                  <p className="text-gray-300 text-lg">{selectedTheme.vibe}</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-400 mb-6 text-lg">Every great design starts with a conversation. Let us help you choose the theme that best fits your lifestyle and aspirations.</p>
                  <a href="/contact" className="inline-block bg-brand text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors rounded-md">
                    Book a Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Parallax Hero */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Themes Hero" 
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
            Themes We Provide
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Signature Themes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We believe that a home is more than just a structure; it is a canvas of your personality. Explore our signature themes and find the one that resonates with your vision.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all border rounded-md ${
                activeCategory === cat 
                  ? 'bg-brand text-white border-brand' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-brand hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Themes Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredThemes.map((theme) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={theme.id}
                className="group cursor-pointer"
                onClick={() => setSelectedTheme(theme)}
              >
                <div className="relative overflow-hidden mb-6 aspect-video rounded-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                    <button className="border border-white text-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-dark transition-colors rounded-md">
                      View Theme
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-brand/50 transition-colors duration-500">
                  <div>
                    <span className="text-brand text-xs font-bold tracking-widest uppercase mb-2 block">{theme.category}</span>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-brand transition-colors duration-300">{theme.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm mb-1">{theme.tagline}</p>
                    <p className="text-gray-500 text-sm">{theme.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-8 text-lg">Ready to transform your space? Every great design starts with a conversation.</p>
          <a href="/contact" className="inline-block bg-brand text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors rounded-md">
            Book a Consultation <ArrowRight className="inline ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Themes;
