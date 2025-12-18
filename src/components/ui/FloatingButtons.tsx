import { useState } from 'react';
import { MessageCircle, Phone, MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const whatsappNumber = "1234567890"; // Replace with actual number

  return (
    <>
      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 bg-dark border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-brand p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Styliq Assistant</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="h-80 p-4 overflow-y-auto bg-dark-lighter space-y-4">
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 text-gray-300 p-4 max-w-[85%] text-sm leading-relaxed">
                  <p className="mb-2">Hello! Welcome to Styliq Interiors.</p>
                  <p>I'm here to help you start your design journey. Would you like to schedule a consultation?</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-dark border-t border-white/10">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 bg-transparent border-b border-white/20 px-2 py-2 text-sm text-white focus:outline-none focus:border-brand transition-colors placeholder-gray-600"
                />
                <button className="text-brand hover:text-white transition-colors p-2">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 shadow-lg hover:shadow-[#25D366]/20 transition-shadow flex items-center justify-center group"
        >
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href="tel:+1234567890"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-dark p-4 shadow-lg hover:shadow-white/20 transition-shadow flex items-center justify-center group"
        >
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brand text-white p-4 shadow-lg hover:shadow-brand/20 transition-shadow flex items-center justify-center group"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingButtons;
