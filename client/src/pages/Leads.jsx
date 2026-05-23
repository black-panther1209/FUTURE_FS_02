import { useEffect, useState } from "react";

import API from "../services/api";

import toast from "react-hot-toast";

import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function Leads() {

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

  // FETCH LEADS
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

  // EDIT
  const editLead = (lead) => {

    setFormData(lead);

    setEditingId(lead._id);
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

    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-10">

      {/* TITLE */}
      <div className="mb-10">

        <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

          Leads Management

        </h1>

        <p className="text-gray-400 mt-2">
          Add, update and manage your leads
        </p>

      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6 mb-10 bg-white/5 border border-white/10 p-8 rounded-3xl"
      >

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              email:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              phone:
                e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Source"
          value={formData.source}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              source:
                e.target.value,
            })
          }
        />

        <textarea
          placeholder="Notes"
          value={formData.notes}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none md:col-span-2"
          rows="4"
          onChange={(e) =>
            setFormData({
              ...formData,
              notes:
                e.target.value,
            })
          }
        />

        {/* STATUS */}
        <select
          value={formData.status}
          className="bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none"
          onChange={(e) =>
            setFormData({
              ...formData,
              status:
                e.target.value,
            })
          }
        >

          <option>
            New
          </option>

          <option>
            Contacted
          </option>

          <option>
            Converted
          </option>

        </select>

        {/* BUTTON */}
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-4 font-bold hover:scale-[1.02] transition">

          {editingId
            ? "Update Lead"
            : "Add Lead"}

        </button>

      </form>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search leads..."
        className="w-full mb-8 bg-white/5 border border-white/10 rounded-2xl p-4 outline-none"
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      {/* LEADS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredLeads.map(
          (lead) => (

            <div
              key={lead._id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition"
            >

              <h2 className="text-2xl font-bold mb-2">
                {lead.name}
              </h2>

              <p className="text-gray-400">
                {lead.email}
              </p>

              <p className="mt-2">
                📞 {lead.phone}
              </p>

              <p>
                🌍 {lead.source}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {lead.notes}
              </p>

              <span className="inline-block mt-4 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">

                {lead.status}

              </span>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-6">

                <button
                  onClick={() =>
                    editLead(
                      lead
                    )
                  }
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 p-3 rounded-2xl flex items-center justify-center gap-2"
                >

                  <FaEdit />
                  Edit

                </button>

                <button
                  onClick={() =>
                    deleteLead(
                      lead._id
                    )
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 p-3 rounded-2xl flex items-center justify-center gap-2"
                >

                  <FaTrash />
                  Delete

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default Leads;