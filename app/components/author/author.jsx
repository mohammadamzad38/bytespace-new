import React from "react";
import FilterBar from "../filterBar/filter_Bar";
import Courses from "../course_Card/courseCard";
import Profile from "./profile/profile";

export default function Author() {
  return (
    <div className="pb-15.25 bg-white">
      <div>
        <Profile />
      </div>
      <div>
        <div className="pb-10 pt-15.5">
          <FilterBar />
        </div>
        <Courses />
      </div>
    </div>
  );
}
