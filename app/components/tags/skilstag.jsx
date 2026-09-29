import Tags from "../tags/tags";
import data from "../../../data/data.json";

export default function SkilsTags() {
  return (
    <section className="w-full bg-white">
      <div className="container flex flex-col  items-center pt-18 pb-19.25">
        <h2 className=" text-center font-sans text-[#040819] text-3xl md:text-[44px] font-semibold leading-[1.05] tracking-[-1px]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="mt-4 mb-7 text-center font-satoshi text-base md:text-lg text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different
          <br />
          fields, from technology to the arts, and make a difference in your
          career and life.
        </p>

        <Tags
          value={data.skilTags}
          button={
            <button className="px-3 py-3 font-satoshi cursor-pointer text-[#003BE2]">
              + More
            </button>
          }
        />
      </div>
    </section>
  );
}
