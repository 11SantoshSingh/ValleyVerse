import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white p-4 relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold">
          <Link to="/">Valley Verse</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/gallery" className="hover:text-green-300 transition">Gallery</Link>
          <Link to="/about" className="hover:text-green-300 transition">About</Link>
          <Link to="/destinations" className="hover:text-green-300 transition">Destinations</Link>
          <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
          <Link to="/testimonials" className="hover:text-green-300 transition">Testimonials</Link>
          <Link to="/login" className="hover:text-green-400 transition">Login</Link>
          <Link to="/register" className="hover:text-green-400 transition">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-green-700 text-white px-3 py-2 rounded"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu from Left */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-green-700 text-white p-6 flex flex-col gap-4 z-40 shadow-xl transition-transform duration-300 ease-in-out">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl font-bold mb-4"
          >
            ×
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Home</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Gallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-green-200">About</Link>
          <Link to="/destinations" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Destinations</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Contact</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-green-200">Testimonials</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-green-400">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="hover:text-green-400">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
