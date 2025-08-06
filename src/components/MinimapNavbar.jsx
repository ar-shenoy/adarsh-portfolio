import { Link } from "react-scroll";

const navItems = [
  { id: "home", label: "Home", offset: -100 },
  { id: "about", label: "About", offset: -100 },
  { id: "projects", label: "Projects", offset: -100 },
  { id: "contact", label: "Contact", offset: -200 }, // 👈 Make it more negative
];

const ScrollNavbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur border border-yellow-400 text-yellow-300 rounded-full px-6 py-2 shadow-lg flex gap-4 text-sm md:text-base">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          smooth={true}
          duration={800}
          offset={item.offset}
          spy={true}
          hashSpy={true}
          isDynamic={true}
          className="cursor-pointer hover:text-white transition-colors"
          activeClass="font-bold underline"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default ScrollNavbar;
