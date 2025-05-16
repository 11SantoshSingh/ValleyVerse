import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import  { useState } from "react";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Track the loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInput) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        data
      );
      setSuccessMessage("Registration successful!");
      setErrorMessage("");
      console.log("Response:", response.data);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(
        error.response?.data?.message || "An unexpected error occurred. Please try again."
      );
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-900 to-black text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {errorMessage && (
          <p className="text-sm text-red-600 text-center">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-sm text-green-600 text-center">{successMessage}</p>
        )}

        {/* Name Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-semibold">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-green-700 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'} text-white font-semibold py-2 px-4 rounded-lg transition`}
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Register;
