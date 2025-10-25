import { PieChart, Pie, Cell } from "recharts";
import { ChevronDown } from "lucide-react";

function Progress() {
  const data = [
    { name: "Completed", value: 72 },
    { name: "Remaining", value: 28 },
  ];

  const COLORS = ["#f59e0b", "#e5e7eb"];

  return (
    <div className="bg-[#f5eae0] w-120 rounded-2xl p-6 shadow-sm flex flex-col justify-between mt-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Overall Progress
        </h2>
        <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-full text-sm flex">
          All
          <ChevronDown width={15} />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={70}
            startAngle={180}
            endAngle={0}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <p className="text-2xl font-semibold text-gray-800 mt-[-30px]">72%</p>
        <p className="text-gray-600 text-sm">Completed</p>
      </div>

      <div className="flex justify-around text-center mt-4 text-sm">
        <div>
          <p className="font-semibold text-gray-800 text-xl">95</p>
          <p className="text-gray-500">Total Projects</p>
        </div>
        <div>
          <p className="font-semibold text-green-600 text-xl">26</p>
          <p className="text-gray-500">Completed</p>
        </div>
        <div>
          <p className="font-semibold text-red-600 text-xl">35</p>
          <p className="text-gray-500">Delayed</p>
        </div>
        <div>
          <p className="font-semibold text-orange-600 text-xl">35</p>
          <p className="text-gray-500">Ongoing</p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
