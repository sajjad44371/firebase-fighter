import { Link } from "react-router";

const SignUp = () => {
  return (
    <>
      <div className="relative w-full max-w-md mx-auto card backdrop-blur-xl bg-base-100/70 border border-base-content/10 shadow-2xl rounded-3xl overflow-hidden my-8">
        <div className="card-body p-8 sm:p-10">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/10 text-secondary font-black text-xl mb-2">
              🚀
            </div>
            <h2 className="text-3xl font-black tracking-tight text-base-content">
              Create Account
            </h2>
            <p className="text-xs sm:text-sm text-base-content/60">
              Join us today and explore modern capabilities
            </p>
          </div>

          {/* Google Register Button */}
          <button
            type="button"
            className="btn btn-outline border-base-content/15 hover:border-secondary bg-base-100/80 hover:bg-base-200 text-base-content font-medium rounded-2xl w-full h-12 shadow-sm transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="divider text-xs text-base-content/40 font-semibold my-5">
            OR REGISTER
          </div>

          {/* Form */}
          <form className="space-y-3.5">
            {/* Full Name Field */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                  Full Name
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pl-11 text-sm font-medium transition-all"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                  Email Address
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pl-11 text-sm font-medium transition-all"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pl-11 pr-11 text-sm font-medium transition-all"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                {/* Password Toggle Button */}
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-base-content/50 hover:text-secondary transition-colors rounded-xl"
                  title="Show password"
                >
                  Show
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                  Confirm Password
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pl-11 pr-11 text-sm font-medium transition-all"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>

                {/* Confirm Password Toggle Button */}
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-base-content/50 hover:text-secondary transition-colors rounded-xl"
                >
                  Show
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="pt-1">
              <label className="label cursor-pointer p-0 gap-2.5 justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary checkbox-xs rounded-md"
                  required
                />
                <span className="label-text text-xs text-base-content/70">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-secondary font-semibold hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  &{" "}
                  <a
                    href="#"
                    className="text-secondary font-semibold hover:underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-secondary rounded-2xl w-full h-12 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 font-bold text-sm tracking-wide mt-2"
            >
              Get Started Free
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-base-content/70 mt-5">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-secondary font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
