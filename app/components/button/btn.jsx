import Link from "next/link";


export default function Btn({ text, href, className }) {
  return (
    <div>
      <Link className={className |"cursor-pointer"} href={href} >
        {text}
      </Link>
    </div>
  );
}
