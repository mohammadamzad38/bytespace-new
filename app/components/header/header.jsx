"use client";

import Btn from "../button/btn";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../../../public/images/Header_Logo.png";
import data from "../../../data/data.json";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-grid">
      <div className="container flex h-30 items-center justify-between">
        <Link href={"/"} className="h-9.25 w-42.75">
          <Image
            src={Logo}
            width={300}
            height={300}
            alt="Company logo"
            className="h-full w-full object-contain"
          />
        </Link>

        <nav className="flex items-center gap-2 font-satoshi">
          {data.navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 transition-colors ${
                  active
                    ? "bg-[#CBFC01] text-black"
                    : "text-white hover:text-[#CBFC01]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6 font-satoshi text-white">
          <Btn href="login" text="Sign In" />
          <Btn href="registration" text="Join Us" />
          <MdOutlineShoppingBag size={24} />
        </div>
      </div>
    </header>
  );
}
