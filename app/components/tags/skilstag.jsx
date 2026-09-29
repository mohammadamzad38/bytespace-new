const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function SkilsTags() {
  return (
    <section className="w-full bg-white">
      <div className="container flex flex-col  items-center pt-18 pb-19.25">
        <h2 className=" text-center font-sans text-[#040819] text-3xl md:text-[44px] font-semibold leading-[1.05] tracking-[-1px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="mt-4 text-center font-satoshi text-base md:text-lg text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>

        <div className="mt-7 flex max-w-275 flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
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

          <button className="px-3 py-3 font-satoshi cursor-pointer text-[#003BE2]">
            + More
          </button>
        </div>
      </div>
    </section>
  );
}
