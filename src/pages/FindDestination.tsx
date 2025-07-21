import { useState } from 'react';
import axios from 'axios';

export default function FindDestination() {
  const [formData, setFormData] = useState({
    interest: '',
    age_group: '',
    weather: '',
    duration: '',
  });

  const [destination, setDestination] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Sending request:", formData);
      const res = await axios.post('http://127.0.0.1:5000/recommend', formData);
      setDestination(res.data.destination);
    } catch (err: any) {
      console.error("Error during API call:", err);
      setDestination('Error: Could not fetch destination.');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl text-green-900 font-bold text-center mb-10 bg-white py-4 rounded">
        Find Your Destination
      </h1>

      <div className="max-w-6xl mx-auto flex gap-8">
        {/* Left - Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <label className="block">
            <span className="text-green-800 font-semibold">Interest</span>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select...</option>
              <option value="Adventure">Adventure</option>
              <option value="Nature">Nature</option>
              <option value="Pilgrimage">Pilgrimage</option>
            </select>
          </label>

          <label className="block">
            <span className="text-green-800 font-semibold">Age Group</span>
            <select
              name="age_group"
              value={formData.age_group}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select...</option>
              <option value="18-30">18-30</option>
              <option value="31-50">31-50</option>
              <option value="51+">51+</option>
            </select>
          </label>

          <label className="block">
            <span className="text-green-800 font-semibold">Weather Preference</span>
            <select
              name="weather"
              value={formData.weather}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select...</option>
              <option value="Cold">Cold</option>
              <option value="Hot">Hot</option>
              <option value="Moderate">Moderate</option>
            </select>
          </label>

          <label className="block">
            <span className="text-green-800 font-semibold">Trip Duration</span>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select...</option>
              <option value="1-3">1-3 days</option>
              <option value="4-5">4-5 days</option>
              <option value="6-7">6-7 days</option>
            </select>
          </label>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition"
          >
            Recommend
          </button>
        </form>

        {/* Right - Output Section */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          {destination ? (
            <div className="text-xl text-green-700 font-medium text-center">
              Recommended Destination: <br />
              <span className="text-3xl font-bold">{destination}</span>
            </div>
          ) : (
            <p className="text-green-600 text-center">
              Your recommended destination will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
