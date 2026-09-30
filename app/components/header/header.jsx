"use client";

import Link from "next/link";
import Image from "next/image";
import Btn from "../button/btn";
import data from "../../../data/data.json";
import { MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../../../public/images/Header_Logo.png";

export default function Header() {
  return (
    <header className="w-full bg-grid">
      <div className="container h-30  grid  grid-cols-[40%_60%] md:flex md:justify-between items-center  ">
        <Link href="/" className="h-9.25 w-42.75">
          <Image
            src={Logo}
            width={300}
            height={300}
            alt="Company logo"
            className="h-full w-full object-contain"
          />
        </Link>

        <div className="flex flex-col items-center gap-3 md:contents">
          <nav className="flex md:flex-row gap-6 font-satoshi items-end md:items-center">
            {data.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6 font-satoshi text-white">
            <Btn href="/login" text="Sign In" />
            <Btn href="/registration" text="Join Us" />
            <Btn
              href="/registration"
              icon={<MdOutlineShoppingBag size={24} />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
