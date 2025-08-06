const Navbar = () => {
  return (
    <nav className="w-full py-3 md:py-4 px-4 md:px-8 bg-[#1a1a1a] shadow-md flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
      <h1 className="text-xl md:text-2xl font-bold text-[#00ffcc] tracking-wider">GTA.PORTFOLIO</h1>
      <div className="flex space-x-4 md:space-x-6">
        <a href="#home" className="text-white hover:text-[#00ffcc] transition duration-300 text-sm md:text-base">Home</a>
        <a href="#projects" className="text-white hover:text-[#00ffcc] transition duration-300 text-sm md:text-base">Projects</a>
        <a href="#about" className="text-white hover:text-[#00ffcc] transition duration-300 text-sm md:text-base">About</a>
        <a href="#contact" className="text-white hover:text-[#00ffcc] transition duration-300 text-sm md:text-base">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
