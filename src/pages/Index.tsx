import { useEffect, useState } from "react";
import showroom from "@/assets/showroom.jpg";
import engine from "@/assets/engine.png";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Showroom background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${showroom})` }}
        />

        {/* Navigation */}
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div
            className="flex items-center gap-8 px-8 py-3 rounded-full"
            style={{ backgroundColor: "#474747" }}
          >
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-codec text-sm tracking-wide transition-colors duration-300"
                style={{ color: "#FAFAF1" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF1")}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Title */}
          <h1
            className={`font-amazing text-6xl md:text-8xl text-center leading-tight mb-6 ${
              loaded ? "animate-text-fade" : "opacity-0"
            }`}
            style={{ color: "#474747", animationDelay: "1.5s" }}
          >
            Automize
            <br />
            Workflow
          </h1>

          {/* Buttons */}
          <div
            className={`flex gap-4 mb-8 z-20 ${loaded ? "animate-text-fade" : "opacity-0"}`}
            style={{ animationDelay: "2s" }}
          >
            <button
              className="px-8 py-3 rounded-full font-codec text-sm tracking-wide transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: "#474747", color: "#FAFAF1" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF1")}
            >
              Start Now
            </button>
            <button
              className="px-8 py-3 rounded-full font-codec text-sm tracking-wide border-2 transition-colors duration-300 cursor-pointer"
              style={{
                borderColor: "#474747",
                color: "#474747",
                backgroundColor: "#FAFAF1",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#474747")}
            >
              What is Automia?
            </button>
          </div>

          {/* Engine */}
          <div className="relative">
            <img
              src={engine}
              alt="Automia Engine Core"
              className={`w-[300px] md:w-[450px] lg:w-[550px] object-contain ${
                loaded ? "animate-engine-rise animate-glow-pulse" : "opacity-0 translate-y-full"
              }`}
            />
          </div>
        </div>
      </section>

      {/* Second Section - About */}
      <section
        id="about"
        className="min-h-screen w-full px-8 md:px-16 lg:px-24 py-24"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        {/* Label */}
        <div className="mb-8">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-codec tracking-wider border"
            style={{ borderColor: "#474747", color: "#474747" }}
          >
            About
          </span>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left - Title */}
          <div className="lg:w-2/3">
            <h2
              className="font-amazing text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12"
              style={{ color: "#474747" }}
            >
              We Aspire to Change
              <br />
              The Way You
              <br />
              Automate
            </h2>

            <p
              className="font-codec text-base md:text-lg mb-8 max-w-2xl"
              style={{ color: "#474747", opacity: 0.7 }}
            >
              Most AI automation systems operate under the following assumptions:
            </p>

            <ul className="font-codec space-y-3 mb-10 max-w-2xl" style={{ color: "#474747", opacity: 0.7 }}>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#474747" }} />
                Each session is independent
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#474747" }} />
                Prior understanding must be inferred repeatedly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#474747" }} />
                Correctness of output is sufficient for effective learning
              </li>
            </ul>

            <p
              className="font-codec text-base md:text-lg max-w-2xl"
              style={{ color: "#474747", opacity: 0.7 }}
            >
              These assumptions fail in practice.
            </p>
          </div>

          {/* Right - Read More button */}
          <div className="lg:w-1/3 flex lg:justify-end lg:items-start">
            <button
              className="px-8 py-3 rounded-full font-codec text-sm tracking-wide transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: "#474747", color: "#FAFAF1" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF1")}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
