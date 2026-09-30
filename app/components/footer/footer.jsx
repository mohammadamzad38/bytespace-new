import Link from "next/link";
import data from "../../../data/data.json";
import NavLinks from "./navLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#CED0D3]">
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row gap-10 pt-17.75 pb-20 md:pb-32.5 lg:gap-23">
          <div>
            {/* Logo */}
            <Link href="/" className="w-42.75 h-9.25 text-black">
              <Image
                src={"/images/footer_logo.png"}
                alt="Footer Logo"
                width={171}
                height={37}
                className="text-black"
              />
            </Link>

            {/* Description */}
            <p className="text-sm mt-4 font-satoshi leading-[1.6] text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter */}
            <form className="flex w-full md:w-[60%] lg:w-full gap-6 mt-11.25">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full min-w-0 w-94 flex-1 rounded-full px-6 py-4.5 border border-[#dedede] text-[#CED0D3] outline-none placeholder:text-[#555]"
              />

              <button
                type="submit"
                className="rounded-2xl md:rounded-3xl text-center bg-[#c7fa18] px-4 md:px-6 py-1 md:py-3 leading-none text-sm md:text-lg font-medium text-black transition hover:bg-[#baf000] cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Privacy text */}
            <p className="mt-6 font-satoshi text-xs text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex  justify-around lg:justify-between w-full mt-8 lg:mt-0">
            <NavLinks data={data.navOne} />
            <NavLinks data={data.navTwo} />
            <NavLinks data={data.navThree} />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#dedede]" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-5.75 pb-12 sm:flex-row items-center sm:justify-between">
          <p className="text-sm font-satoshi text-[#242528]">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {data.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-satoshi cursor-pointer text-[#242528] transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
