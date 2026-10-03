import Image from "next/image";
import data from "../../../data/data.json";

export default function CreatorCTA() {
  const shapePositions = [
    "absolute -left-30 -top-38 z-10 w-30 md:w-[386.79px]",
    "absolute left-[165px] top-[25px] z-10 w-30 md:w-[175.81px] -rotate-y-[180deg]",
    "absolute right-[120px] top-[15px] z-10 w-30 md:w-[188.93px] h-[188.93px]",
    "absolute -right-60 top-10 z-10 w-30 md:w-[371px] h-[371px]",
    "absolute -left-12 top-[210px] z-10 w-30 md:w-[188.93px]",
    "absolute -bottom-[95px] left-[50px] z-10 w-30 md:w-[240px]",
    "absolute -bottom-[120px] -right-[75px] z-10 w-30 md:w-[331.53px] -rotate-[220deg]",
    "absolute left-[50%] top-[40px] z-10 w-30 md:w-[343.68px] h-[343.68px]",
    "absolute right-0 bottom-[20px] z-10 w-30 md:w-[180px]",
  ];

  return (
    <section className="relative w-full overflow-hidden  bg-grid">
      <div className=" relative overflow-hidden">
        {data.creatorShapes.map((shape, index) => (
          <Image
            key={`${shape.image}-${index}`}
            src={shape.image}
            alt=""
            width={300}
            height={300}
            className={`${shapePositions[index]} h-auto object-contain`}
            style={{
              filter:
                shape.color === "#FFFFFF"
                  ? "brightness(0) saturate(100%) invert(96%) sepia(4%) saturate(67%) hue-rotate(201deg) brightness(99%) contrast(97%)"
                  : "brightness(0) saturate(100%) invert(91%) sepia(98%) saturate(1800%) hue-rotate(35deg) brightness(101%) contrast(101%)",
            }}
          />
        ))}

        <div className="relative z-20 flex flex-col items-center justify-center pt-21.25 pb-21 text-center">
          <h2 className="font-sans text-center text-3xl md:text-[44px] font-semibold text-white">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p className="mt-10 max-w-90 md:max-w-212.5 font-satoshi text-sm md:text-lg text-[#F5F5F6]">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <button className="mt-10 cursor-pointer rounded-3xl bg-[#D4FB20] px-6 py-3 font-satoshi text-lg font-medium text-[#242528] transition-transform hover:scale-105">
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}
