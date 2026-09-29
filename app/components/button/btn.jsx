import Link from "next/link";

export default function Btn({ text, href, style, className, icon0, icon }) {
  return (
    <div>
      <Link style={style} className={className || "cursor-pointer"} href={href}>
        {icon}
        {text}
        {icon0}
      </Link>
    </div>
  );
}
