import { motion } from 'framer-motion';
import { Instagram, Heart, ExternalLink } from 'lucide-react';

const INSTAGRAM_URL = 'https://instagram.com/styliqinteriors/';

const posts = [
  { src: '/Gallery1.jpeg',  alt: 'Interior design project' },
  { src: '/moderntheme1.jpeg', alt: 'Modern interior theme' },
  { src: '/classicaltheme1.jpeg', alt: 'Classic interior theme' },
  { src: '/Gallery5.jpeg', alt: 'Interior design project' },
  { src: '/neoclassicaltheme1.jpeg', alt: 'Neo-classic interior theme' },
  { src: '/bohemiantheme1.jpg', alt: 'Bohemian interior theme' },
  { src: '/Gallery9.jpeg', alt: 'Interior design project' },
  { src: '/Gallery12.jpeg', alt: 'Interior design project' },
  { src: '/Gallery14.jpeg', alt: 'Interior design project' },
];

const InstagramFeed = () => {
  return (
    <section className="bg-dark py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
              <div className="bg-dark rounded-full p-2">
                <Instagram size={28} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">Follow Our Journey</h3>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand text-sm font-medium hover:underline tracking-wide"
              >
                @styliqinteriors
              </a>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-widest shrink-0"
          >
            <Instagram size={18} />
            Follow Us
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-1.5 lg:gap-2">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`relative group overflow-hidden rounded-lg aspect-square block
                ${idx === 0 ? 'col-span-2 row-span-2 hidden lg:block' : ''}
              `}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <Heart size={22} className="text-white fill-white" />
                <ExternalLink size={16} className="text-white/70" />
              </div>

              {/* Instagram gradient border effect on hover */}
              <div className="absolute inset-0 rounded-lg ring-0 group-hover:ring-2 ring-pink-500/60 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">
            See the full portfolio of our work on Instagram
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border border-white/20 hover:border-brand hover:text-brand transition-all duration-300 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
          >
            <Instagram size={16} />
            View All Posts on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
