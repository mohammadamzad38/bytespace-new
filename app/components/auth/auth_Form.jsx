"use client";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function AuthForm({ mode = "login" }) {
  const isSignUp = mode === "registration";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      console.log("Signup");
    } else {
      console.log("Signin");
    }
  };

  return (
    <main>
      <div className="rounded-[13px] bg-white px-16 pt-15 pb-12.75 ">
        <div>
          <p className="text-lg font-satoshi font-normal text-[#003BE2]">
            {isSignUp ? "Create an Account" : "Sign In"}
          </p>

          <h1 className="mt-1 text-4xl lf:text-[44px] font-sans font-semibold text-black">
            {isSignUp ? (
              <>
                Welcome to
                <br />
                ByteSpace
              </>
            ) : (
              "Welcome Back"
            )}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          {isSignUp && (
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-satoshi font-medium text-[#333]"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jamie Davis"
                required
                className="h-13 w-full rounded-xl border border-[#e3e3e3] px-6 py-3 text-sm text-[#333] outline-none"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-satoshi font-medium text-[#333]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="designer@example.com"
              required
              className="h-13 w-full rounded-xl border border-[#e3e3e3] px-6 py-3 text-sm text-[#333] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-satoshi font-medium text-[#333]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="h-13 w-full rounded-xl border border-[#e3e3e3] px-6 py-3 text-sm text-[#333] outline-none"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-3xl cursor-pointer bg-[#D4FB20] px-6 py-3 text-lg font-medium text-[#222] transition hover:bg-[#b9ed00]"
            >
              {isSignUp ? "Continue" : "Sign In"}
            </button>
          </div>
        </form>

        {mode === "login" && (
          <div className="mt-18">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-[#dedede]" />

              <span className="text-[9px] text-[#888]">or</span>

              <div className="h-px flex-1 bg-[#dedede]" />
            </div>

            <div className="mt-10 flex justify-center gap-3">
              <button
                type="button"
                className="flex cursor-pointer h-18 w-18 items-center justify-center rounded-[13px] border border-[#dedede] text-black transition hover:bg-gray-50"
              >
                <FaFacebookF size={40} />
              </button>

              <button
                type="button"
                className="flex h-18 w-18 items-center cursor-pointer justify-center rounded-[13px] border border-[#dedede] text-black transition hover:bg-gray-50"
              >
                <FaGoogle size={40} />
              </button>
            </div>
          </div>
        )}

        <div className="mt-18.25 text-center">
          <p className="font-satoshi text-[#888888]">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <Link href="/login" className="text-[#0755e9] hover:underline">
                  Login
                </Link>
              </>
            ) : (
              <>
                New user?{" "}
                <Link
                  href="/registration"
                  className="text-[#0755e9] hover:underline"
                >
                  Create an account
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
