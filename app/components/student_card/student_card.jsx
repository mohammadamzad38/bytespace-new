import Image from "next/image";
import { FaStar } from "react-icons/fa";
import data from "../../../data/data.json";

export default function StudentCard() {
  return (
    <div className="absolute bottom-40 right-0 z-30 w-45 md:w-64.5 rounded-xl bg-white p-4 shadow-md">
      <p className="font-satoshi text-xs md:text-base font-medium text-[#242528]">
        Happy Students
      </p>

      <p className="mb-2 flex items-center gap-1 font-satoshi text-[10px] text-[#777B84]">
        <span className="font-bold">4.5</span> (240)
        <span className="text-[#D4FB20]">
          <FaStar size={16} />
        </span>
      </p>

      <div className="flex -space-x-4.5">
        {data.students_image.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={43}
            height={43}
            alt=""
            className="h-8 md:h-10.75 w-8 md:w-10.75 rounded-full border border-white object-cover"
          />
        ))}

        <span className="flex h-8 md:h-10.75 w-8 md:w-10.75 items-center justify-center rounded-full border-2 border-white bg-[#CBFC01] text-xs font-semibold text-[#080D1C]">
          2K+
        </span>
      </div>
    </div>
  );
}
