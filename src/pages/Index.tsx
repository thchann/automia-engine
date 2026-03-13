import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import voidBg from "@/assets/void-bg.png";
import gazebo from "@/assets/gazebo.png";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Gazebo recedes on scroll
  const gazeboY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const gazeboScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Sticky Hero wrapper — hero stays pinned while content rolls over */}
      <div ref={heroRef} className="relative h-[200vh]">
        <section className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background with parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${voidBg})`,
              y: bgY,
              scale: loaded ? 1 : 1.12,
              transition: "scale 2.5s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
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
                  className="font-playfair text-sm tracking-wide transition-colors duration-300"
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
            <motion.h1
              className="font-amazing text-4xl md:text-5xl text-center leading-tight mb-5"
              style={{ color: "#FAFAF1" }}
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              Automize
              <br />
              Workflow
            </motion.h1>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 mb-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              <button
                className="px-7 py-2.5 rounded-full font-playfair text-sm tracking-wide transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: "#474747", color: "#FAFAF1" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF1")}
              >
                Start Now
              </button>
              <button
                className="px-7 py-2.5 rounded-full font-playfair text-sm tracking-wide border-2 transition-colors duration-300 cursor-pointer"
                style={{
                  borderColor: "#FAFAF1",
                  color: "#FAFAF1",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF914D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAF1")}
              >
                What is Automia?
              </button>
            </motion.div>

            {/* Gazebo */}
            <motion.div
              className="relative"
              style={{ y: gazeboY, scale: gazeboScale }}
            >
              <motion.img
                src={gazebo}
                alt="Automia Gazebo"
                className="w-[260px] md:w-[360px] lg:w-[440px] object-contain"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Content panel that rolls up over the hero */}
      <section
        id="about"
        className="relative z-20 min-h-screen w-full px-8 md:px-16 lg:px-24 py-24 -mt-[100vh]"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        {/* Label */}
        <div className="mb-8">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-playfair tracking-wider border"
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
              className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12 font-medium italic"
              style={{ color: "#474747" }}
            >
              We Aspire to Change
              <br />
              The Way You
              <br />
              Automate
            </h2>

            <p
              className="font-playfair text-base md:text-lg mb-8 max-w-2xl"
              style={{ color: "#474747", opacity: 0.7 }}
            >
              Most AI automation systems operate under the following assumptions:
            </p>

            <ul
              className="font-playfair space-y-3 mb-10 max-w-2xl"
              style={{ color: "#474747", opacity: 0.7 }}
            >
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#474747" }}
                />
                Each session is independent
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#474747" }}
                />
                Prior understanding must be inferred repeatedly
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#474747" }}
                />
                Correctness of output is sufficient for effective learning
              </li>
            </ul>

            <p
              className="font-playfair text-base md:text-lg max-w-2xl"
              style={{ color: "#474747", opacity: 0.7 }}
            >
              These assumptions fail in practice.
            </p>
          </div>

          {/* Right - Read More button */}
          <div className="lg:w-1/3 flex lg:justify-end lg:items-start">
            <button
              className="px-8 py-3 rounded-full font-playfair text-sm tracking-wide transition-colors duration-300 cursor-pointer"
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
