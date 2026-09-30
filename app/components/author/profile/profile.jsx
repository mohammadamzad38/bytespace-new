import Image from "next/image";
import Btn from "../../button/btn";

export default function Profile({ products = 5, followers = 10 }) {
  const stats = [
    { value: products, label: "Products" },
    { value: followers, label: "Followers" },
  ];

  return (
    <section className="bg-grid font-satoshi text-white">
      <div className="container pt-13 pb-20.5">
        <div className="flex items-center gap-6">
          <Image
            src={"/images/author.png"}
            width={96}
            height={96}
            alt="Author"
            className="size-15 rounded-3xl object-cover"
          />
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl md:text-4xl font-sans font-semibold">
                PurePearl Studio
              </h1>
              <span className="rounded-3xl bg-[#CBFC01] px-6 py-2 text-black">
                Creator
              </span>
            </div>
            <p className="mt-2 font-satoshi text-lg">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        <p className="mt-10 whitespace-pre-line text-lg font-satoshi">
          Welcome to the creative world of [Creator's Name]. Here, you'll
          discover the passion, expertise, and inspiration that drive my
          creative journey. Let's explore and learn together! ive into my
          creative portfolio, showcasing a glimpse of my artistic endeavors.{" "}
          <br />
          From digital designs to multimedia projects, each piece tells a unique
          story. Explore the world of creativity with me.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {stats.map(({ value, label }) => (
              <span
                key={label}
                className="rounded-3xl bg-white px-6 py-3 text-lg font-satoshi text-black"
              >
                <b className="mr-1 font-normal text-[#003BE2]">{value}</b>
                {label}
              </span>
            ))}
          </div>
          <Btn
            href={""}
            className="cursor-pointer rounded-3xl font-medium bg-[#CBFC01] px-6 py-3 text-lg font-satoshi text-black"
            text={" Follow"}
          />
        </div>
      </div>
    </section>
  );
}
