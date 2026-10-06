import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <>
      {/* Cover & Profile Header Card */}
      <div className="card bg-base-100 border border-base-content/10 shadow-xl overflow-hidden rounded-3xl">
        {/* Vibrant Mesh Gradient Cover */}
        <div className="h-44 sm:h-56 bg-linear-to-r from-primary via-accent to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
          <div className="absolute top-4 right-4 bg-base-100/30 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide border border-white/20">
            PRO MEMBER ✨
          </div>
        </div>

        {/* Profile Details Bar */}
        <div className="card-body p-6 sm:p-8 -mt-16 sm:-mt-20 relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left">
              {/* Avatar with Status Indicator */}
              <div className="relative group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl ring-4 ring-base-100 bg-base-100 shadow-xl overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="absolute bottom-1 right-1 w-5 h-5 bg-success border-2 border-base-100 rounded-full"
                  title="Online"
                ></span>
              </div>

              {/* Name & Bio */}
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-base-content">
                    {user?.displayName}
                  </h1>
                  <span className="badge badge-primary badge-sm font-semibold">
                    Verified
                  </span>
                </div>
                <p className="text-sm font-medium text-base-content/60">
                  Senior UI/UX & Web Engineer
                </p>
                <p className="text-xs text-base-content/50 flex items-center justify-center sm:justify-start gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="btn btn-primary rounded-2xl flex-1 sm:flex-none shadow-md shadow-primary/20">
                Edit Profile
              </button>
              <button className="btn btn-outline border-base-content/20 rounded-2xl">
                Share
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-base-200 text-center">
            <div>
              <p className="text-xl sm:text-2xl font-black text-primary">124</p>
              <p className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
                Projects
              </p>
            </div>
            <div className="border-x border-base-200">
              <p className="text-xl sm:text-2xl font-black text-secondary">
                18.5k
              </p>
              <p className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
                Followers
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-accent">4.9★</p>
              <p className="text-xs font-semibold text-base-content/60 uppercase tracking-wider">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation & Form Section */}
      <div className="card bg-base-100 border border-base-content/10 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6">
        {/* Tabs */}
        <div className="flex border-b border-base-200 gap-6 overflow-x-auto no-scrollbar">
          <button
            className={`pb-3 font-bold text-sm transition-all relative whitespace-nowrap `}
          >
            General Info
          </button>

          <button
            className={`pb-3 font-bold text-sm transition-all relative whitespace-nowrap `}
          >
            Security & Password
          </button>

          <button
            className={`pb-3 font-bold text-sm transition-all relative whitespace-nowrap `}
          >
            Preferences
          </button>
        </div>

        {/* General Information Tab Content */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xs uppercase tracking-wider">
                  First Name
                </span>
              </label>
              <input
                type="text"
                defaultValue="Alex"
                className="input input-bordered rounded-2xl bg-base-200/50"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xs uppercase tracking-wider">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                defaultValue="Rivera"
                className="input input-bordered rounded-2xl bg-base-200/50"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xs uppercase tracking-wider">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="input input-bordered rounded-2xl bg-base-200/50"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xs uppercase tracking-wider">
                  Phone Number
                </span>
              </label>
              <input
                type="text"
                defaultValue="+880 1700-000000"
                className="input input-bordered rounded-2xl bg-base-200/50"
              />
            </div>
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-semibold text-xs uppercase tracking-wider">
                  Bio
                </span>
              </label>
              <textarea
                defaultValue="Building modern, accessible, and responsive user experiences with Vite, React, and Tailwind CSS."
                className="textarea textarea-bordered rounded-2xl bg-base-200/50 h-24"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-base-200">
            <button type="button" className="btn btn-ghost rounded-2xl">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary rounded-2xl px-6">
              Save Changes
            </button>
          </div>
        </form>

        {/* Security Tab Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-base-content">
              Change Password
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control sm:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">
                    Current Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered rounded-2xl bg-base-200/50"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">
                    New Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered rounded-2xl bg-base-200/50"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">
                    Confirm New Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered rounded-2xl bg-base-200/50"
                />
              </div>
            </div>
            <button className="btn btn-primary rounded-2xl mt-2">
              Update Password
            </button>
          </div>

          <div className="divider my-6"></div>

          {/* Two-Factor Authentication Toggle */}
          <div className="flex items-center justify-between p-4 bg-base-200/40 rounded-2xl border border-base-200">
            <div>
              <h4 className="font-bold text-sm text-base-content">
                Two-Factor Authentication (2FA)
              </h4>
              <p className="text-xs text-base-content/60">
                Add an extra layer of security to your account.
              </p>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              defaultChecked
            />
          </div>
        </div>

        {/* Preferences Tab Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-base-200/40 rounded-2xl border border-base-200">
            <div>
              <h4 className="font-bold text-sm text-base-content">
                Email Notifications
              </h4>
              <p className="text-xs text-base-content/60">
                Receive updates regarding account activity.
              </p>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-base-200/40 rounded-2xl border border-base-200">
            <div>
              <h4 className="font-bold text-sm text-base-content">
                Public Profile
              </h4>
              <p className="text-xs text-base-content/60">
                Allow others to see your public stats and bio.
              </p>
            </div>
            <input
              type="checkbox"
              className="toggle toggle-secondary"
              defaultChecked
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
