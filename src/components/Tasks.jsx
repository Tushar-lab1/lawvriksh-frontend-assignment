import { Circle, Check } from "lucide-react";
import { useState } from "react";

function Tasks() {
  const initialTasks = [
    {
      title: "Create a user flow of social application design",
      status: "Approved",
    },
    {
      title: "Create a user flow of social application design",
      status: "In review",
    },
    {
      title: "Landing page design for Fintech project of Singapore",
      status: "In review",
    },
    {
      title: "Interactive prototype for app screens of Deltamine project",
      status: "On going",
    },
    {
      title: "Interactive prototype for app screens of Deltamine project",
      status: "Approved",
    },
  ];

  const [doneTasks, setDoneTasks] = useState(
    Array(initialTasks.length).fill(false)
  );

  const toggleTask = (index) => {
    const updated = [...doneTasks];
    updated[index] = !updated[index];
    setDoneTasks(updated);
  };

  return (
    <div className="bg-[#f5eae0] rounded-2xl p-5 shadow-sm mt-6 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Today’s Task</h2>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          View all
        </span>
      </div>

      <div className="flex gap-6 text-sm text-gray-600">
        <span className="cursor-pointer border-b-2 border-orange-500 text-orange-600 font-medium">
          All (10)
        </span>
        <span className="cursor-pointer hover:text-gray-800">Important</span>
        <span className="cursor-pointer hover:text-gray-800">Notes</span>
        <span className="cursor-pointer hover:text-gray-800">Links</span>
      </div>

      <div>
        {initialTasks.map((task, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all duration-200 hover:bg-[#f0dccc]`}
            onClick={() => toggleTask(i)}
          >
            <div className="flex items-center gap-3">
              <div>
                {doneTasks[i] ? (
                  <Check className="text-green-600 transition-transform transform scale-110" />
                ) : (
                  <Circle className="text-gray-500" />
                )}
              </div>
              <p
                className={`text-gray-800 ${
                  doneTasks[i] ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </p>
            </div>

            <span
              className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200 ${
                task.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : task.status === "In review"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
