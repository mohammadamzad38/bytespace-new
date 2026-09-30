"use client";

import Image from "next/image";
import AuthForm from "./auth_Form";
import CourseCard from "../course_Card/courseCard";

export default function AuthHero({ mode }) {
  {
    mode === "login" ? "Sign in with ease" : "Sign up and come in";
  }

  const authContent = {
    login: {
      title: "Sign in with ease",
      description:
        "Log in to your account and continue your learning journey with ease.",
    },
    registration: {
      title: "Sign up and come in",
      description:
        "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    },
  };

  const { title, description } = authContent[mode] || authContent.registration;

  return (
    <section className="relative min-h-screen h-full w-full overflow-hidden pb-380 md:pb-0 bg-grid">
      <div className="container relative">
        <div className="relative z-10 px-6 pt-5  lg:px-10">
          <div className="mt-8.75 mb-11">
            <Image
              src="/images/Vector.png"
              alt="ByteSpace"
              width={35}
              height={35}
              className="h-8.75 w-auto object-contain"
            />
          </div>

          <div className="max-w-125">
            <h1 className="text-xl font-semibold leading-tight text-white sm:text-base">
              {title}
            </h1>

            <p className="mt-4 text-lg font-satoshi leading-7 text-white sm:text-[14px]">
              {description}
            </p>
          </div>

          <div className="relative mt-13">
            <div className="absolute left-2.5 top-32 z-10  sm:left-5">
              <CourseCard
                courseId={2}
                className={
                  "grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1"
                }
              />
            </div>

            <div className="absolute left-25 top-8.75 z-30 sm:left-38.75">
              <CourseCard
                courseId={1}
                className={
                  "grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1"
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-34 w-full max-w-113.25 hidden md:block">
          <AuthForm mode={mode} />
        </div>
      </div>
      <div className="absolute bottom-20 md:hidden">
        <AuthForm mode={mode} />
      </div>
    </section>
  );
}
