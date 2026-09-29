import Image from "next/image";
import data from "../../../data/data.json";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] pt-18.5 pb-15.25">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-70 w-105 -translate-x-1/2 rounded-full bg-lime-200/70 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-75 w-87.5 rounded-full bg-indigo-200/50 blur-[100px]" />

      <div className="relative mx-auto container">
        {/* Header */}
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
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-10.25 grid-cols-1 md:grid-cols-3">
          {data.community.map((data) => (
            <article
              key={data.name}
              className="group p-6 relative rounded-3xl bg-white px-5 pb-6 pt-5 shadow-[0_10px_35px_rgba(0,0,0,0.03)]"
            >
              {/* Avatar */}
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

              {/* User info */}
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

              {/* Quote */}
              <p className="text-lg leading-[1.75] font-satoshi text-[#4F4F4F]">
                {data.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
