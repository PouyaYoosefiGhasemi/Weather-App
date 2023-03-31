import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/response",
    name: "Search",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Nav = (props) => {
  return (
    <nav className="h-[10%]  bg-[#7DB9B6]">
      <ul
        className="flex  space-x-4 
         justify-start p-4 h-full  text-purple-600 shadow"
      >
        {navs.map((navItems) => {
          return (
            <li>
              <NavLink
                to={navItems.path}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-purple-100"
                    : isPending
                    ? "border-b-2 border-red "
                    : ""
                }
              >
                {navItems.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export { Nav };
