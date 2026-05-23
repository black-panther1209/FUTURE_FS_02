import { useState } from "react";
import API from "../services/api";

function Login() {

  const [formData, setFormData] =
    useState({
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
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md relative z-10">

        <h1 className="text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
          LOGIN
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 text-white"
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 text-white"
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
          />

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-[1.02] transition">

            LOGIN

          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;