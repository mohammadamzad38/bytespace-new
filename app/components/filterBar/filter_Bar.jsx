import Btn from "../button/btn";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FiBarChart } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";

export default function FilterBar() {
  return (
    <div className="bg-white">
      <div className="container pt-18 flex flex-wrap gap-4 items-center justify-center md:justify-between">
        <div className="flex flex-wrap gap-4 ">
          <Btn
            href={""}
            className={
              "flex font-satoshi items-center rounded-3xl border border-[#CED0D3] px-4 py-3 leading-none text-[#4B4C53] gap-2"
            }
            text={"Filter"}
            icon={<MdOutlineFilterAlt size={24} />}
          />
          <Btn
            href={""}
            className={
              "flex font-satoshi items-center rounded-3xl border border-[#CED0D3] px-4 py-3 leading-none text-[#4B4C53] gap-2"
            }
            text={"Level"}
            icon={<FiBarChart size={24} />}
          />
          <Btn
            href={""}
            className={
              "flex font-satoshi items-center rounded-3xl border border-[#CED0D3] px-4 py-3 leading-none text-[#4B4C53] gap-2"
            }
            text={"Category"}
            icon={<MdOutlineCategory size={24} />}
          />
        </div>
        <div>
          <Btn
            href={""}
            className={
              "flex font-satoshi items-center rounded-3xl border border-[#CED0D3] px-4 py-3 leading-none text-[#4B4C53] gap-2"
            }
            text={"Most Relevant"}
            icon={<BiMenuAltLeft size={24} />}
          />
        </div>
      </div>
    </div>
  );
}
