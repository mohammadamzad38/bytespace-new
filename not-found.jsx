const lime = "#d4ff1f";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center pb-31.25 text-white px-4"
      style={{
        fontFamily: "Poppins, system-ui, sans-serif",
        backgroundColor: "#0038e0",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
        backgroundSize: "75px 75px",
      }}
    >
      <h1
        className="font-bold leading-none"
        style={{
          fontSize: "480px",
          background: `linear-gradient(${lime} 40%, transparent 95%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        404
      </h1>
      <h2 className="text-7xl font-semibold max-w-5xl -mt-28 relative">
        The page you are looking for doesn’t exist
      </h2>
      <p className="text-lg mt-8">
        Try to use a correct url or go back to homepage to start again
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-3 rounded-full text-lg font-medium transition-transform hover:scale-90 text-black"
        style={{ background: lime }}
      >
        Back to Home
      </a>
    </div>
  );
}
