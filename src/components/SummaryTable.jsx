import { ChevronDown } from "lucide-react";

function SummaryTable() {
  const projects = [
    {
      name: "Nelsa web development",
      manager: "Om Prakash Sao",
      dueDate: "May 25, 2023",
      status: "Completed",
      progress: 100,
      color: "bg-green-500",
    },
    {
      name: "Datascale AI app",
      manager: "Neilsan Mando",
      dueDate: "Jun 20, 2023",
      status: "Delayed",
      progress: 35,
      color: "bg-yellow-500",
    },
    {
      name: "Media channel branding",
      manager: "Tiruvelly Priya",
      dueDate: "Jul 13, 2023",
      status: "At risk",
      progress: 68,
      color: "bg-red-500",
    },
    {
      name: "Corlax iOS app development",
      manager: "Matte Hannery",
      dueDate: "Dec 20, 2023",
      status: "Completed",
      progress: 100,
      color: "bg-green-500",
    },
    {
      name: "Website builder development",
      manager: "Sukumar Rao",
      dueDate: "Mar 15, 2024",
      status: "Ongoing",
      progress: 50,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="bg-[#f5eae0] rounded-2xl p-6 shadow-sm mt-8 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Project Summary</h2>

        <div className="flex gap-3 text-sm">
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1.5 rounded-full">
            Project <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1.5 rounded-full">
            Project Manager <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1.5 rounded-full">
            Status <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <div>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Project Manager</th>
              <th className="pb-3 font-medium">Due Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-none transition-colors duration-200 hover:bg-[#f0dccc] cursor-pointer"
              >
                <td className="py-3 text-gray-800">{proj.name}</td>
                <td className="py-3 text-gray-600">{proj.manager}</td>
                <td className="py-3 text-gray-600">{proj.dueDate}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                      proj.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : proj.status === "Delayed"
                        ? "bg-yellow-100 text-yellow-700"
                        : proj.status === "At risk"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {proj.status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`${proj.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${proj.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      {proj.progress}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SummaryTable;
