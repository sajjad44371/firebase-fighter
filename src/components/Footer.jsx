import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="footer max-w-7xl mx-auto p-10 grid grid-cols-1 lg:grid-cols-4">
        <aside>
          <div className="font-extrabold text-2xl tracking-tight mb-2">
            DEV<span className="text-primary">APP</span>
          </div>
          <p className="max-w-xs text-sm text-base-content/70">
            Building modern web applications with cutting-edge tools and sleek
            design patterns.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-primary">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary">Company</h6>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        <p>© {new Date().getFullYear()} DEVAPP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
