export default function Tags({ value, button }) {
  return (
    <div className="container flex flex-wrap justify-center gap-4">
      {value?.map((category, index) => (
        <button
          key={category}
          className={`rounded-full px-4 py-3 font-satoshi text-sm md:text-base cursor-pointer leading-none transition-colors ${
            index === 0
              ? "bg-[#CBFC01] text-black "
              : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#CBFC01] hover:text-[#080D1C]"
          }`}
        >
          {category}
        </button>
      ))}

      {button}
    </div>
  );
}
