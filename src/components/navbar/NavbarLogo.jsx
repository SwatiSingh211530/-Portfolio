import { FaStar } from "react-icons/fa"; // Optional icon

const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer transition-all duration-300">
      
      {/* For Desktop */}
      <h1 className="text-3xl font-extrabold text-cyan-400 hidden md:block tracking-wide relative">
        Swati Singh
        {/* Underline gradient */}
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
      </h1>

      {/* For Mobile */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent md:hidden tracking-tight">
        SS
      </h1>

      {/* Optional Sparkle/Icon */}
      <FaStar className="text-yellow-400 text-xl group-hover:rotate-12 transition-transform duration-300 hidden sm:inline" />
    </div>
  );
};

export default NavbarLogo;
