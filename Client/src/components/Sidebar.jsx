import React from "react";
import { LogOut, NotebookText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className="p-4 flex  flex-col h-full">
      <div className="flex items-center justify-center gap-2">
        <NotebookText size={32} color="rgb(124, 242, 169)" />
        <div className="font-bold text-3xl text-center text-green-300">
          {" "}
          Notes
        </div>
      </div>
      <div className="h-full flex flex-col place-content-between">
        <h2 className="flex items-center rounded-sm hover:text-green-300 p-2 border  border-gray-100 justify-center duration-300 text-xl mt-[20%]">All Notes</h2>
        <h3 className="flex items-center rounded-sm hover:text-green-300 p-2 border border-gray-500 justify-center duration-300 text-xl" onClick={async()=>{
          await api.post('/auth/logout')
          navigate('/login')
        }}> <LogOut color="white" /> Log Out</h3>
      </div>
    </div>
  );
};

export default Sidebar;
