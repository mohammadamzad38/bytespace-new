const lime = "#d4ff1f";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pb-20 sm:pb-24 md:pb-28 lg:pb-31.25 text-white"
      style={{
        fontFamily: "Poppins, system-ui, sans-serif",
        backgroundColor: "#0038e0",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
        backgroundSize: "75px 75px",
      }}
    >
      <h1
        className="font-bold leading-none text-[180px] sm:text-[220px] md:text-[320px] lg:text-[480px]"
        style={{
          background: `linear-gradient(${lime} 40%, transparent 95%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        404
      </h1>

      <h2 className="relative -mt-10 max-w-5xl text-4xl font-semibold sm:-mt-14 sm:text-5xl md:-mt-20 md:text-6xl lg:-mt-28 lg:text-7xl">
        The page you are looking for doesn’t exist
      </h2>

      <p className="mt-5 text-base sm:mt-6 sm:text-lg md:mt-7 lg:mt-8 lg:text-lg">
        Try to use a correct url or go back to homepage to start again
      </p>

      <a
        href="/"
        className="mt-6 rounded-full px-5 py-2.5 text-base font-medium text-black transition-transform hover:scale-90 sm:mt-7 sm:px-6 sm:py-3 sm:text-lg lg:mt-8"
        style={{ background: lime }}
      >
        Back to Home
      </a>
    </div>
  );
}
