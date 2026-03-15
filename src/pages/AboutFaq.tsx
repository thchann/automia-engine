import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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

const AboutFaq = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
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
        Automia is an AI automation platform with session and project-level memory that
        personalizes workflows and improves outcomes over time.
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
    </main>
  );
};

export default AboutFaq;
