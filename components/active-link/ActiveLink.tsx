"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: Props) => {
  const pathName = usePathname();
  console.log("first", pathName);
  return (
    <Link
      className={`${style.link} ${pathName === path && style["active-link"]}`}
      href={path}
    >
      {label}
    </Link>
  );
};
