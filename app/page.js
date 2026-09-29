import Client from "./components/clients/client";
import Skilstags from "./components/tags/skilstag";
import CourseCard from "./components/course_Card/courseCard";
import GrowthSection from "./components/growth_section/growth_section";
import CourseCategory from "./components/course_Category/course_Category";
import CreatorCta from "./components/creatorCta/creator_cta";
import Community from "./components/community_section/community";

export default function Home() {
  return (
    <main>
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
