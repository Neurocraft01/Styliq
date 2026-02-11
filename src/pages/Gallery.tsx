// Gallery can reuse the Projects component logic or be a simpler grid
// For now, let's reuse the Projects component structure but maybe with different data or layout if needed.
// Since the requirement is "In project and gallery section the content should be in categories", 
// it sounds like they are very similar. I'll just re-export Projects as Gallery for now or create a similar one.
// Let's create a similar one to allow for future customization.

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const categories = ['All', 'Living Room', 'Dining', 'Bedroom', 'Office', 'Details'];

const galleryImages = [
  { id: 1, category: 'Living Room', src: '/Gallery1.jpeg' },
  { id: 2, category: 'Office', src: '/Gallery2.jpeg' },
  { id: 3, category: 'Details', src: '/Gallery3.jpeg' },
  { id: 4, category: 'Bedroom', src: '/Gallery4.jpeg' },
  { id: 5, category: 'Office', src: '/Gallery5.jpeg' },
  { id: 6, category: 'Details', src: '/Gallery6.jpeg' },
  { id: 7, category: 'Dining', src: '/Gallery7.jpeg' },
  { id: 8, category: 'Living Room', src: '/Gallery8.jpeg' },
  { id: 9, category: 'Bedroom', src: '/Gallery9.jpeg' },
  { id: 10, category: 'Details', src: '/Gallery10.jpeg' },
  { id: 11, category: 'Living Room', src: '/Gallery11.jpeg' },
  { id: 12, category: 'Dining', src: '/Gallery12.jpeg' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-dark text-white overflow-hidden">
      {/* Parallax Hero */}
      <div className="relative h-[50vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Gallery Hero" 
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
            Inspiration
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">Stories</span>
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all border rounded-full ${
                activeCategory === cat 
                  ? 'bg-brand text-white border-brand' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-brand hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.id}
                className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={`Gallery ${img.category}`} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ZoomIn className="text-white w-10 h-10 mx-auto mb-2" />
                    <span className="text-brand text-xs font-bold tracking-widest uppercase">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
