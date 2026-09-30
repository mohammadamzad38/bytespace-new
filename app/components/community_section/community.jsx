import Link from "next/link";
import Image from "next/image";
import data from "../../../data/data.json";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] pt-18.5 pb-15.25">
      <div className="relative mx-auto container">
        <div className="pointer-events-none absolute left-1/2 -top-45 h-168 w-2xl -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]" />

        <div className="pointer-events-none absolute -right-110 -top-45 h-285 w-285 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]" />

        <div className="pointer-events-none absolute -bottom-90 -left-100 h-285 w-285 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]" />

        <div className="relative z-10">
          <div className="mb-18 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="max-w-md text-[44px] font-semibold leading-14 text-black">
                Discover What Our
                <br />
                Community Is Saying
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg font-satoshi text-[#4F4F4F]">
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating
                on our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10.25 md:grid-cols-3">
            {data.community.map((data) => (
              <article
                key={data.name}
                className="group relative rounded-3xl bg-white px-5 pb-6 pt-5 shadow-[0_10px_35px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-6">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 ring-4 ring-gray-50">
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={80}
                      height={80}
                      className="h-full w-20 object-cover"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-sans font-semibold text-gray-900">
                    {data.name}
                  </h3>

                  <Link
                    href={""}
                    className="text-lg font-satoshi font-medium text-[#003BE2]"
                  >
                    {data.role}
                  </Link>
                </div>

                <p className="text-lg leading-[1.75] font-satoshi text-[#4F4F4F]">
                  {data.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
