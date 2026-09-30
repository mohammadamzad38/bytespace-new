import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineFolder,
  MdOutlineVideocam,
  MdOutlineBadge,
  MdOutlineSupportAgent,
} from "react-icons/md";
import Btn from "../button/btn";

const includes = [
  { text: "Learning Resources", icon: MdOutlineFolder },
  { text: "Quality Lesson Videos", icon: MdOutlineVideocam },
  { text: "Certificate of Completion", icon: MdOutlineBadge },
  { text: "Private Consultation", icon: MdOutlineSupportAgent },
];

const lessons = [
  { text: "Introduction to Digital Assets", time: "12 mins" },
  { text: "Design Principles for Impacts", time: "21 mins" },
  { text: "Advanced Techniques in Digital Creation", time: "32 mins" },
];

export default function EnrollCard({ creator }) {
  return (
    <aside className="w-full max-w-103 rounded-3xl leading-none border border-[#CED0D3 ] bg-white p-10 font-satoshi  text-[#4B4C53] shadow-sm">
      <h3 className="text-xl font-semibold font-sans mb-6 text-black">
        112 Lessons (24 hours)
      </h3>
      <ol className="mt-4 space-y-3">
        {lessons.map((l, i) => (
          <li
            key={l.title}
            className="flex font-satoshi justify-between gap-4 text-black"
          >
            <span className="flex gap-3">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {l.text}
            </span>
            <span className="shrink-0 text-[#003BE2]">{l.time}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[#4B4C53]">19 more videos</p>
      <p className="mt-6">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <p className="mt-6 text-black">
        <b className="text-4xl font-semibold text-[#003BE2]">$25</b>
        /lifetime
      </p>
      <Btn
        href="/checkout"
        className="mt-6 block rounded-full bg-[#CBFC01] py-3 text-center text-black"
        text={"Enroll Now"}
      />

      <h4 className="mt-6 text-xl font-sans font-semibold text-black">
        This course include
      </h4>
      <ul className="mt-4 space-y-3">
        {includes.map(({ text, icon: Icon }) => (
          <li key={text} className="flex items-center gap-3">
            <Icon size={18} className="text-[#003BE2]" />
            {text}
          </li>
        ))}
      </ul>

      <>
        <hr className="my-6 border-[#E1E3E6]" />
        <div className="flex items-center gap-3">
          <Image
            src="/images/others/creator.jpg"
            width={52}
            height={52}
            alt="Creator Name"
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium font-satoshi text-lg text-black">
              PurePearl Studio
            </p>
            <p className="text-[#4B4C53]">Professional Creator</p>
          </div>
        </div>
        <p className="mt-6 font-satoshi">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Btn
          href={""}
          className="mt-6 inline-block rounded-3xl border border-[#CED0D3] px-4 py-2 text-black"
          text={" See Full Profile"}
        />
      </>
    </aside>
  );
}
