
import Navbar from "./Navbar";
function Header() {
  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex items-center justify-around py-4">
        <a href="#" className="font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
    </>
  );
}

export default Header;
