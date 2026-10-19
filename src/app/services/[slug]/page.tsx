
import Link from "next/link";
import { notFound } from "next/navigation";

type ServiceInfo = {
  title: string;
  description: string;
  image: string;
  details: string[];
};

const serviceDetails: Record<string, ServiceInfo> = {
  dissertation: {
    title: "Dissertation Support",
    description:
      "Structured guidance to help you plan, understand and improve your dissertation.",
    image: "/images/dissertation.jpg",
    details: [
      "Research question and proposal guidance",
      "Chapter structure and organisation",
      "Literature review guidance",
      "Feedback on your own draft",
    ],
  },
  thesis: {
    title: "Thesis Guidance",
    description:
      "Develop a clearer research plan and strengthen your academic writing.",
    image: "/images/thesis.jpg",
    details: [
      "Research planning",
      "Academic source evaluation",
      "Structure and clarity feedback",
      "Referencing guidance",
    ],
  },
  assignment: {
    title: "Assignment Support",
    description:
      "Understand your assignment brief and develop stronger academic skills.",
    image: "/images/assignment.jpg",
    details: [
      "Assignment brief interpretation",
      "Outline and structure guidance",
      "Argument development feedback",
      "Proofreading and editing options",
    ],
  },
  research: {
    title: "Research Support",
    description:
      "Get guidance on research methods, sources and literature reviews.",
    image: "/images/research.jpg",
    details: [
      "Research question development",
      "Literature search guidance",
      "Research method explanations",
      "Source evaluation",
    ],
  },
  editing: {
    title: "Editing & Proofreading",
    description:
      "Improve the clarity, grammar and presentation of your own academic work.",
    image: "/images/editing.jpg",
    details: [
      "Grammar and spelling review",
      "Readability and consistency",
      "Academic tone and clarity",
      "Formatting review",
    ],
  },
  referencing: {
    title: "Referencing & Formatting",
    description:
      "Make your citations and document presentation easier to understand.",
    image: "/images/referencing.jpg",
    details: [
      "Referencing style guidance",
      "Citation consistency review",
      "Reference list formatting",
      "Document presentation checks",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="detail-page">
      <div className="detail-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/#services">Services</Link>
        <span>/</span>
        <span>{service.title}</span>
      </div>

      <section className="detail-layout">
        <div className="detail-copy">
          <p className="eyebrow">THE SCHOLAR&apos;S DESK</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>

          <h2>How we can help</h2>
          <ul className="detail-list">
            {service.details.map((detail) => (
              <li key={detail}>
                <span>✓</span>
                {detail}
              </li>
            ))}
          </ul>

          <p className="detail-integrity">
            Our services focus on guidance, feedback and
            developing your own academic work.
          </p>

          <Link
            href={`/contact?service=${slug}`}
            className="button-gold"
          >
            Enquire About This Service <span>→</span>
          </Link>
        </div>

        <div className="detail-visual">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      <div className="detail-back">
        <Link href="/#services">← Back to all services</Link>
      </div>
    </main>
  );
}
