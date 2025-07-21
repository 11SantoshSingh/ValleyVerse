import backgroundImg from "../assets/bakground.jpg"; // Import the image

const Hero = () => {
  return (
    <section
      className="h-screen bg-green-200 bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`, // Use the imported image
        backgroundBlendMode: "multiply", // Blend the image with the green background
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">Discover Beautiful Places</h1>
        <p className="text-lg md:text-xl mb-6 text-green-800">
          Make your vacation unforgettable with our exclusive tour packages.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
