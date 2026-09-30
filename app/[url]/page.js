import NotFound from "../../not-found";
import Author from "../components/author/author";
import Courses from "../components/courses/courses";
import AuthHero from "../components/auth/auth_Hero";

export default async function Page({ params }) {
  const { url } = await params;

  const pages = {
    author: Author,
    courses: Courses,
    login: AuthHero,
    registration: AuthHero,
  };

  const Components = pages[url];

  if (!Components) return <NotFound />;

  return <Components mode={url} />;
}
