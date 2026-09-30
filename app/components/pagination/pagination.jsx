import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const arrow =
  "flex h-10 w-12 items-center justify-center hover:text-[#EEFD34] rounded-full border border-[#CED0D3] text-black";

export default function Pagination({ page = 1, total = 1, path = "" }) {
  const go = (n) => `${path}?page=${Math.min(Math.max(n, 1), total)}`;

  return (
    <nav className="border-b border-[#CED0D3]">
      <div className="flex items-center justify-center gap-6 bg-white py-18 font-satoshi text-sm">
        <Link href={go(page - 1)} className={arrow} aria-label="Previous">
          <FaAngleLeft />
        </Link>

        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <Link
            key={n}
            href={go(n)}
            className={
              n === page ? "text-[#C4C6CA]" : "font-semibold text-black"
            }
          >
            {n}
          </Link>
        ))}

        <Link href={go(page + 1)} className={arrow} aria-label="Next">
          <FaAngleRight />
        </Link>
      </div>
    </nav>
  );
}
