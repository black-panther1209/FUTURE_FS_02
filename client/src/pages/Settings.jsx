function Settings() {

  return (

    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-10">

      {/* TITLE */}
      <div className="mb-10">

        <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

          Settings

        </h1>

        <p className="text-gray-400 mt-2">
          Manage your account settings
        </p>

      </div>

      {/* SETTINGS CARD */}
      <div className="max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        {/* NAME */}
        <div className="mb-6">

          <label className="block mb-2 text-gray-400">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          />

        </div>

        {/* EMAIL */}
        <div className="mb-6">

          <label className="block mb-2 text-gray-400">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          />

        </div>

        {/* PASSWORD */}
        <div className="mb-8">

          <label className="block mb-2 text-gray-400">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full bg-[#0F172A] border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-400"
          />

        </div>

        {/* BUTTON */}
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-[1.02] transition shadow-[0_0_25px_rgba(34,211,238,0.3)]">

          Save Changes

        </button>

      </div>

    </div>

  );
}

export default Settings;