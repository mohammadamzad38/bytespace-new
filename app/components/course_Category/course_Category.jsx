import Image from "next/image";
import { IoBusiness } from "react-icons/io5";
import {
  MdOutlineLaptop,
  MdDeveloperMode,
  MdDesignServices,
} from "react-icons/md";

import data from "../../../data/data.json";

export default function CourseCategory() {
  const icons = {
    MdDesignServices,
    MdDeveloperMode,
    MdOutlineLaptop,
    IoBusiness,
  };

  return (
    <section className="w-full bg-white">
      <div className="container flex flex-col items-center py-16">
        <h2 className="font-sans text-xl md:text-4xl font-semibold text-[#040819]">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p className="mt-4 text-center font-satoshi text-sm md:text-lg text-[#82868E]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br />
          fields, ensuring there's something for everyone. Unleash your
          potential and explore our carefully curated categories.
        </p>

        <div className="mt-17 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {data.learningPaths.map((category) => {
            const isImage = category.icon.startsWith("/");
            const Icon = icons[category.icon];

            return (
              <div
                key={category.name}
                className="flex flex-col  h-41.75 w-41.75  items-center justify-center rounded-3xl border border-[#D9DCE2]"
              >
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#CBFC01]">
                  {isImage ? (
                    <Image
                      src={category.icon}
                      width={36}
                      height={36}
                      alt={category.name}
                      className="h-9 w-9 object-cover"
                    />
                  ) : (
                    <Icon size={36} className="text-[#080D1C]" />
                  )}
                </div>

                <span className="mt-3 font-satoshi text-xl text-[#242528]">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
