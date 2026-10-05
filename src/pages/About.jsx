const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          We are building the future of Web Design
        </h1>
        <p className="text-lg text-base-content/70">
          Our team is passionate about crafting user-centric interfaces and
          providing developers with flexible UI foundations.
        </p>
      </div>

      {/* Image Banner */}
      <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-content shadow-2xl">
        <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Empowering Developers Globally
          </h2>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="card bg-base-100 border border-base-200 text-center"
            >
              <figure className="px-10 pt-10">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${member}`}
                  alt="Team Member"
                  className="rounded-full w-24 h-24 bg-base-200"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Alex Johnson</h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                  Lead Developer
                </p>
                <p className="text-sm text-base-content/70">
                  Passionate about clean code and seamless web interactions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
