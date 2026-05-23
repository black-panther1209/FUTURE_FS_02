function KanbanBoard({
  leads,
}) {

  const statuses = [
    "New",
    "Contacted",
    "Converted",
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {statuses.map((status) => (

        <div
          key={status}
          className="bg-white/5 border border-white/10 rounded-3xl p-4"
        >

          <h2 className="text-2xl font-black mb-4">
            {status}
          </h2>

          <div className="space-y-4">

            {leads
              .filter(
                (lead) =>
                  lead.status ===
                  status
              )
              .map((lead) => (

                <div
                  key={lead._id}
                  className="bg-[#0F172A] rounded-2xl p-4"
                >

                  <h3 className="font-bold">
                    {lead.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {lead.email}
                  </p>

                </div>

              ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default KanbanBoard;