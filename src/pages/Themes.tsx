import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Modern Interior', 'Classic Interior', 'Neo-Classic Interior', 'Bohemian (Boho) Interior'];

const themes = [
  {
    id: 1,
    title: 'Modern Interior',
    category: 'Modern Interior',
    location: 'The Vibe: Sophisticated, calm, functional',
    year: 'Key: Open plans · Neutrals · Natural materials',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Classic Interior',
    category: 'Classic Interior',
    location: 'The Vibe: Warm, luxurious, refined',
    year: 'Key: Symmetry · Rich details · Dark woods',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Neo-Classic Interior',
    category: 'Neo-Classic Interior',
    location: 'The Vibe: Stately yet breathable',
    year: 'Key: Soft palettes · Modern finishes',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Bohemian (Boho) Interior',
    category: 'Bohemian (Boho) Interior',
    location: 'The Vibe: Cozy, vibrant, expressive',
    year: 'Key: Layered textures · Global accents',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop'
  }
];

const Themes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredThemes = activeCategory === 'All' 
    ? themes 
    : themes.filter(p => p.category === activeCategory);

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
                    <p className="text-gray-500 text-sm mb-1">{theme.location}</p>
                    <p className="text-gray-500 text-sm">{theme.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center">
          <button className="bg-transparent border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors inline-flex items-center group rounded-md">
            Explore More Themes <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Themes;
