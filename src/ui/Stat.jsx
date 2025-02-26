import React from "react";

const COLORS = {
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  };
  
  function Stat({ icon, title, value, color = "gray" }) {
    return (
      <div className="p-[1.2rem] bg-white border border-gray-100 rounded-md p-4 grid grid-cols-[4rem_1fr] grid-rows-2 gap-x-4 gap-y-1">
        <div className={`row-span-2 aspect-square flex items-center justify-center rounded-full ${COLORS[color] || COLORS.gray}`}>
          {icon && React.cloneElement(icon, { className: "w-8 h-8" })}
        </div>
  
        <h5 className="self-end text-xs uppercase tracking-wide font-semibold text-gray-500">
          {title}
        </h5>
  
        <p className="text-2xl font-medium leading-none">{value}</p>
      </div>
    );
  }
  
  export default Stat;
  