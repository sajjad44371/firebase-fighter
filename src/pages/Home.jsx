import { Link } from "react-router";

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="hero min-h-[80vh] bg-base-200/50 rounded-3xl mt-4 max-w-7xl mx-auto px-6">
        <div className="hero-content text-center py-12">
          <div className="max-w-2xl">
            <span className="badge badge-outline badge-primary mb-4 p-3 font-medium">
              ✨ Next Generation Platform
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Build Beautiful Apps{" "}
              <span className="text-primary">Faster Than Ever</span>
            </h1>
            <p className="py-6 text-base sm:text-lg text-base-content/70">
              Create responsive, performant, and modern web solutions with our
              streamlined UI architecture and optimized setup.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/signup"
                className="btn btn-primary rounded-full px-8 shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
              <Link to="/about" className="btn btn-outline rounded-full px-8">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow-sm border border-base-200 w-full bg-base-100 rounded-2xl">
          <div className="stat text-center lg:text-left">
            <div className="stat-title">Active Users</div>
            <div className="stat-value text-primary">31.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat text-center lg:text-left">
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% increase from last week</div>
          </div>
          <div className="stat text-center lg:text-left">
            <div className="stat-title">Tasks Done</div>
            <div className="stat-value">86%</div>
            <div className="stat-desc text-success">31 tasks remaining</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-base-content/70 mt-2">
            Designed for the modern web experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Ultra Fast",
              desc: "Powered by Vite and optimized components for lightning response.",
              icon: "⚡",
            },
            {
              title: "Fully Responsive",
              desc: "Looks stunning on Mobile, Tablet, and Desktop screens seamlessly.",
              icon: "📱",
            },
            {
              title: "Modern Design",
              desc: "Tailwind CSS & DaisyUI based sleek theme architecture.",
              icon: "🎨",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card bg-base-100 border border-base-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="card-title text-xl font-bold">{item.title}</h3>
                <p className="text-base-content/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
