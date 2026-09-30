import Client from "./components/clients/client";
import Skilstags from "./components/tags/skilstag";
import CourseCard from "./components/course_Card/courseCard";
import CreatorCta from "./components/creatorCta/creator_cta";
import Community from "./components/community_section/community";
import CoverBanner from "../app/components/cover_banner/cover_Banner";
import GrowthSection from "./components/growth_section/growth_section";
import CourseCategory from "./components/course_Category/course_Category";

export default function Home() {
  return (
    <main>
      <CoverBanner />
      <Client />
      <Skilstags />
      <CourseCard />
      <CourseCategory />
      <GrowthSection />
      <CreatorCta />
      <Community />
    </main>
  );
}
