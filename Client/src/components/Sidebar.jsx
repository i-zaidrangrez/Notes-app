import React from "react";
import { LogOut, NotebookText } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="p-4 flex  flex-col h-full">
      <div className="flex items-center justify-center gap-2">
        <NotebookText size={32} color="rgb(43, 128, 255)" />
        <div className="font-bold text-3xl text-center text-blue-500">
          {" "}
          Notes
        </div>
      </div>
      <div className="h-full flex flex-col place-content-between">
        <h2 className="flex items-center rounded-sm hover:bg-blue-500 p-2 border  border-gray-100 justify-center duration-300 text-xl mt-[20%]">All Notes</h2>
        <h3 className="flex items-center rounded-sm hover:bg-blue-500 p-2 border border-gray-500 justify-center duration-300 text-xl"> <LogOut color="blue" /> Log Out</h3>
      </div>
    </div>
  );
};

export default Sidebar;
