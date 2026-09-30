import Image from "next/image";
import Search from "../search/search";
import StudentCard from "../student_card/student_card";

const lime =
  "brightness(0) saturate(100%) invert(91%) sepia(98%) saturate(1800%) hue-rotate(35deg) brightness(101%) contrast(101%)";
const gray =
  "brightness(0) saturate(100%) invert(96%) sepia(4%) saturate(67%) hue-rotate(201deg) brightness(99%) contrast(97%)";

const shapes = [
  { src: "shape-1", className: "-left-30 top-28 w-[386.79px]", filter: lime },
  {
    src: "shape-1",
    className: "left-[15%] top-92 w-[175] -rotate-y-[180deg] ",
    filter: gray,
  },
  {
    src: "shape-2",
    className: "right-[12%] top-80 w-[188]",
    filter: gray,
  },
  { src: "shape-3", className: "-right-40 top-32 w-[370]", filter: lime },
  {
    src: "shape-5",
    className: "-left-8 z-20 -bottom-12 w-[343.68] ",
    filter: gray,
  },
  {
    src: "shape-1",
    className: "-right-[4%] -bottom-4 z-20 w-[331.53] rotate-[133deg]",
    filter: gray,
  },
];

const card = "absolute rounded-xl bg-white p-4 text-left text-black shadow-sm";

export default function CoverBanner() {
  return (
    <section className="relative overflow-hidden bg-grid pt-12.25 font-satoshi text-white">
      {/* Shapes */}
      {shapes.map(({ src, className, filter }, idx) => (
        <Image
          key={idx}
          src={`/images/shape/${src}.png`}
          width={300}
          height={300}
          alt="Hero cover Image"
          style={{ filter }}
          className={`pointer-events-none absolute z-0 ${className} `}
        />
      ))}

      {/* EVERYTHING visible above shapes */}
      <div className="relative  z-10">
        <h1 className="mx-auto max-w-4xl text-center font-sans text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="mt-8 text-center text-sm md:text-lg text-[#E5E6E8]">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="flex w-full justify-center">
          <Search />
        </div>

        <div className="relative mx-auto mt-16 h-90 max-w-287.25">
          {/* Green circle */}
          <div className="absolute left-1/2 top-10 z-0 aspect-square w-287.25 -translate-x-1/2 rounded-full bg-[#CBFC01]" />

          {/* Person */}
          <Image
            src="/images/others/mode_ml.png"
            width={600}
            height={720}
            alt="Smiling student with headphones"
            className="absolute -bottom-34 left-1/2 z-10 max-w-144.5 h-134.25 -translate-x-1/2"
          />

          {/* Card */}
          <div className={`${card} left-[21%] p-4 top-14 z-20`}>
            <p className="font-satoshi">UI/UX Design</p>
            <p className="text-xs text-gray-400">
              200 Courses · 1000+ Students
            </p>
          </div>

          {/* Progress */}
          <div className={`${card} right-[28%]  top-14 z-20 w-44`}>
            <p className="text-sm font-satoshi">Learning Progress</p>
            <p className="text-5xl my-2 font-sans font-semibold">55%</p>

            <div className="h-2 rounded-full bg-[#F6F6F6]">
              <div className="h-full w-[55%] rounded-full bg-[#CBFC01]" />
            </div>
          </div>
          <div className="absolute -bottom-25 left-[38%]">
            <StudentCard />
          </div>
        </div>
      </div>
    </section>
  );
}
