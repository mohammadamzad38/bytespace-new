import { FaStar } from "react-icons/fa6";
import { notFound } from "next/navigation";
import { FiBarChart } from "react-icons/fi";
import Btn from "../../components/button/btn";
import { MdOutlineShare } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import EnrollCard from "../../components/enroll_Card/enroll_Card";
import TabsController from "../../components/controller/tabs_controller";

export default async function Page({ params }) {
  const { url } = await params;

  if (!url) notFound();

  return (
    <div>
      <div className="bg-grid pt-13">
        <div className="container relative">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center  ">
            <h1 className="text-4xl font-sans text-[#F5F5F6] font-semibold">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <Btn
              text={"Share"}
              href={""}
              className="flex items-center gap-2 font-satoshi text-[#242528] bg-[#D4FB20] rounded-3xl py-2 px-6"
              icon={<MdOutlineShare size={24} />}
            />
          </div>
          <h2 className="text-xl mt-2 font-semibold font-sans">
            Unlock the Power of Digital Creation with Expert Guidance
          </h2>
          <h3 className="py-6 text-lg font-satoshi">by purepearl studio</h3>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pb-14.75">
            <Btn
              text={"Intermediate"}
              href={""}
              className="flex items-center gap-2 font-satoshi text-[#242528] bg-white rounded-3xl py-2 px-6"
              icon={<FiBarChart size={24} className="text-[#003BE2]" />}
            />
            <Btn
              text={"4.8 (172 reviews)"}
              href={""}
              className="flex items-center gap-2 font-satoshi text-[#242528] bg-white rounded-3xl py-2 px-6"
              icon={<FaStar size={24} className="text-[#003BE2]" />}
            />
            <Btn
              text={"199 Students"}
              href={""}
              className="flex items-center gap-2 font-satoshi text-[#242528] bg-white rounded-3xl py-2 px-6"
              icon={<MdOutlinePeople size={24} className="text-[#003BE2]" />}
            />
          </div>
          <div className="relative overflow-hidden flex justify-center lg:justify-start items-center pb-15.5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sRWcJrMTtMI?si=itTWUGJW0QqIfd6I&amp;controls=0&amp;start=14"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-3xl"
            ></iframe>
          </div>

          <div className="absolute z-20 top-62 right-0 hidden lg:block">
            <EnrollCard />
          </div>
        </div>
      </div>

      <div>
        <TabsController />
      </div>
    </div>
  );
}
