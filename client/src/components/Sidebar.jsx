import {
  FaChartPie,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const [open, setOpen] =
    useState(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="md:hidden fixed top-5 left-5 z-50 bg-cyan-500 p-3 rounded-xl"
      >

        {open ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}

      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-72 bg-[#0F172A] border-r border-white/10 p-6 z-40 transform transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
      >

        <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12">
          MINI CRM
        </h1>

        <div className="space-y-4">

          <button className="w-full flex items-center gap-4 bg-cyan-500/20 text-cyan-400 p-4 rounded-2xl">
            <FaChartPie />
            Dashboard
          </button>

          <Link
             to="/leads"
             className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl"
         >

             <FaUsers />

             Leads

          </Link>

          <Link
  to="/settings"
  className="w-full flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl"
>

  <FaCog />

  Settings

</Link>

        </div>

      </div>
    </>
  );
}

export default Sidebar;