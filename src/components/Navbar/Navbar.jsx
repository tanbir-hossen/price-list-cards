import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/  ",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500 bg-blue-200" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500 bg-blue-200" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex absolute md:static duration-500 pl-10 pb-4 bg-purple-400 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <li
            key={route.id}
            route={route}
            className="mr-12 hover:bg-purple-800"

          ><a href={route.path}> {route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
