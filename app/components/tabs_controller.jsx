"use client";

import { useState } from "react";
import About from "../components/about/about";
import Lesson from "../components/lesson/courseLessons";
import Reviews from "../components/review/course_Reviews";

const tabs = [
  { label: "About", content: <About /> },
  { label: "Lessons", content: <Lesson /> },
  { label: "Reviews", content: <Reviews /> },
];

export default function TabsController() {
  const [active, setActive] = useState(0);

  return (
    <div className="font-satoshi min-h-screen pt-15  bg-white">
      <div className="flex items-center justify-center lg:justify-start gap-3 container">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm transition-colors ${
              i === active
                ? "bg-[#CBFC01] text-black"
                : "bg-[#F1F2F4] text-[#4B4C53]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 container">{tabs[active].content}</div>
    </div>
  );
}
