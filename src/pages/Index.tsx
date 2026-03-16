import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Users, HelpCircle, BookOpen, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const ICON_COLOR = "#a3a3a3";
const NAV_ITEMS = [
  { href: "#", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: Users },
  { href: "#faq", label: "Faq", Icon: HelpCircle },
  { href: "#manifesto", label: "Manifesto", Icon: BookOpen },
  { href: "#contact", label: "Contact", Icon: Mail },
] as const;

const faqs = [
  {
    id: "001",
    question: "Is Automia currently active within schools?",
    answer:
      "Automia is in pilot with select partners. We are expanding to more institutions and will share updates on availability.",
  },
  {
    id: "002",
    question: "How does the memory engine capture data without disrupting learning?",
    answer:
      "The system works invisibly in the background, capturing interactions, questions to the AI tutor, struggles, and chat messages to build a learning profile. No extra steps are required from students or teachers.",
  },
  {
    id: "003",
    question: "Is user data private and secure?",
    answer:
      "Yes. Data is encrypted and we follow strict privacy and security practices. We do not sell or share personal data.",
  },
  {
    id: "004",
    question: "How quickly will I start seeing insights and alerts?",
    answer:
      "Initial insights appear within the first few sessions. Deeper patterns and alerts become more accurate as more data is collected over time.",
  },
  {
    id: "005",
    question: "Do I need technical expertise to use this platform?",
    answer:
      "No. Automia is designed for educators and teams. Setup is guided and the interface is built to be intuitive.",
  },
  {
    id: "006",
    question: "What makes this different from traditional workflow tools?",
    answer:
      "Automia adds memory and personalization: it learns from each session and improves over time, instead of treating every run as independent.",
  },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [ottoRotate, setOttoRotate] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    if ((e.currentTarget as HTMLAnchorElement).getAttribute("href") === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOttoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOttoRotate((prev) => prev + 360);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full relative">
      {/* Hero first so background fills from top of viewport */}
      <div ref={heroRef} className="relative h-[200vh]">
        <section className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background: declarative 2s zoom-in from scale 1 to 1.05 */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: "url(/Otto_Background.png)",
              y: bgY,
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 2,
              ease: [0.33, 1, 0.68, 1],
            }}
          />

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
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
          </div>
        </section>
      </div>

      {/* Fixed floating pill nav - overlays hero and content */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center px-2 py-3 sm:px-4 sm:py-4 pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-2 rounded-full px-3 py-2 shadow-lg sm:gap-4 sm:px-5 sm:py-2.5 md:gap-6 md:px-6 md:py-3 md:gap-8"
          style={{ backgroundColor: "#363636" }}
        >
          <a
            href="#"
            onClick={handleOttoClick}
            className="flex items-center justify-center transition-opacity hover:opacity-90 flex-shrink-0"
            aria-label="Home"
          >
            <motion.img
              src="/Otto_cropped.png"
              alt="Otto"
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
              animate={{ rotate: ottoRotate }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </a>
          {NAV_ITEMS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              onClick={href === "#" ? scrollToTop : undefined}
              className="font-lato flex items-center gap-1.5 text-xs tracking-wide text-white transition-colors hover:opacity-90 whitespace-nowrap sm:gap-2 sm:text-sm"
            >
              <Icon className="h-4 w-4 flex-shrink-0 sm:h-[18px] sm:w-[18px]" style={{ color: ICON_COLOR }} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* About section */}
      <section
        id="about"
        className="relative z-20 min-h-screen w-full scroll-mt-20 px-8 md:px-16 lg:px-24 py-24 -mt-[100vh]"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        <div className="mb-8">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-playfair tracking-wider border"
            style={{ borderColor: "#474747", color: "#474747" }}
          >
            About
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-16">
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

      {/* FAQ section */}
      <section
        id="faq"
        className="relative z-20 min-h-screen w-full scroll-mt-20 px-8 md:px-16 lg:px-24 py-24"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-10">
            <span
              className="inline-block rounded-full border px-4 py-1.5 text-xs font-playfair tracking-wider"
              style={{ borderColor: "#474747", color: "#474747" }}
            >
              Faq
            </span>
          </div>

          <p
            className="mb-4 max-w-3xl font-playfair text-2xl leading-relaxed md:text-3xl"
            style={{ color: "#474747" }}
          >
            Automia is an AI automation platform with session and project-level memory
            that personalizes workflows and improves outcomes over time.
          </p>
          <p
            className="mb-12 font-playfair text-base"
            style={{ color: "#474747", opacity: 0.7 }}
          >
            Here are some frequently asked questions.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b py-5"
                style={{ borderColor: "#e5e5e5" }}
              >
                <AccordionTrigger
                  className={cn(
                    "group flex w-full items-center justify-between gap-4 py-0 hover:no-underline [&>svg]:hidden",
                  )}
                >
                  <div className="flex items-baseline gap-4 text-left">
                    <span
                      className="tabular-nums font-playfair text-sm font-medium"
                      style={{ color: "#FF914D" }}
                    >
                      {faq.id}
                    </span>
                    <span
                      className="font-playfair text-lg md:text-xl"
                      style={{ color: "#474747" }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-xl transition-colors group-hover:bg-black/5"
                    style={{ color: "#474747" }}
                  >
                    <span className="block group-data-[state=open]:hidden">+</span>
                    <span className="hidden group-data-[state=open]:block">×</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-0">
                  <p
                    className="pl-14 pb-4 font-playfair text-base leading-relaxed"
                    style={{ color: "#474747", opacity: 0.75 }}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Manifesto section */}
      <section
        id="manifesto"
        className="relative z-20 min-h-screen w-full scroll-mt-20 px-8 md:px-16 lg:px-24 py-24"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-10">
            <span
              className="inline-block rounded-full border px-4 py-1.5 text-xs font-playfair tracking-wider"
              style={{ borderColor: "#474747", color: "#474747" }}
            >
              Manifesto
            </span>
          </div>
          <p
            className="mb-4 max-w-3xl font-playfair text-2xl leading-relaxed md:text-3xl"
            style={{ color: "#474747" }}
          >
            We believe automation should remember, learn, and adapt—not start from zero
            every time.
          </p>
          <p
            className="font-playfair text-base leading-relaxed"
            style={{ color: "#474747", opacity: 0.75 }}
          >
            Automia is built on the idea that workflows and teams get better when the
            system carries context across sessions, personalizes to each user, and
            surfaces insights over time. We aspire to change the way you automate.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className="relative z-20 min-h-screen w-full scroll-mt-20 px-8 md:px-16 lg:px-24 py-24"
        style={{ backgroundColor: "#FAFAF1" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-playfair tracking-wider border"
              style={{ borderColor: "#474747", color: "#474747" }}
            >
              Contact
            </span>
          </div>
          <p
            className="font-playfair text-base max-w-2xl"
            style={{ color: "#474747", opacity: 0.7 }}
          >
            Get in touch with the Automia team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
