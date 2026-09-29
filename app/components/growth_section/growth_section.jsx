import Image from "next/image";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import data from "../../../data/data.json";

export default function GrowthSection() {
  return (
    <section className="bg-white">
      <div className="w-full overflow-hidden py-30 bg-[radial-gradient(circle_at_25%_15%,#efffc0_0%,transparent_35%),radial-gradient(circle_at_90%_20%,#e8ecff_0%,transparent_35%),radial-gradient(circle_at_10%_85%,#dce4ff_0%,transparent_30%),radial-gradient(circle_at_80%_85%,#dfe6ff_0%,transparent_35%)]">
        <div className="max-w-314.5 space-y-18 w-full mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="pl-10">
              <h2 className="font-satoshi text-[44px] font-semibold  text-[#20232D]">
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>

              <p className="mt-10 font-satoshi text-lg text-[#4B4C53]">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey.
                <br />
                Whether you are looking to sharpen specific skills, gain
                industry expertise, or embark on a new career path entirely, we
                have the resources you need.
              </p>

              <div className="mt-10 flex gap-8">
                <div>
                  <h3 className="font-sans text-4xl font-medium text-[#003BE2]">
                    12K
                  </h3>
                  <p className="font-satoshi text-lg text-[#4B4C53]">
                    Students
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-4xl font-medium text-[#003BE2]">
                    70+
                  </h3>
                  <p className="font-satoshi text-lg text-[#4B4C53]">Courses</p>
                </div>

                <div>
                  <h3 className="font-sans text-4xl font-medium text-[#003BE2]">
                    16
                  </h3>
                  <p className="font-satoshi text-lg text-[#4B4C53]">
                    Creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Artwork */}
            <div className="relative flex h-138 items-center justify-center">
              {/* Course Card */}
              <div className="absolute left-5 top-2 z-10 h-96 max-w-93.25 w-full rounded-3xl border border-[#D9DCE2] bg-white p-4 shadow-sm">
                <div className="relative h-[195.14px] w-full overflow-hidden rounded-[10px]">
                  <div className="w-85.25 h-48.75">
                    <Image
                      src="/images/others/card.jpg"
                      alt="Course"
                      width={341}
                      height={195}
                      className="object-cover "
                    />
                  </div>
                  <div className="absolute font-satoshi bottom-[19.14px] left-3 right-3 flex text-xs items-center justify-between">
                    <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm ">
                      12 Leasons
                    </span>

                    <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm">
                      2 hours 5 min
                    </span>

                    <span className="rounded-full bg-white/80 px-3 py-1.5  text-[#4F4F4F] backdrop-blur-sm">
                      21 comments
                    </span>
                  </div>
                </div>

                <h4 className="mt-2 truncate font-sans text-black text-xl font-semibold">
                  Learn Figma from Basic
                </h4>

                <p className="text-xs text-[#4F4F4F]">
                  by <span className="text-[#003BE2]">purepural studio</span>
                </p>

                <div className="flex gap-3">
                  <div className="mt-2 flex items-center gap-2 font-satoshi w-30 justify-center rounded-full bg-[#F5F5F6] text-[#4F4F4F]">
                    <FiBarChart />

                    <span className="rounded-full bg-[#F5F5F6] px-2 py-1 text-xs">
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
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-satoshi text-xl leading-none font-bold text-[#003BE2]">
                    $25
                  </span>

                  <span className="text-xs text-[#4F4F4F]">/Lifetime</span>
                </div>
              </div>

              {/* Person */}
              <Image
                src="/images/others/mode_ml.png"
                alt=""
                width={577}
                height={540}
                className="absolute bottom-0 top-12 -right-6 z-20 h-full w-144.25 object-contain"
              />

              {/* Progress Card */}
              <div className="absolute right-6 top-50 z-30 max-w-58 space-y-2 rounded-2xl bg-white p-4 shadow-md">
                <p className="text-sm font-satoshi leading-none text-[#242528]">
                  Learning Progress
                </p>

                <p className="font-sans text-[#242528] leading-none text-5xl font-semibold">
                  55%
                </p>

                <div className="h-2 w-50 rounded-full bg-[#F6F6F6]">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                </div>
              </div>

              {/* Decorative Shape - ON TOP */}
              <div className="absolute -right-1.25 top-12 z-40 h-54 w-54 rotate-[-8deg]">
                <Image
                  src="/images/others/Frame.png"
                  alt="vector"
                  width={215}
                  height={215}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid  grid-cols-2 items-center justify-center gap-10">
            {/* Left Artwork */}
            <div className="relative flex h-149 items-center justify-center">
              {/* Revenue Card */}
              <div className="absolute left-18 top-8 font-satoshi z-10 w-58 rounded-lg bg-[#003BE2] p-4 text-white">
                <p className="">Total Revenue</p>
                <p className="text-[10px]">July 1-28</p>

                <p className="mt-2 font-satoshi text-2xl font-semibold">
                  $120.29
                </p>

                <div className="h-2 w-50 rounded-full bg-[#F6F6F6]">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                </div>
              </div>

              {/* Year Card */}
              <div className="absolute left-18 top-42 z-10 w-32.5 rounded-lg bg-[#003BE2] p-3 text-white">
                <p className="">Year to Date</p>
                <p className="text-[10px]">2023</p>

                <p className="my-2 font-satoshi text-2xl font-semibold">
                  $1,200.38
                </p>
                <p className="border rounded-full w-9.5 text-[10px] text-center text-black bg-[#CBFC01]">
                  +12$
                </p>
              </div>

              {/* Person */}
              <div className="place-items-center">
                <Image
                  src="/images/others/model_fl.png"
                  alt=""
                  width={320}
                  height={420}
                  className="absolute top-0 left-30 z-20 max-w-108.75 w-full h-149 object-contain"
                />
              </div>

              {/* Students Card */}
              <div className="absolute bottom-40 right-5 z-30 w-64.5 rounded-xl bg-white p-4 shadow-md">
                <p className="font-satoshi text-[#242528]">Happy Students</p>

                <p className="flex items-center gap-1 mb-2 text-[10px] font-satoshi text-[#777B84]">
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
                      className="h-10.75 w-10.75   rounded-full border border-white object-cover"
                    />
                  ))}

                  <span className="flex h-10.75 w-10.75 items-center font-semibold justify-center rounded-full border-2 border-white bg-[#CBFC01]  text-xs text-[#080D1C]">
                    2K+
                  </span>
                </div>
              </div>

              {/* Decorative Shape */}
              <div className="absolute right-18 top-20 z-20  w-54">
                <Image
                  src="/images/shape/shape-1.png"
                  alt="Shape"
                  width={216}
                  height={216}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(91%) sepia(97%) saturate(1400%) hue-rotate(35deg) brightness(102%) contrast(101%)",
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="pr-20">
              <h2 className="max-w-100 font-sans text-[30px] font-semibold text-[#000000]">
                Create & Manage
                <br />
                Courses Easily.
              </h2>

              <p className="my-10 max-w-107.5 font-sans text-lg text-[#4F4F4F]">
                <span className="font-semibold text-[#20232D]">ByteSpace</span>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>

              <div className="space-y-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-satoshi text-lg text-[#242528]"
                  >
                    <FaCheckCircle size={24} className="text-[#003BE2]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
