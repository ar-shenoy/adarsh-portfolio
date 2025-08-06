import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

// Import images
import art1 from '../assets/Art1.jpg';
import art2 from '../assets/Art2.jpg';
import art3 from '../assets/Art3.jpg';
import art4 from '../assets/Art4.jpg';
import art5 from '../assets/art5.jpg';
import art6 from '../assets/Art6.jpeg';
import art7 from '../assets/art7.jpg';
import art8 from '../assets/art8.jpg';
import art10 from '../assets/art10.jpg';
import art11 from '../assets/art11.jpg';

// Inline project data with images
const projectsData = [
  {
    title: "House Price Prediction",
    description: "Predict real estate prices using ML and deploy via Flask.",
    tech: ["Python", "Linear Regression", "Flask"],
    status: "Completed",
    year: 2024,
    category: "Machine Learning",
    image: art1,
    longDescription: "A comprehensive ML pipeline for real estate price prediction.",
    features: ["Real-time price predictions", "Interactive web interface"],
    challenges: ["Handling diverse property data", "Optimizing model accuracy"],
    github: "https://github.com/yourusername/house-price-prediction",
    live: "https://house-price-predictor.vercel.app"
  },
  {
    title: "Flight Satisfaction Classifier",
    description: "Classify customer satisfaction using Logistic Regression.",
    tech: ["Python", "Logistic Regression", "Streamlit"],
    status: "Completed",
    year: 2024,
    category: "Data Science",
    image: art2,
    longDescription: "Airline satisfaction analysis tool that processes passenger feedback.",
    features: ["Passenger satisfaction prediction", "Interactive data visualization"],
    challenges: ["Feature engineering for categorical data"],
    github: "https://github.com/yourusername/flight-satisfaction-classifier",
    live: "https://flight-satisfaction.streamlit.app"
  },
  {
    title: "LunarisAI",
    description: "Cycle prediction tool with Random Forest Regressor.",
    tech: ["Random Forest", "Streamlit", "ML Pipeline"],
    status: "Active",
    year: 2024,
    category: "Health Tech",
    image: art3,
    longDescription: "LunarisAI predicts menstrual cycles with high accuracy.",
    features: ["Personalized cycle predictions", "Health insights dashboard"],
    challenges: ["Ensuring data privacy", "Handling irregular patterns"],
    github: "https://github.com/yourusername/lunaris-ai",
    live: "https://lunaris-ai.streamlit.app"
  },
  {
    title: "CerebAI",
    description: "CNN-powered stroke detection using MRI images.",
    tech: ["TensorFlow", "OpenCV", "Flask"],
    status: "In Development",
    year: 2024,
    category: "Medical AI",
    image: art4,
    longDescription: "Medical imaging analysis tool for stroke detection.",
    features: ["Real-time MRI analysis", "Stroke detection algorithms"],
    challenges: ["Medical data validation", "CNN model optimization"],
    github: "https://github.com/yourusername/cereb-ai",
    live: null
  },
  {
    title: "GTA Portfolio Dashboard",
    description: "Interactive portfolio website with GTA-themed design.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    status: "Active",
    year: 2024,
    category: "Web Development",
    image: art5,
    longDescription: "A unique portfolio website inspired by GTA's aesthetic.",
    features: ["GTA-themed animations", "Interactive skill tree"],
    challenges: ["Creating smooth animations", "Optimizing performance"],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Business intelligence dashboard with real-time data visualization.",
    tech: ["Python", "Dash", "Plotly"],
    status: "Completed",
    year: 2023,
    category: "Business Intelligence",
    image: art6,
    longDescription: "Business analytics platform for real-time insights.",
    features: ["Real-time data visualization", "Interactive dashboards"],
    challenges: ["Handling large datasets", "Real-time data processing"],
    github: "https://github.com/yourusername/analytics-dashboard",
    live: "https://analytics-dashboard.herokuapp.com"
  },
  {
    title: "Art Gallery",
    description: "A digital gallery for modern art.",
    tech: ["React", "CSS Grid", "Vite"],
    status: "Completed",
    year: 2023,
    category: "Web Development",
    image: art7,
    longDescription: "A digital gallery showcasing modern art pieces.",
    features: ["Responsive grid layout", "Image lightbox"],
    challenges: ["Image optimization", "Responsive design"],
    github: "https://github.com/yourusername/art-gallery",
    live: null
  },
  {
    title: "AI Art Generator",
    description: "Generate art using AI models.",
    tech: ["Python", "GANs", "Streamlit"],
    status: "Active",
    year: 2024,
    category: "AI Art",
    image: art8,
    longDescription: "Generate unique art pieces using GANs.",
    features: ["AI-generated art", "Downloadable images"],
    challenges: ["GAN training", "Image diversity"],
    github: "https://github.com/yourusername/ai-art-generator",
    live: null
  },
  {
    title: "Portfolio Redesign",
    description: "A fresh redesign of my personal portfolio.",
    tech: ["React", "Tailwind CSS", "Vite"],
    status: "Completed",
    year: 2023,
    category: "Web Development",
    image: art10,
    longDescription: "A modern redesign of my personal portfolio.",
    features: ["Modern UI", "Mobile-first design"],
    challenges: ["UI/UX consistency", "Performance optimization"],
    github: "https://github.com/yourusername/portfolio-redesign",
    live: null
  },
  {
    title: "Photography Showcase",
    description: "A gallery for my best photography.",
    tech: ["React", "CSS", "Vite"],
    status: "Completed",
    year: 2022,
    category: "Photography",
    image: art11,
    longDescription: "A gallery to showcase my best photography work.",
    features: ["High-res images", "Responsive layout"],
    challenges: ["Image compression", "Responsive grid"],
    github: "https://github.com/yourusername/photography-showcase",
    live: null
  }
];
const isMobile = window.innerWidth < 768;
const projectCategories = [
  "All",
  ...Array.from(new Set(projectsData.map(p => p.category)))
];
const projectStatuses = [
  "All",
  ...Array.from(new Set(projectsData.map(p => p.status)))
];

Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  // Filter projects based on category, status, and search term
  useEffect(() => {
    let filtered = projectsData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    // Filter by status
    if (selectedStatus !== "All") {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedStatus, searchTerm]);

  return (
    <div className="p-4 md:p-10 text-white" id="projects">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">💾  Projects</h1>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        {/* Filter Buttons */}
        <div className="space-y-3 md:space-y-4">
          {/* Category Filter */}
          <div className="space-y-2">
            <span className="text-yellow-400 font-semibold text-sm md:text-base">Category:</span>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm border transition-colors ${selectedCategory === category
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-gray-800/50 text-white border-gray-600 hover:border-yellow-500"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-2">
            <span className="text-yellow-400 font-semibold text-sm md:text-base">Status:</span>
            <div className="flex flex-wrap gap-2">
              {projectStatuses.map((status) => (
                <motion.button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm border transition-colors ${selectedStatus === status
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-gray-800/50 text-white border-gray-600 hover:border-yellow-500"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-gray-400 text-xs md:text-sm">
          Showing {filteredProjects.length} of {projectsData.length} projects
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 md:p-6 rounded-lg md:rounded-xl shadow-xl border border-gray-700 hover:border-white cursor-pointer"
            onClick={() => openModal(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px #0ff" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-800" />
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <h2 className="text-lg md:text-2xl font-semibold">{project.title}</h2>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === "Completed" ? "bg-green-500 text-black" :
                project.status === "Active" ? "bg-yellow-500 text-black" :
                  "bg-orange-500 text-black"
                }`}>
                {project.status}
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-gray-700 rounded text-xs">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                  +{project.tech.length - 3} more
                </span>
              )}
            </div>
            <div className="text-xs text-gray-400">
              {project.year} • {project.category}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Mission Briefing"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="p-4 md:p-6 text-white bg-black rounded-lg md:rounded-xl max-w-2xl max-h-[80vh] overflow-y-auto mx-4 md:mx-auto">
            {/* Project Image */}
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover rounded-lg mb-4 border border-gray-800" />
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
              <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${selectedProject.status === "Completed" ? "bg-green-500 text-black" :
                selectedProject.status === "Active" ? "bg-yellow-500 text-black" :
                  "bg-orange-500 text-black"
                }`}>
                {selectedProject.status}
              </span>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
              <div>
                <span className="text-gray-400">Category:</span>
                <span className="ml-2 text-yellow-400">{selectedProject.category}</span>
              </div>
              <div>
                <span className="text-gray-400">Year:</span>
                <span className="ml-2 text-yellow-400">{selectedProject.year}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">Description</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            {/* Technologies */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="px-2 md:px-3 py-1 bg-gray-700 rounded-full text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-yellow-400">Challenges Overcome</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-center text-sm md:text-base"
                >
                  📁 GitHub
                </a>
              )}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded transition-colors text-center text-sm md:text-base"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>

            {/* Close Button */}
            <button
              className="w-full bg-red-600 px-4 py-2 rounded hover:bg-red-800 transition-colors text-sm md:text-base"
              onClick={closeModal}
            >
              Close Mission
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;