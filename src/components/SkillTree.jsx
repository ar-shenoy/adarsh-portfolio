import { motion } from "framer-motion";

const SkillTree = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "🗄️" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Javascript", icon: "⚡" },
        { name: "Java", icon: "☕" }
      ]
    },
    {
      name: "Frameworks",
      icon: "⚙️",
      skills: [
        { name: "Scikit-Learn", icon: "⚛️" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "FastAPI", icon: "🔥" },
        { name: "Streamlit", icon: "🟢" },
        { name: "Matplotlib", icon: "📊" }
      ]
    },
    {
      name: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Linux", icon: "🐧" },
        { name: "Git", icon: "📝" },
        { name: "Streamlit", icon: "☁️" },
        { name: "Jupyter", icon: "📓" },
        { name: "VS Code", icon: "💙" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-4 md:p-8 bg-gray-900/50 rounded-xl md:rounded-2xl border border-gray-700"
    >
      <motion.h2
        variants={categoryVariants}
        className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
      >
        🌳 Skill Tree
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            className="space-y-4 md:space-y-6"
          >
            {/* Category Header */}
            <motion.div
              variants={categoryVariants}
              className="text-center p-3 md:p-4 bg-gray-800/50 rounded-lg md:rounded-xl border border-gray-600"
            >
              <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-yellow-400">{category.name}</h3>
            </motion.div>

            {/* Skills in Category */}
            <div className="space-y-3 md:space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={categoryVariants}
                  className="flex items-center gap-3 bg-gray-800/30 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-600 hover:border-yellow-500 transition-colors duration-300"
                >
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-white text-base md:text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillTree; 