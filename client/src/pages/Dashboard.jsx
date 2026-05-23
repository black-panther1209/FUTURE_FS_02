import { useEffect, useState } from "react";

import API from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import { CSVLink }
from "react-csv";

function Dashboard() {

  const [leads, setLeads] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      source: "",
      notes: "",
      status: "New",
    });

  // FETCH
  const fetchLeads = async () => {

    try {

      const res =
        await API.get(
          "/leads"
        );

      setLeads(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchLeads();

  }, []);

  // ADD / UPDATE
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        if (editingId) {

          await API.put(
            `/leads/${editingId}`,
            formData
          );

          toast.success(
            "Lead Updated!"
          );

          setEditingId(null);

        } else {

          await API.post(
            "/leads",
            formData
          );

          toast.success(
            "Lead Added!"
          );
        }

        fetchLeads();

        setFormData({
          name: "",
          email: "",
          phone: "",
          source: "",
          notes: "",
          status: "New",
        });

      } catch (error) {

        toast.error(
          "Something went wrong"
        );
      }
    };

  // DELETE
  const deleteLead =
    async (id) => {

      try {

        await API.delete(
          `/leads/${id}`
        );

        toast.success(
          "Lead Deleted!"
        );

        fetchLeads();

      } catch (error) {

        toast.error(
          "Delete Failed"
        );
      }
    };

  // SEARCH
  const filteredLeads =
    leads.filter((lead) =>
      lead.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="min-h-screen bg-[#020617] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* NAVBAR */}
        <Navbar />

        {/* TOP ACTIONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search leads..."
            className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          {/* EXPORT CSV */}
          <CSVLink
            data={leads}
            filename={"leads.csv"}
            className="px-6 py-4 rounded-2xl bg-green-500 hover:bg-green-600 transition font-bold text-center shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >

            Export CSV

          </CSVLink>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Total Leads
            </p>

            <h2 className="text-5xl font-black mt-3 text-cyan-400">
              {leads.length}
            </h2>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Contacted
            </p>

            <h2 className="text-5xl font-black mt-3 text-purple-400">

              {
                leads.filter(
                  (lead) =>
                    lead.status ===
                    "Contacted"
                ).length
              }

            </h2>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400">
              Converted
            </p>

            <h2 className="text-5xl font-black mt-3 text-green-400">

              {
                leads.filter(
                  (lead) =>
                    lead.status ===
                    "Converted"
                ).length
              }

            </h2>

          </div>

        </div>

        {/* CHARTS */}
        <div className="mb-10">

          <Charts leads={leads} />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;