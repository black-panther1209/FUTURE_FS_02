import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      window.location.href =
        "/dashboard";

    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px]" />

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md relative z-10 shadow-2xl">

        {/* Heading */}
        <h1 className="text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
          LOGIN
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-cyan-400"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-cyan-400"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          {/* Login Button */}
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white hover:scale-[1.02] transition duration-300">

            LOGIN

          </button>

        </form>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 font-bold hover:text-cyan-300"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;