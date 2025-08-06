import { motion } from "framer-motion";

const CONTACTS = [
  {
    label: "Email",
    value: "Mail me",
    icon: "📧",
    link: "mailto:adarshrshenoy1@gmail.com"
  },
  {
    label: "Phone",
    value: "Phone Number",
    icon: "📱",
    link: "tel:+918762867396"
  },
  {
    label: "GitHub",
    value: "ar-shenoy",
    icon: "🐙",
    link: "https://github.com/ar-shenoy?tab=repositories"
  },
  {
    label: "LinkedIn",
    value: "Adarsh R Shenoy",
    icon: "💼",
    link: "https://www.linkedin.com/in/ar-shenoy"
  },
  {
    label: "Instagram",
    value: "ar_shenoy",
    icon: "📸",
    link: "https://instagram.com/ar_shenoy"
  }
];

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative w-full min-h-[80vh] overflow-hidden text-white py-12 px-4 md:p-10 flex flex-col items-center justify-center"
    id="contact"
  >
    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">📲 Conatact </h1>
    {/* 🔲 Content Layer */}
    <div className="relative z-10 w-full max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        📞 Contact
      </h1>
      
      {CONTACTS.map((item) => (
        <a
          key={item.label}
          href={item.link}
          target={item.link.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gray-900/60 border border-gray-700 rounded-xl px-5 py-4 hover:border-yellow-400 transition-colors group"
        >
          <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
          <span className="font-semibold text-lg md:text-xl text-yellow-300 w-32">{item.label}</span>
          <span className="text-white text-base md:text-lg truncate">{item.value}</span>
        </a>
      ))}
    </div>
  </motion.div>
);

export default Contact;
