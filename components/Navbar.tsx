"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { useState } from "react";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"} className="flex relative">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <Image src="menu.svg" alt="menu" width={32} height={32} className="lg:hidden cursor-pointer inline-block transition-all hover:scale-110" onClick={() => setShowNav(!showNav)} />

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className={`transition-dropdown ${showNav ? "flex opacity-100 h-auto" : "hidden opacity-0 h-0"} absolute top-16 w-[90%] bg-white z-5 p-3 rounded-md shadow-md`}>
        <ul className="h-full gap-2 flex flex-col w-full">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray50 cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
          <Button full={true} type={"button"} title={"Login"} icon={"/user.svg"} variant={"btn_dark_green"} />
        </ul>
      </div>

      <div className="lg:flexCenter hidden">
        <Button type={"button"} title={"Login"} icon={"/user.svg"} variant={"btn_dark_green"} />
      </div>
    </nav>
  );
};
