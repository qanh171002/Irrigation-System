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
          { to: "/control", icon: HiOutlineArrowsUpDown, label: "Control" },
          { to: "/logs", icon: HiOutlineCalendarDays, label: "Logs & History" },
          { to: "/statistics", icon: HiOutlineChartBar, label: "Statistics" },
          { to: "/settings", icon: HiOutlineCog6Tooth, label: "Settings" },
        ].map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? "bg-primary-500 text-white"
                    : "hover:bg-primary-50 text-neutral-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-white" : "text-neutral-400"
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
