import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { site } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/team", label: "Team" },
    { to: "/courses", label: "Courses" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white shadow-md rounded-2xl mx-4 mt-4">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold"
          onClick={() => setOpen(false)}
        >
          <img
            src="/assets/cisco_logo.jpg"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          <span>{site.shortName}</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-20 left-4 right-4 bg-white shadow-lg rounded-xl p-4 md:static md:flex md:gap-6 md:bg-transparent md:shadow-none md:p-0`}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
