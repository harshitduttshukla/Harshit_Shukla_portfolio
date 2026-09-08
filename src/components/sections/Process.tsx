import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, users, requirements, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define architecture, technology, features, and milestones.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the frontend, backend, database, and integrations.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description: "Deploy the application and provide post-launch improvements.",
  },
];

export function Process() {
  return (
    <section className="portfolio-section section-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="Process"
          title="How I Work"
          description="A clear path from the first conversation to a stable production release."
        />
        <ol className="process-grid">
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
