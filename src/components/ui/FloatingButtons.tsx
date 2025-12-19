import { useState } from 'react';
import { MessageCircle, Phone, MessageSquare, X, Send, Instagram, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Styliq Interiors.", sender: 'bot' },
    { text: "I'm here to help you start your design journey. Would you like to schedule a consultation?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const whatsappNumber = "1234567890"; // Replace with actual number

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    const userMessage = inputValue;
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thank you for your message. Our team will get back to you shortly.";
      
      if (userMessage.toLowerCase().includes('consultation') || userMessage.toLowerCase().includes('book')) {
        botResponse = "Great! You can book a consultation through our Contact page or call us directly.";
      } else if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
        botResponse = "Our pricing varies based on the project scope. Let's discuss your requirements in detail.";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 bg-dark border border-white/10 shadow-2xl z-50 overflow-hidden rounded-lg flex flex-col"
          >
            <div className="bg-brand p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Styliq Assistant</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="h-80 p-4 overflow-y-auto bg-dark-lighter space-y-4 flex flex-col">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${msg.sender === 'user' ? 'bg-brand text-white' : 'bg-white/5 border border-white/10 text-gray-300'} p-3 rounded-lg max-w-[85%] text-sm leading-relaxed`}>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-dark border-t border-white/10 shrink-0">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..." 
                  className="flex-1 bg-transparent border-b border-white/20 px-2 py-2 text-sm text-white focus:outline-none focus:border-brand transition-colors placeholder-gray-600"
                />
                <button onClick={handleSend} className="text-brand hover:text-white transition-colors p-2">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        {/* Google Maps Button */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Styliq+Interiors"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-4 shadow-lg hover:shadow-blue-500/20 transition-shadow flex items-center justify-center group rounded-full"
        >
          <MapPin size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Instagram Button */}
        <motion.a
          href="https://instagram.com/styliqinteriors/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-4 shadow-lg hover:shadow-[#dc2743]/20 transition-shadow flex items-center justify-center group rounded-full"
        >
          <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 shadow-lg hover:shadow-[#25D366]/20 transition-shadow flex items-center justify-center group rounded-full"
        >
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href="tel:+1234567890"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-dark p-4 shadow-lg hover:shadow-white/20 transition-shadow flex items-center justify-center group rounded-full"
        >
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Chat Toggle Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brand text-white p-4 shadow-lg hover:shadow-brand/20 transition-shadow flex items-center justify-center group rounded-full"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />}
        </motion.button>
      </div>
    </>
  );
};

export default FloatingButtons;
