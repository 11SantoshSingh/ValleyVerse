

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (

    <section id="about" className="bg-white py-16 px-4">
      
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">About Uttarakhand</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Uttarakhand, often referred to as the "Land of the Gods" (Dev Bhoomi), is known for its breathtaking landscapes,
          majestic mountains, spiritual sites, and vibrant culture. From the peaceful banks of the Ganga in Rishikesh
          to the snow-capped peaks of Kedarnath and the serene beauty of Nainital, Uttarakhand offers a diverse range of
          experiences for every traveler.
        </p>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          Whether you're seeking adventure, spirituality, or tranquility, Uttarakhand welcomes you with open arms. Plan
          your journey and discover the unmatched charm of this Himalayan paradise.
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default About;
