import Author from "../components/author/author";
import Courses from "../components/courses/courses";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { url } = await params;

  const pages = {
    author: Author,
    courses: Courses,
  };
  const Components = pages[url];

  if (!Components) notFound();

  return <Components />;
}
