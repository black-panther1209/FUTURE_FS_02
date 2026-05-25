import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful 😭🔥");

      navigate("/login");

    } catch (error) {

      console.log(error);

      console.log(error.response);

      alert(
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration Failed"
      );
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px] border border-yellow-500 shadow-yellow-500/20 shadow-lg">

        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">

          Register

        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="p-3 rounded-lg bg-zinc-800 outline-none"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="p-3 rounded-lg bg-zinc-800 outline-none"
            onChange={handleChange}
            required
          />

          <button className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition">

            Register

          </button>

        </form>

        <p className="mt-4 text-center text-gray-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-yellow-400"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;