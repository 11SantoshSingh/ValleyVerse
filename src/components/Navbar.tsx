import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <Link to="/">Valley Verse</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/gallery" className="hover:text-blue-300 transition">Gallery</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/destinations" className="hover:text-blue-300 transition">Destinations</Link>
          <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
          <Link to="/testimonials" className="hover:text-blue-300 transition">Testimonials</Link>
          <Link to="/login" className="hover:text-green-400 transition">Login</Link>
          <Link to="/register" className="hover:text-green-400 transition">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-black px-3 py-2 rounded"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu from Left */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-black-400 text-white p-6 flex flex-col gap-4 z-40 shadow-xl transition-transform duration-300 ease-in-out">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl font-bold mb-4"
          >
            ×
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black">Home</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-black">Gallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-black">About</Link>
          <Link to="/destinations" onClick={() => setMenuOpen(false)} className="hover:text-black">Destinations</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-black">Contact</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-black">Testimonials</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
