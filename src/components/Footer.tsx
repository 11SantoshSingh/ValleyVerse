import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">Uttarakhand Tourism</h2>
          <p className="text-sm mt-2">Explore the Land of Gods with us!</p>
        </div>

        {/* Middle Nav Links */}
        <div className="flex gap-4 justify-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/testimonials" className="hover:underline">Testimonials</Link>
        </div>

        {/* Right Social Links */}
        <div className="flex justify-end gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
        </div>
      </div>

      <p className="text-center text-sm mt-4 text-gray-400">
        © {new Date().getFullYear()} Uttarakhand Tourism. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
