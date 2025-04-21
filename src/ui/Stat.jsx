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
    <div className="grid grid-cols-[4rem_1fr] grid-rows-2 gap-x-4 gap-y-1 rounded-md border border-neutral-200 bg-white p-4">
      <div
        className={`row-span-2 flex aspect-square items-center justify-center rounded-full ${COLORS[color] || COLORS.gray}`}
      >
        {icon && React.cloneElement(icon, { className: "w-8 h-8" })}
      </div>

      <h5 className="self-end text-xs font-semibold tracking-wide text-gray-500 uppercase">
        {title}
      </h5>

      <div className="text-2xl leading-none font-medium text-gray-700">
        {value}
      </div>
    </div>
  );
}

export default Stat;
