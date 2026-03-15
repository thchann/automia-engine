const AboutManifesto = () => {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
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
        We believe automation should remember, learn, and adapt—not start from zero every time.
      </p>
      <p
        className="mb-8 font-playfair text-base leading-relaxed"
        style={{ color: "#474747", opacity: 0.75 }}
      >
        Automia is built on the idea that workflows and teams get better when the system
        carries context across sessions, personalizes to each user, and surfaces insights
        over time. We aspire to change the way you automate.
      </p>
    </main>
  );
};

export default AboutManifesto;
