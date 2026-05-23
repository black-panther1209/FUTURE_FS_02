import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Legend,
} from "recharts";

function Charts({ leads }) {

  const data = [
    {
      name: "New",
      value: leads.filter(
        (l) =>
          l.status === "New"
      ).length,
    },

    {
      name: "Contacted",
      value: leads.filter(
        (l) =>
          l.status ===
          "Contacted"
      ).length,
    },

    {
      name: "Converted",
      value: leads.filter(
        (l) =>
          l.status ===
          "Converted"
      ).length,
    },
  ];

  const COLORS = [
    "#06B6D4",
    "#A855F7",
    "#10B981",
  ];

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* PIE CHART */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 h-[420px]">

        <h2 className="text-3xl font-black mb-6">
          Lead Distribution
        </h2>

        <ResponsiveContainer
          width="100%"
          height="85%"
        >

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >

              {data.map(
                (_, index) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />

                )
              )}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* BAR CHART */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 h-[420px]">

        <h2 className="text-3xl font-black mb-6">
          Analytics
        </h2>

        <ResponsiveContainer
          width="100%"
          height="85%"
        >

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
            />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="value"
              fill="#06B6D4"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default Charts;