import { Eye, EyeClosed } from "lucide-react";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { showToast } from "../utils/toast";

const SignIn = () => {
  const { signIn, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          showToast.success("Successfully sign in");
          form.reset();
          navigate(location.state || "/");
        }
      })
      .catch((error) => {
        showToast.error(error.message);
      });
  };

  // google sign in
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          showToast.success("Successfully sign in with google");
        }
      })
      .catch((error) => {
        showToast(error.message);
      });
  };

  return (
    <>
      {/* Glassmorphic Container */}
      <div className="relative w-full max-w-md mx-auto card backdrop-blur-xl bg-base-100/70 border border-base-content/10 shadow-2xl rounded-3xl overflow-hidden my-8">
        <div className="card-body p-8 sm:p-10">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary font-black text-xl mb-2">
              ⚡
            </div>
            <h2 className="text-3xl font-black tracking-tight text-base-content">
              Welcome Back
            </h2>
            <p className="text-xs sm:text-sm text-base-content/60">
              Sign in to manage your account & dashboard
            </p>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline border-base-content/15 hover:border-primary bg-base-100/80 hover:bg-base-200 text-base-content font-medium rounded-2xl w-full h-12 shadow-sm transition-all duration-200 flex items-center justify-center gap-3 group"
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
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="divider text-xs text-base-content/40 font-semibold my-6">
            OR EMAIL
          </div>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
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
                  name="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-primary pl-11 text-sm font-medium transition-all"
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

            {/* Password Field with Show/Hide Toggle */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-primary pl-11 pr-11 text-sm font-medium transition-all"
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-base-content/50 hover:text-primary transition-colors rounded-xl cursor-pointer"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeClosed></EyeClosed> : <Eye></Eye>}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="label cursor-pointer p-0 gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-xs rounded-md"
                />
                <span className="label-text text-xs font-medium text-base-content/70">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary rounded-2xl w-full h-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 font-bold text-sm tracking-wide mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-base-content/70 mt-6">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-primary font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
