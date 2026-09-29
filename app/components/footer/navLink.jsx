import Link from "next/link";

export default function NavLinks({ data }) {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index}>
          <Link
            href={item.href}
            className="text-sm leading-none text-[#242528] transition-colors hover:text-black"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
