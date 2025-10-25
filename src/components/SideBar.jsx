import {
  Home,
  Folder,
  CheckSquare,
  PlusCircle,
  HelpCircle,
} from "lucide-react";
import image from "../assets/image.png";
function Sidebar() {
  return (
    <div className="bg-black text-white flex flex-col justify-between p-5">
      <div>
        <div className="flex items-center mb-15">
          <img src={image} className="w-15 h-15" />
          <h1 className="text-2xl font-bold">Promage</h1>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full w-full mb-6">
          <PlusCircle size={20} /> Create new project
        </button>

        <nav className="flex flex-col gap-4">
          {[
            { name: "Dashboard", icon: <Home size={20} />, active: true },
            { name: "Projects", icon: <Folder size={20} /> },
            { name: "Tasks", icon: <CheckSquare size={20} /> },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-full transition-colors duration-200 ease-in-out ${
                item.active
                  ? "bg-white text-orange-500"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.icon} {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 text-gray-400 cursor-pointer">
        <HelpCircle size={20} /> Help
      </div>
    </div>
  );
}

export default Sidebar;
