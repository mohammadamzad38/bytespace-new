import { MdSearch } from "react-icons/md";

export default function Search() {
  return (
    <form action="submit" className="flex md:w-full justify-center gap-4 mt-15">
      <label className="flex h-12 max-w-115.25 w-full flex-1 items-center gap-3 rounded-3xl bg-white px-6 text-gray-500">
        <MdSearch size={20} />
        <input
          placeholder="Search"
          className=" bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
        />
      </label>
      <button className="flex items-center cursor-pointer justify-center gap-2 text-black text-sm md:text-lg font-satoshi px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-3xl bg-lime-400">
        Search
      </button>
    </form>
  );
}
