import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold text-green-200">Uttarakhand Tourism</h2>
          <p className="text-sm mt-2 text-green-100">Explore the Land of Gods with us!</p>
        </div>

        {/* Middle Nav Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/about" className="hover:text-green-300 transition">About</Link>
          <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
          <Link to="/testimonials" className="hover:text-green-300 transition">Testimonials</Link>
        </div>

        {/* Right Social Links */}
        <div className="flex justify-end gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl hover:text-green-400 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl hover:text-green-400 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl hover:text-green-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-sm mt-4 text-green-200">
        © {new Date().getFullYear()} Uttarakhand Tourism. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
