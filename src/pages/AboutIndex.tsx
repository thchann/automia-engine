import { Link } from "react-router-dom";

const AboutIndex = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <span
          className="inline-block rounded-full border px-4 py-1.5 text-xs font-playfair tracking-wider"
          style={{ borderColor: "#474747", color: "#474747" }}
        >
          About
        </span>
      </div>

      <p
        className="mb-4 max-w-3xl font-playfair text-2xl leading-relaxed md:text-3xl"
        style={{ color: "#474747" }}
      >
        Automia is an AI automation platform with session and project-level memory that
        personalizes workflows and improves outcomes over time.
      </p>
      <p
        className="mb-12 font-playfair text-base"
        style={{ color: "#474747", opacity: 0.7 }}
      >
        Explore the sections below.
      </p>

      <ul className="space-y-4">
        <li>
          <Link
            to="/about/faq"
            className="flex items-center justify-between rounded-lg border px-5 py-4 font-playfair text-lg transition-colors hover:bg-black/5"
            style={{ borderColor: "#e5e5e5", color: "#474747" }}
          >
            <span>Frequently asked questions</span>
            <span style={{ color: "#FF914D" }}>→</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about/manifesto"
            className="flex items-center justify-between rounded-lg border px-5 py-4 font-playfair text-lg transition-colors hover:bg-black/5"
            style={{ borderColor: "#e5e5e5", color: "#474747" }}
          >
            <span>Manifesto</span>
            <span style={{ color: "#FF914D" }}>→</span>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default AboutIndex;
