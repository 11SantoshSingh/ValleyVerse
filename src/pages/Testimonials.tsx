const Testimonials = () => {
    const reviews = [
      {
        name: "Anjali Sharma",
        message: "The Valley of Flowers was breathtaking! Uttarakhand is heaven on earth.",
        location: "Delhi",
      },
      {
        name: "Raj Mehta",
        message: "Clean, calm, and spiritual! Loved visiting Kedarnath with my family.",
        location: "Mumbai",
      },
      {
        name: "Priya Chauhan",
        message: "Great people and great food! I enjoyed every moment in Nainital.",
        location: "Jaipur",
      },
    ];
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Testimonials</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-xl">
              <p className="text-gray-700 italic">“{review.message}”</p>
              <div className="mt-4 text-right">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  