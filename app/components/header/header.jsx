"use client";

import Btn from "../button/btn";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../../../public/images/Header_Logo.png";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header className="w-full bg-[#003BE2] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px]">
      <div className="container flex h-30 items-center justify-between">
        <div className="h-9.25 w-42.75">
          <Image
            src={Logo}
            width={300}
            height={300}
            alt="Company logo"
            className="h-full w-full object-contain"
          />
        </div>

        <nav className="flex items-center gap-2 font-satoshi">
          {navLinks.map((link) => {
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
