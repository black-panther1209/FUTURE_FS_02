import {
  FaBell,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

import { useState } from "react";

function Navbar() {

  const [open, setOpen] =
    useState(false);

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/";
  };

  return (

    <div className="flex justify-between items-center mb-10">

      {/* LEFT */}
      <div>

        <h1 className="text-4xl font-black">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back 👋
        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATIONS */}
        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">

          <FaBell />

        </button>

        {/* DARK MODE */}
        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">

          <FaMoon />

        </button>

        {/* PROFILE */}
        <div className="relative">

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl"
          >

            <FaUserCircle />

          </button>

          {/* DROPDOWN */}
          {open && (

            <div className="absolute right-0 mt-4 w-56 bg-[#0F172A] border border-white/10 rounded-2xl p-4 shadow-[0_0_30px_rgba(34,211,238,0.2)] z-50">

              <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-white/10 transition">

                👤 Profile

              </button>

              <button className="w-full text-left py-3 px-4 rounded-xl hover:bg-white/10 transition">

                ⚙️ Settings

              </button>

              <button
                onClick={logout}
                className="w-full text-left py-3 px-4 rounded-xl hover:bg-red-500/20 text-red-400 transition"
              >

                🚪 Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Navbar;