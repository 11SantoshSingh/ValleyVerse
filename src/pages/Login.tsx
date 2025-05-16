import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/login`,
      { email, password }
    );
    console.log("Login successful:", response.data);
    setErrorMessage(""); // Clear any previous error messages

    // ✅ Save login status (or token if using JWT later)
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Navigate after login
    navigate("/about");

  } catch (error: any) {
    console.error("Login error:", error.response || error.message);
    setErrorMessage(
      error.response?.data?.message || "An error occurred during login."
    );
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-900 to-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {errorMessage && (
          <p className="text-sm text-red-600 text-center">{errorMessage}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition"
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
