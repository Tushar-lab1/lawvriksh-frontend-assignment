import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Menu } from "lucide-react";
function Navbar({ showSidebar, sidebar }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Menu width={18} onClick={() => showSidebar(!sidebar)} />
        <h1 className="font-medium text-2xl">Dashboard</h1>
      </div>

      <div className="flex gap-4">
        <input
          className="w-xs bg-white text-gray-600  px-4 rounded-full"
          placeholder="Search for anything..."
        />
        <div className="flex gap-4 bg-white px-3 py-1 rounded-full items-center">
          <img src={logo} className="w-10 h-10  rounded-4xl" />
          <div>
            <p className="text-xl">Alex meian</p>
            <p>Product Manager</p>
          </div>
          <ChevronDown size={18} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
