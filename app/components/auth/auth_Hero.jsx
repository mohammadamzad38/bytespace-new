"use client";

import Image from "next/image";
import AuthForm from "./auth_Form";
import CourseCard from "../course_Card/courseCard";

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

const cardGrid = "grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1";

export default function AuthHero({ mode }) {
  const { title, description } = authContent[mode] || authContent.registration;

  return (
    <section className="relative w-full overflow-hidden bg-grid pb-60 lg:pb-30">
      <div className="container grid items-start gap-10 md:grid-cols-[1fr_453px]">
        {/* Left: logo, text, cards */}
        <div className="relative z-10 px-6 pt-5 lg:px-10">
          <div className="mb-11 mt-8.75">
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
            <p className="mt-4 font-satoshi text-lg leading-7 text-white sm:text-[14px]">
              {description}
            </p>
          </div>

          {/* Cards are absolute inside, so this box needs its own height */}
          <div className="relative mt-13 h-96">
            <div className="absolute left-2.5 top-32 z-10 sm:left-20">
              <CourseCard courseId={2} className={cardGrid} />
            </div>
            <div className="absolute left-25 top-8.75 z-30 sm:left-38.75">
              <CourseCard courseId={1} className={cardGrid} />
            </div>
          </div>
        </div>

        {/* Right on md+, below on mobile: one form only */}
        <div className="relative z-10 px-6 mt-50 md:mt-20 md:px-0">
          <AuthForm mode={mode} />
        </div>
      </div>
    </section>
  );
}
