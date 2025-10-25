import { ChevronDown, Circle } from "lucide-react";

function Workload() {
  const data = [
    { name: "Sam", tasks: 4 },
    { name: "Meidy", tasks: 3 },
    { name: "Ken", tasks: 5 },
    { name: "Dmitry", tasks: 3 },
    { name: "Vego", tasks: 5 },
    { name: "Kadin", tasks: 4 },
  ];

  return (
    <div className="bg-[#f5eae0] rounded-2xl p-4 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Projects Workload
        </h2>
        <button className="bg-white border border-gray-300 px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
          Last 3 months
          <ChevronDown width={15} />
        </button>
      </div>

      <div className="flex items-end">
        {data.map((user, index) => (
          <div key={index} className="justify-between items-center">
            <div>
              {[...Array(user.tasks)].map((_, i) => (
                <Circle key={i} size={32} />
              ))}
            </div>
            <p className="font-medium text-gray-700 w-20">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workload;
