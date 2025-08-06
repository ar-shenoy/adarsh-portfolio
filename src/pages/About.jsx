import { motion } from "framer-motion";
import SkillTree from "../components/SkillTree";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white" id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="relative z-10 p-4 md:p-10 min-h-screen"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          🧠 About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Left: Mission & Vision */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">🚀 Mission Statement</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate AI developer building futuristic tools like CerebAI and LunarisAI.
                This dashboard showcases my journey, skills, and vision for the future of technology.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">🎯 Vision</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Creating intelligent solutions that bridge the gap between human potential and artificial intelligence.
                Every project is a step toward a more connected and intelligent world.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Skills + Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <SkillTree />

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">📈 Stats</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Projects Completed", value: "15+", icon: "🎯" },
                  { label: "Technologies", value: "12+", icon: "🛠️" },
                  { label: "Language (s)", value: "8+", icon: "🗣️" },
                  { label: "MSFS Pilot", value: "100 hrs+", icon: "👨🏻‍✈️" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={statsVariants}
                    className="text-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: Current Focus */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 text-center">🎯 Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "AI Development", description: "Studying and building next-gen AI tools", icon: "🤖" },
              { title: "Machine Learning", description: "Learning and building advanced ML algorithms", icon: "🧠" },
              { title: "Healthcare Projects", description: "Learning and building projects helping healthcare sector", icon: "⚕️" },
            ].map((focus) => (
              <motion.div
                key={focus.title}
                variants={itemVariants}
                className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{focus.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{focus.title}</h3>
                <p className="text-base text-gray-300">{focus.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
