import data from "../../../data/data.json";
import { FiVideo } from "react-icons/fi";

export default function Lesson() {
  const modules = data.modules;

  return (
    <section className="md:max-w-[80%] lg:max-w-[60%] mx-auto pb-10 md:pb-15.5 lg:mx-0 w-full bg-white">
      <div className="mb-7">
        <h2 className="text-xl font-semibold font-sans tracking-tight text-[#4B4C53]">
          {modules.title}
        </h2>

        <p className="mt-6 text-[11px] leading-[1.8] text-[#666]">
          {modules.description}
        </p>
      </div>

      {/* Lesson List */}
      <div>
        <h3 className="mb-6 text-xl font-sans font-semibold text-[#242528]">
          {modules.lessonList.title}
        </h3>

        <div className="space-y-5">
          {modules.lessonList.lessons.map((lesson) => (
            <div key={lesson.id} className="flex items-start gap-4">
              {/* Play Icon */}
              <div className="flex h-18 max-w-18 w-full items-center justify-center rounded-3xl bg-[#D4FB20] text-black">
                <FiVideo size={40} />
              </div>

              {/* Lesson Info */}
              <div className="min-w-0">
                <h4 className="font-satoshi font-medium leading-5 text-[#242528]">
                  {lesson.title}
                </h4>

                <p className="mt-1 font-satoshi font-thin text-[#4B4C53]">
                  {lesson.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div>
        <h3 className="my-6 text-xl font-sans font-semibold text-black">
          {modules.lessonContent.title}
        </h3>

        <p className="font-sans text-[#4B4C53]">
          {modules.lessonContent.description}
        </p>
      </div>

      {/* Lesson Progress */}
      <div className="mt-6">
        <h3 className="mb-6 text-xl font-semibold text-black">
          {modules.lessonProgress.title}
        </h3>

        <p className="font-satoshi text-[#4B4C53]">
          {modules.lessonProgress.description}
        </p>

        {/* Progress */}
        <div className="mt-5 p-4 border font-satoshi border-gray-200 rounded-2xl backdrop-blur-20">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-satoshi font-medium text-[#242528]">
              {modules.lessonProgress.progress.label}
            </span>

            <span className="text-4xl font-satoshi font-semibold text-[#242528]">
              {modules.lessonProgress.progress.percentage}%
            </span>
          </div>

          <div className="h-1.5 mt-2 max-w-180.75 w-full overflow-hidden rounded-full bg-[#e6e6e6]">
            <div
              className="h-full rounded-full bg-[#D4FB20] transition-all duration-500"
              style={{
                width: `${modules.lessonProgress.progress.percentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
