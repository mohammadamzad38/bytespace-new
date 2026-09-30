import Image from "next/image";
import data from "../../../data/data.json";
import { FaCheckCircle } from "react-icons/fa";

export default function CourseAbout() {
  const about = data.about;

  return (
    <section className="md:max-w-[80%] lg:max-w-[60%] mx-auto pb-10 md:pb-15.5 lg:mx-0 w-full bg-white">
      <div>
        <h2 className="mb-4 text-[16px] font-semibold tracking-tight text-[#252525]">
          {about.description.title}
        </h2>

        <div className="space-y-5">
          {about.description.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-satoshi leading-[1.8] text-[#4B4C53]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-6 text-[16px] font-sans font-semibold tracking-tight text-[#252525]">
          {about.sneakPeak.title}
        </h2>

        <div className="grid grid-cols-2 gap-5 w-full md:grid-cols-4">
          {about.sneakPeak.images.map((image, index) => (
            <div
              key={index}
              className="relative h-31.25 overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt=""
                width={167}
                height={125}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-6 text-xl font-semibold font-sans tracking-tight text-[#242528]">
          {about.keyPoints.title}
        </h2>

        <ul className="space-y-3">
          {about.keyPoints.items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="flex shrink-0 items-center justify-center ">
                <FaCheckCircle size={24} className="text-[#003BE2]" />
              </span>

              <span className="font-satoshi leading-5 text-[#4B4C53]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
