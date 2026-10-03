import Image from "next/image";
import data from "../../../data/data.json";
import { FiBarChart } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import StudentCard from "../student_card/student_card";
import ProgressCard from "../progress_card/progress_Card";

const lime =
  "brightness(0) saturate(100%) invert(91%) sepia(98%) saturate(1800%) hue-rotate(35deg) brightness(101%) contrast(101%)";

export default function GrowthSection() {
  return (
    <section className="bg-white ">
      <div className="w-full overflow-hidden ">
        <div
          className="relative mx-auto w-full py-30 overflow-hidden"
          style={{
            background: `
              radial-gradient(
                50% 50% at 0% 0%,
                rgba(203, 252, 1, 0.4) 0%,
                rgba(203, 252, 1, 0.092) 53%,
                rgba(203, 252, 1, 0.024) 75%,
                rgba(203, 252, 1, 0) 100%
              ),
              radial-gradient(
                50% 50% at 100% 0%,
                rgba(0, 59, 226, 0.08) 0%,
                rgba(0, 59, 226, 0.0184) 53%,
                rgba(0, 59, 226, 0.0048) 75%,
                rgba(0, 59, 226, 0) 100%
              ),
              radial-gradient(
                50% 50% at 0% 100%,
                rgba(203, 252, 1, 0.6) 0%,
                rgba(203, 252, 1, 0.138) 53%,
                rgba(203, 252, 1, 0.036) 75%,
                rgba(203, 252, 1, 0) 100%
              ),
              radial-gradient(
                50% 50% at 100% 100%,
                rgba(0, 59, 226, 0.24) 0%,
                rgba(0, 59, 226, 0.0552) 53%,
                rgba(0, 59, 226, 0.0144) 75%,
                rgba(0, 59, 226, 0) 100%
              ),
              #ffffff
            `,
          }}
        >
          <div className="space-y-0 md:space-y-18 container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="pl-10">
                <h2 className="font-satoshi text-3xl md:text-[44px] font-semibold text-[#20232D]">
                  Your Path to Professional
                  <br />
                  Growth Starts Here!
                </h2>

                <p className="my-4 md:my-10 font-satoshi text-sm md:text-lg text-[#4B4C53]">
                  Explore our curated selection of courses tailored to enhance
                  your capabilities and accelerate your career journey.
                  <br />
                  Whether you are looking to sharpen specific skills, gain
                  industry expertise, or embark on a new career path entirely,
                  we have the resources you need.
                </p>

                <div className="flex gap-8">
                  <div>
                    <h3 className="font-sans text-2xl md:text-4xl font-medium text-[#003BE2]">
                      12K
                    </h3>
                    <p className="font-satoshi text-sm md:text-lg text-[#4B4C53]">
                      Students
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl md:text-4xl font-medium text-[#003BE2]">
                      70+
                    </h3>
                    <p className="font-satoshi text-sm md:text-lg text-[#4B4C53]">
                      Courses
                    </p>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl md:text-4xl font-medium text-[#003BE2]">
                      16
                    </h3>
                    <p className="font-satoshi text-sm md:text-lg text-[#4B4C53]">
                      Creators
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex h-138 items-center justify-center">
                <div className="absolute left-5 top-2 z-10 h-96 w-[70%] md:w-full max-w-93.25 rounded-3xl border border-[#D9DCE2] bg-white p-4 shadow-sm">
                  <div className="relative h-[195.14px] w-full overflow-hidden rounded-[10px]">
                    <div className="h-48.75 w-85.25">
                      <Image
                        src="/images/others/card.jpg"
                        alt="Course"
                        width={341}
                        height={195}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="absolute bottom-[19.14px] left-3 right-3 flex items-center justify-between font-satoshi text-xs">
                      <span className="rounded-full bg-white/80 text-[8px] md:text-sm px-2 md:px-3 py-1.5 text-[#4F4F4F] backdrop-blur-sm">
                        12 Leasons
                      </span>

                      <span className="rounded-full bg-white/80 text-xs md:text-sm px-2 md:px-3 py-1.5 text-[#4F4F4F] backdrop-blur-sm">
                        2 hours 5 min
                      </span>

                      <span className="rounded-full bg-white/80 text-xs md:text-sm px-2 md:px-3 py-1.5 text-[#4F4F4F] backdrop-blur-sm">
                        21 comments
                      </span>
                    </div>
                  </div>

                  <h4 className="mt-2 truncate font-sans text-xl font-semibold text-black">
                    Learn Figma from Basic
                  </h4>

                  <p className="text-xs text-[#4F4F4F]">
                    by <span className="text-[#003BE2]">purepural studio</span>
                  </p>

                  <div className="flex gap-3">
                    <div className="mt-2 flex w-30 items-center justify-center gap-2 rounded-full bg-[#F5F5F6] font-satoshi text-[#4F4F4F]">
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
                          className="h-8 md:h-12 w-8 md:w-12 rounded-full border-2 border-white object-cover"
                        />
                      ))}

                      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#CBFC01] text-sm text-[#080D1C]">
                        26+
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-satoshi text-xl font-bold leading-none text-[#003BE2]">
                      $25
                    </span>

                    <span className="text-xs text-[#4F4F4F]">/Lifetime</span>
                  </div>
                </div>

                <Image
                  src="/images/others/mode_ml.png"
                  alt=""
                  width={577}
                  height={540}
                  className="absolute bottom-0 top-12 -right-6 z-20 h-full w-200 md:w-144.25 object-contain"
                />

                <div
                  className={`absolute right-8 lg:right-4 top-60 lg:top-52 z-20 `}
                >
                  <ProgressCard />
                </div>

                <div className="absolute -right-1.25 top-30 lg:top-12 z-40 h-30 md:h-54 w-30 md:w-54 rotate-[-8deg]">
                  <Image
                    src="/images/others/Frame.png"
                    alt="vector"
                    width={215}
                    height={215}
                    className="h-full w-full object-contain"
                    style={{ filter: lime }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 md:gap-10">
              <div className="relative flex flex-col md:flex-row h-130 md:h-149 items-center justify-center">
                <div className="absolute left-18 top-8 z-10 w-58 rounded-lg bg-[#003BE2] p-4 font-satoshi text-white">
                  <p>Total Revenue</p>
                  <p className="text-[10px]">July 1-28</p>

                  <p className="mt-2 font-satoshi text-2xl font-semibold">
                    $120.29
                  </p>

                  <div className="h-2 w-50 rounded-full bg-[#F6F6F6]">
                    <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                  </div>
                </div>

                <div className="absolute left-18 top-42 z-10 w-35 md:w-32.5 rounded-lg bg-[#003BE2] p-3 text-white">
                  <p>Year to Date</p>
                  <p className="text-[10px]">2023</p>

                  <p className="my-2 font-satoshi text-2xl font-semibold">
                    $1,200.38
                  </p>

                  <p className="w-9.5 rounded-full border bg-[#CBFC01] text-center text-[10px] text-black">
                    +12$
                  </p>
                </div>

                <Image
                  src="/images/others/model_fl.png"
                  alt=""
                  width={320}
                  height={420}
                  className="absolute left-30 top-0 z-20 h-149 w-full max-w-108.75 object-contain"
                />

                <StudentCard />

                <div className="absolute -right-10 md:right-18 top-35 md:top-20 z-20 w-30 md:w-54">
                  <Image
                    src="/images/shape/shape-1.png"
                    alt="Shape"
                    width={216}
                    height={216}
                    style={{
                      filter: lime,
                    }}
                  />
                </div>
              </div>

              <div className="md:pr-20">
                <h2 className="max-w-100 font-sans text-[30px] font-semibold text-black">
                  Create & Manage
                  <br />
                  Courses Easily.
                </h2>

                <p className="my-10 max-w-107.5 font-sans text-lg text-[#4F4F4F]">
                  <span className="font-semibold text-[#20232D]">
                    ByteSpace
                  </span>{" "}
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
      </div>
    </section>
  );
}
