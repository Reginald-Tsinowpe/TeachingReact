import { NavLink } from "react-router";

export function SideBar() {
  return (
    <div className="min-w-auto">
      <div>Side bar div</div>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-400 font-bold px-3 rounded-md"
              : ""
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-400 font-bold px-3 rounded-md"
              : ""
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-400 font-bold px-3 rounded-md"
              : ""
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}
