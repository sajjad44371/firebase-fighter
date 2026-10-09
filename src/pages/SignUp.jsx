import { Eye, EyeClosed } from "lucide-react";
import { use, useState } from "react";
import { Link } from "react-router";
import { showToast } from "../utils/toast";
import { AuthContext } from "../context/AuthContext";
import PasswordChecker from "../components/PasswordChecker";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile, emailVerification } =
    use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isPasswordValid =
    /[a-z]/.test(checkPassword) &&
    /[A-Z]/.test(checkPassword) &&
    /\d/.test(checkPassword) &&
    /[^A-Za-z0-9]/.test(checkPassword);

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.email.value.trim();
    const displayName = form.name.value.trim();
    const photoURL = form.photo.value.trim();

    if (!isPasswordValid) {
      showToast.error(
        "Password must contain uppercase, lowercase, number, and special character.",
      );
      return;
    }

    if (checkPassword !== confirmPassword) {
      showToast.error("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      const userCredential = await createUser(email, checkPassword);

      if (userCredential?.user) {
        // update profile
        updateUserProfile(userCredential?.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            // email verification
            emailVerification(userCredential?.user)
              .then(() => {
                showToast.success(
                  "User created successfully and sent email verification link",
                );
                form.reset();
                setCheckPassword("");
                setConfirmPassword("");
              })
              .catch((error) => {
                showToast.error(error.message);
              });
          })
          .catch((error) => {
            showToast.error(error.message);
          });
      }
    } catch (error) {
      showToast.error(error?.message || "Unable to create your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // sign in with google
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
    <div className="relative w-full max-w-md mx-auto card backdrop-blur-xl bg-base-100/70 border border-base-content/10 shadow-2xl rounded-3xl overflow-hidden my-8">
      <div className="card-body p-8 sm:p-10">
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

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-outline border-base-content/15 hover:border-primary bg-base-100/80 hover:bg-base-200 text-base-content font-medium rounded-2xl w-full h-12 shadow-sm transition-all duration-200 flex items-center justify-center gap-3 group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
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

        <div className="divider text-xs text-base-content/40 font-semibold my-5">
          OR REGISTER
        </div>

        <form onSubmit={handleSignUp} className="space-y-3.5">
          {/* name  */}
          <div className="form-control">
            <label htmlFor="name" className="label pb-1">
              <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                Name
              </span>
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary text-sm font-medium transition-all"
              required
              autoComplete="name"
            />
          </div>

          {/* photo  */}
          <div className="form-control">
            <label htmlFor="photo" className="label pb-1">
              <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                PhotoURL
              </span>
            </label>

            <input
              id="photo"
              type="text"
              name="photo"
              placeholder="Provide your photo URL"
              className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary text-sm font-medium transition-all"
              required
              autoComplete="photo"
            />
          </div>

          {/* email  */}
          <div className="form-control">
            <label htmlFor="email" className="label pb-1">
              <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                Email Address
              </span>
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary text-sm font-medium transition-all"
              required
              autoComplete="email"
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label pb-1">
              <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                Password
              </span>
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={checkPassword}
                onChange={(event) => setCheckPassword(event.target.value)}
                placeholder="••••••••"
                className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pr-11 text-sm font-medium transition-all"
                required
                autoComplete="new-password"
                minLength={8}
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-base-content/50 hover:text-secondary transition-colors rounded-xl cursor-pointer"
                onClick={() => setShowPassword((previous) => !previous)}
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <PasswordChecker password={checkPassword} />

          <div className="form-control">
            <label htmlFor="confirmPassword" className="label pb-1">
              <span className="label-text font-semibold text-xs uppercase tracking-wider text-base-content/70">
                Confirm Password
              </span>
            </label>

            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                className="input input-bordered w-full rounded-2xl bg-base-100/80 focus:bg-base-100 border-base-content/15 focus:border-secondary pr-11 text-sm font-medium transition-all"
                required
                autoComplete="new-password"
                minLength={8}
              />

              <button
                type="button"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirmed password"
                    : "Show confirmed password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-base-content/50 hover:text-secondary transition-colors rounded-xl cursor-pointer"
                onClick={() => setShowConfirmPassword((previous) => !previous)}
              >
                {showConfirmPassword ? (
                  <EyeClosed size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="pt-1">
            <label className="label cursor-pointer p-0 gap-2.5 justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-secondary checkbox-xs rounded-md"
                required
              />

              <span className="label-text text-xs text-base-content/70">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-secondary font-semibold hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                &{" "}
                <Link
                  to="/privacy"
                  className="text-secondary font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-secondary rounded-2xl w-full h-12 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 font-bold text-sm tracking-wide mt-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating account..." : "Get Started Free"}
          </button>
        </form>

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
  );
};

export default SignUp;
