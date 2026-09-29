import Tags from "../tags/tags";
import { MdSearch } from "react-icons/md";
import data from "../../../data/data.json";
import { FaAngleDown } from "react-icons/fa6";
import FilterBar from "../filterBar/filter_Bar";
import Pagination from "../pagination/pagination";
import CourseCard from "../course_Card/courseCard";

export default function Courses() {
  return (
    <div>
      <div className="bg-grid flex flex-col items-center pb-17.25">
        <h1 className="font-sans text-4xl pt-11 font-semibold text-center">
          Find Your Next Course
        </h1>
        <form action="submit" className="flex gap-4 mt-8">
          <label className="flex h-12 max-w-115.25 w-full flex-1 items-center gap-3 rounded-3xl bg-white px-6 text-gray-500">
            <MdSearch size={20} />
            <input
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className=" bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
            />
          </label>
          <button className="flex items-center cursor-pointer justify-center gap-2 text-black text-lg font-satoshi px-6 py-3 rounded-3xl bg-lime-400">
            Courses <FaAngleDown />
          </button>
        </form>
      </div>
      <div className="pt-18 bg-white">
        <FilterBar />
      </div>
      <div className="bg-white pt-8 pb-19.25">
        <Tags value={data.skilss} />
      </div>
      <CourseCard />
      <Pagination total={5} />
    </div>
  );
}
