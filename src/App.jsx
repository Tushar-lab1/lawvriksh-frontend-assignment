import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Progress from "./components/Progess";
import Sidebar from "./components/SideBar";
import SummaryTable from "./components/SummaryTable";
import Tasks from "./components/Tasks";
import Workload from "./components/Workload";

function App() {
  const [sidebar, showSidebar] = useState(true);
  return (
    <div className="bg-[#EBDFD7] flex">
      {sidebar ? <Sidebar /> : <></>}
      <div className={`p-8 relative ${!sidebar ? "w-full" : ""}`}>
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
        <Cards />
        <div className="flex gap-5">
          <div className={`h-30 w-180 ${!sidebar ? "w-[1800px]" : ""}`}>
            <SummaryTable />
            <Tasks />
          </div>
          <div>
            <Progress />
            <Workload />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
