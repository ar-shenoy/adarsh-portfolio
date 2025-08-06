import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen z-10 flex items-center justify-center"
      id="home"
    >
      <div className="text-center text-white px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          ADARSH R SHENOY
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 px-2 md:px-0">
          <Typewriter
            words={[
              "Heyy there !",
              "Closer",
              "You're under survillence"
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        {/* CTA Buttons */}
        <div className="mt-8 md:mt-12 space-y-4">
          <div className="text-sm md:text-base text-gray-300 px-4 md:px-0">
            <p className="mb-4">Ready to explore my projects and skills?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
                onClick={handleViewProjects}
              >
                View Projects
              </button>
              <a
                  href="/Adarsh_R_Shenoy_Resume.pdf"
                download
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  Download CV
            </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
