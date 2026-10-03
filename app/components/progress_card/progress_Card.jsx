export default function ProgressCard({ className }) {
  return (
    <div
      className={`
        className ||
        "absolute right-6 top-50 z-30 p-3 md:p-4 max-w-35 md:max-w-58 space-y-2 rounded-2xl bg-white shadow-md"
      `}
    >
      <p className="font-satoshi text-sm leading-none text-[#242528]">
        Learning Progress
      </p>

      <p className="font-sans text-2xl md:text-5xl font-semibold leading-none text-[#242528]">
        55%
      </p>

      <div className="h-2 w-30 md:w-50 rounded-full bg-[#F6F6F6]">
        <div className="h-full w-[35%]  md:w-[55%] rounded-full bg-[#D4FB20]" />
      </div>
    </div>
  );
}
