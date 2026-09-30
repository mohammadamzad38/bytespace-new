import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import data from "../../../data/data.json";

export default function Reviews() {
  const reviews = data.reviews;

  return (
    <section className="md:max-w-[80%] lg:max-w-[60%] mx-auto pb-10 md:pb-23 lg:mx-0 w-full bg-white">
      {/* Header */}
      <div>
        <h2 className="text-xl font-sans font-semibold text-[#242528]">
          {reviews?.title}
        </h2>

        <p className="my-6 font-satoshi text-[#4B4C53]">
          {reviews.description}
        </p>
      </div>

      {/* Rating Summary */}
      <div className="rounded-2xl border border-[#CED0D3] p-4 md:p-10">
        <div className="flex flex-wrap items-center gap-6">
          {/* Overall Rating */}
          <div className="flex h-35 max-w-32.25 w-full flex-col items-center justify-center rounded-lg bg-[#D4FB20]">
            <span className="text-sm font-medium text-[#242528] font-satoshi">
              Ratings
            </span>

            <span className="text-4xl font-semibold  text-[#242528]">
              {reviews.summary.rating}
            </span>
          </div>

          {/* Rating Bars */}
          <div className="flex flex-1 flex-col gap-1">
            {reviews.summary.ratingDistribution.map((item) => (
              <div key={item.rating} className="flex items-center gap-4">
                {/* Rating Bar */}
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#e5e5e5]">
                  <div
                    className="h-full rounded-full bg-[#D4FB20]"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                {/* Stars */}
                <div className="flex shrink-0">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <MdOutlineStar
                      key={index}
                      size={24}
                      className="text-[#555]"
                    />
                  ))}
                </div>

                {/* Count */}
                <span className="w-8 text-right font-satoshi text-[#4B4C53]">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-6">
        <h3 className="mb-6 text-xl font-sans font-semibold text-black">
          {reviews.individualReviews.title}
        </h3>
     
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          {reviews.individualReviews.filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-3xl px-4 cursor-pointer py-3 font-satoshi transition ${
                index === 0
                  ? "bg-[#D4FB20] text-[#222]"
                  : "bg-[#f4f4f4] text-[#555] hover:bg-[#e9e9e9]"
              }`}
            >
              {index === 0 ? (
                filter
              ) : (
                <span className="flex items-center gap-1">
                  <MdOutlineStar size={24} />
                  {filter}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Review Cards */}
        <div className="space-y-3">
          {reviews.individualReviews.items.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-[#CED0D3] p-10"
            >
              {/* User */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={52}
                    height={52}
                    className="h-13 w-13 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-lg font-satoshi leading-none font-medium text-[#242528]">
                      {review.name}
                    </h4>

                    <p className="font-satoshi text-[#4B4C53]">{review.role}</p>
                  </div>
                </div>

                <span className="font-satoshi text-[#4B4C53]">
                  {review.date}
                </span>
              </div>

              {/* Stars */}
              <div className="my-6 flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <MdOutlineStar
                    key={index}
                    size={24}
                    className="text-[#4B4C53]"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="font-satoshi text-[#4B4C53]">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
