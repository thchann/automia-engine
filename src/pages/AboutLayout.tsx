import { Link, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#FAFAF1" }}>
      <nav
        className="sticky top-0 z-50 border-b px-6 py-4"
        style={{ backgroundColor: "#FAFAF1", borderColor: "#e5e5e5" }}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/Otto_Logo.png" alt="Automia" className="h-8 w-8 object-contain" />
          </Link>
          <div
            className="flex items-center gap-6 rounded-full px-6 py-2.5"
            style={{ backgroundColor: "#474747" }}
          >
            <Link
              to="/"
              className="font-playfair text-sm tracking-wide transition-colors duration-300 hover:opacity-80"
              style={{ color: "#FAFAF1" }}
            >
              Home
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="font-playfair text-sm tracking-wide transition-colors duration-300 hover:opacity-80"
                style={{ color: "#FAFAF1" }}
              >
                About
              </Link>
              <Link
                to="/about/faq"
                className="font-playfair text-sm tracking-wide transition-colors duration-300 hover:opacity-80"
                style={{ color: "#FAFAF1" }}
              >
                Faq
              </Link>
              <Link
                to="/about/manifesto"
                className="font-playfair text-sm tracking-wide transition-colors duration-300 hover:opacity-80"
                style={{ color: "#FAFAF1" }}
              >
                Manifesto
              </Link>
            </div>
            <Link
              to="/#contact"
              className="font-playfair text-sm tracking-wide transition-colors duration-300 hover:opacity-80"
              style={{ color: "#FAFAF1" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default AboutLayout;
