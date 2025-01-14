import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/"); // Navigates to the About page
  };
  return (
    <div className="w-full h-screen flex items-center justify-center text-sm sm:text-xl md:text-2xl flex-col">
      <div> NotFound</div>
      <div>
        <button
          onClick={handleNavigate}
          className={`text-sm px-2 py-1 border border-gray-500 rounded-md`}
        >
          go back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
