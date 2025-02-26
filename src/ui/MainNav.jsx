import { NavLink } from "react-router-dom";
import {
    HiOutlineArrowsUpDown,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {[
          { to: "/dashboard", icon: HiOutlineHome, label: "Home" },
          { to: "/control", icon: HiOutlineArrowsUpDown , label: "Control" },
          { to: "/logs", icon: HiOutlineCalendarDays, label: "Logs & History" },
          { to: "/statistics", icon: HiOutlineChartBar, label: "Statistics" },
          { to: "/settings", icon: HiOutlineCog6Tooth, label: "Settings" },
        ].map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-3 text-gray-600 text-lg font-medium px-6 py-3 rounded transition-all
                ${isActive ? "bg-gray-50 text-gray-700" : "hover:bg-gray-50 hover:text-gray-700"}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-6 h-6 text-gray-400 transition-all group-hover:text-green-600 ${
                      isActive ? "text-green-600" : ""
                    }`}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
