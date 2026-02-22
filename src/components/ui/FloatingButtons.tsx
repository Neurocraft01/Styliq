import { useState } from 'react';
import { MessageCircle, Phone, MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Styliq Interiors. 👋", sender: 'bot' },
    { text: "I can help you with our themes, services, pricing, location, and booking. What would you like to know?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const whatsappNumber = "917447415182";

  const getBotResponse = (msg: string): string => {
    const m = msg.toLowerCase();

    if (m.includes('theme') || m.includes('style') || (m.includes('design') && !m.includes('residential'))) {
      return "We offer 4 signature themes:\n\n1. Modern Interior – Clean lines, neutrals & open plans\n2. Classic Interior – Symmetry, rich details & dark woods\n3. Neo-Classic Interior – Heritage meets modernity\n4. Bohemian (BOHO) Interior – Layered textures & global accents\n\nVisit our Themes page to explore each one!";
    }
    if (m.includes('modern') && !m.includes('neo')) {
      return "Modern Interior – Rooted in 'less is more'. Clean lines, geometric shapes, neutral palettes, and natural materials like wood, glass & metal. Perfect for a sleek, airy, clutter-free living space.";
    }
    if ((m.includes('classic') || m.includes('classical')) && !m.includes('neo')) {
      return "Classic Interior – Inspired by 18th/19th-century European styles. Symmetry, intricate moldings, dark woods, rich fabrics (velvet/silk), and a central focal point like a chandelier or fireplace.";
    }
    if (m.includes('neo') || m.includes('neoclassic') || m.includes('neo-classic')) {
      return "Neo-Classic Interior – A contemporary interpretation of classical elegance. High ceilings, soft palettes (creams, grays, muted blues), and a mix of traditional silhouettes with modern finishes.";
    }
    if (m.includes('boho') || m.includes('bohemian')) {
      return "Bohemian (BOHO) Interior – For creative souls! Layered textures, patterns & colors. Indoor greenery, eclectic furniture, layered rugs, macramé, rattan, and bold prints. Truly uniquely yours.";
    }
    if (m.includes('service') || m.includes('what do you') || m.includes('offer')) {
      return "STYLIQ Interiors offers:\n• Residential Design – Tailored homes that tell your story\n• Commercial Spaces – Inspiring workplaces for modern businesses\n• Architectural Planning – Structural precision meets aesthetic beauty\n\nWe are the region's first theme-based interior studio!";
    }
    if (m.includes('price') || m.includes('cost') || m.includes('rate') || m.includes('budget') || m.includes('charge')) {
      return "Our pricing varies based on the project scope, theme, and space size. We'd love to give you a detailed quote after understanding your needs. Book a free consultation or call us at 7447415182.";
    }
    if (m.includes('consul') || m.includes('book') || m.includes('appointment') || m.includes('meeting')) {
      return "Book a free consultation:\n📞 Call: 7447415182 or 8805500590\n📧 Email: istyliq@gmail.com\n💬 WhatsApp: tap the green button below\n🌐 Or use the Contact page form!";
    }
    if (m.includes('contact') || m.includes('phone') || m.includes('number') || m.includes('call') || m.includes('email') || m.includes('mail')) {
      return "📞 Phone: 7447415182 / 8805500590\n📧 Email: istyliq@gmail.com\n🕐 Hours: Mon–Fri 9AM–6PM, Sat 10AM–2PM\n\nYou can also reach us via WhatsApp using the green button below!";
    }
    if (m.includes('address') || m.includes('location') || m.includes('where') || m.includes('office') || m.includes('studio') || m.includes('visit') || m.includes('map') || m.includes('direction')) {
      return "📍 Near Laxmi Sweets, Yashwantrao Chavan Road,\nPimpri Colony, Pune – 411018\n\n🗺️ https://maps.app.goo.gl/9QwaAzt7pmssKCeN7\n\n🕐 Mon–Fri 9AM–6PM, Sat 10AM–2PM";
    }
    if (m.includes('hour') || m.includes('timing') || m.includes('open') || m.includes('time') || m.includes('schedule')) {
      return "🕐 Working Hours:\nMon – Fri: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed\n\nCall 7447415182 to confirm availability.";
    }
    if (m.includes('about') || m.includes('who are') || m.includes('company') || m.includes('styliq') || m.includes('experience') || m.includes('year')) {
      return "STYLIQ Interiors is the region's first theme-based interior design studio with 15+ years of excellence. We blend aesthetic innovation with functional excellence — every fabric, finish, and fixture speaks the same visual language.";
    }
    if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('good morning') || m.includes('good afternoon')) {
      return "Hello! 😊 How can I help you today? Ask me about:\n• Interior design themes\n• Services & pricing\n• Booking a consultation\n• Our Pune studio location";
    }
    if (m.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask anything else. We'd love to help you create your dream space!";
    }
    return "Thank you for your message! For detailed assistance:\n📞 7447415182 / 8805500590\n📧 istyliq@gmail.com\n\nOr visit our Contact page to send us a message directly.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    const userMessage = inputValue;
    setInputValue("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: getBotResponse(userMessage), sender: 'bot' }]);
    }, 600);
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
                    <p className="whitespace-pre-line">{msg.text}</p>
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
          href="tel:+917447415182"
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
