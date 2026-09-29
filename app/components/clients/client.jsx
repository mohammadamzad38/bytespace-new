import Image from "next/image";
import data from "../../../data/data.json";

export default function Client() {
  return (
    <section className="w-full bg-[#F5F5F6]">
      <div className="mx-auto flex flex-wrap gap-6 items-center justify-around py-20 container">
        {data?.logos?.map((icon, index) => (
          <div
            key={index}
            className="flex h-8 md:h-10.25 w-32 md:w-41.5 items-center justify-center"
          >
            <Image
              src={icon}
              width={150}
              height={150}
              alt="Logoipsum"
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
