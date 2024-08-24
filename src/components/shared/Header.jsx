"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import { FaBars } from "react-icons/fa";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";

const navs = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="navbar  bg-slate-900 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navs.map((nav, idx) => (
              <Link
                href={nav.path}
                key={idx}
                className={`${
                  nav.path === pathName && "text-blue-600 font-bold"
                }`}
              >
                {" "}
                {nav.title}{" "}
              </Link>
            ))}
          </ul>
        </div>

        <Link href="/">
          <Image src={logo} alt="" height={60} width={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4">
          {navs.map((nav, idx) => (
            <Link
              href={nav.path}
              key={idx}
              className={`text-[16px] ${
                nav.path === pathName && "text-blue-600 font-bold "
              }`}
            >
              {" "}
              {nav.title}{" "}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className=" flex gap-2 items-center mr-2">
          <SearchSharpIcon />
          <LocalMallSharpIcon />
        </div>
        <Link href={"/"} className="btn pColor text-white hover:pColor">
          {" "}
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
