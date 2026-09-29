import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import data from "../../../data/data.json";

export default function Courses() {
  return (
    <section className="w-full bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {data.courses.map((course) => (
          <div
            key={course.title}
            className="w-full rounded-3xl border border-[#CED0D3] p-4"
          >
            <div className="relative h-[195.14px] w-full overflow-hidden rounded-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />

              <div className="absolute font-satoshi bottom-[19.14px] left-3 right-3 flex text-xs items-center justify-between">
                <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm ">
                  {course.lessons}
                </span>

                <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm">
                  {course.duration}
                </span>

                <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm">
                  {course.comments}
                </span>
              </div>
            </div>

            <div className="mt-5 mb-4 flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="truncate text-xl font-semibold font-sans text-[#080D1C] overflow-hidden ">
                  {course.title}
                </h3>

                <p className="mt-0.5  text-xs text-[#4F4F4F]">
                  by
                  <Link href={course.authLink} className="text-[#003BE2] ml-1">
                    {course.author}
                  </Link>
                </p>
              </div>

              <div className="ml-2 flex shrink-0 items-center gap-1 text-lg text-[#CED0D3]">
                <span className="text-[#4F4F4F]">{course.rating}</span>
                <FaStar size={15} />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-[#F5F5F6] text-[#4B4C53] px-2 py-1">
                <FiBarChart size={20} />

                <span className="font-satoshi text-xs text-[#4B4C53]">
                  Beginner
                </span>
              </div>

              <div className="flex -space-x-3">
                {data.visitor_images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={48}
                    height={48}
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  />
                ))}

                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#CBFC01]  text-sm text-[#080D1C]">
                  26+
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-end gap-1">
              <span className="font-satoshi text-xl leading-none font-bold text-[#003BE2]">
                {course.price}
              </span>

              <span className="text-xs text-[#4F4F4F]">/Lifetime</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
