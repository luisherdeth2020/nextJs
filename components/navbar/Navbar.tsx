import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  console.log("Navbar creado");
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon size={24} className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((item) => (
        // <Link key={item.path} href={item.path} className="mr-2">
        //   {item.label}
        // </Link>
        // <ActiveLink key={item.path} path={item.path} label={item.label} />
        <ActiveLink key={item.path} {...item} />
      ))}
      {/* <Link className="mr-2" href="/about">
        About
      </Link>
      <Link className="mr-2" href="/contact">
        Contact
      </Link> */}
    </nav>
  );
};
