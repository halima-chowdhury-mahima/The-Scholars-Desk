
import Image from "next/image";
import Link from "next/link";

type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
};

type Plan = {
  slug: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
};

const services: Service[] = [
  {
    slug: "dissertation",
    title: "Dissertation Support",
    description:
      "Research planning, structure, academic feedback and editing guidance.",
    image: "/images/dissertation.jpg",
    badge: "FEATURED",
  },
  {
    slug: "thesis",
    title: "Thesis Guidance",
    description:
      "Organise your research, refine your arguments and improve clarity.",
    image: "/images/thesis.jpg",
    badge: "POPULAR",
  },
  {
    slug: "assignment",
    title: "Assignment Support",
    description:
      "Understand your brief and strengthen your own academic writing.",
    image: "/images/assignment.jpg",
    badge: "STUDENT FAVOURITE",
  },
  {
    slug: "research",
    title: "Research Support",
    description:
      "Research questions, literature review planning and source evaluation.",
    image: "/images/research.jpg",
    badge: "RESEARCH",
  },
  {
    slug: "editing",
    title: "Editing & Proofreading",
    description:
      "Improve grammar, readability, consistency and presentation.",
    image: "/images/editing.jpg",
    badge: "WRITING",
  },
  {
    slug: "referencing",
    title: "Referencing & Formatting",
    description:
      "Guidance on citations, reference lists and academic formatting.",
    image: "/images/referencing.jpg",
    badge: "DETAILS MATTER",
  },
];

const plans: Plan[] = [
  {
    slug: "basic",
    name: "Basic",
    price: 19,
    description: "A starting point for focused academic guidance.",
    features: [
      "Initial consultation",
      "Structure guidance",
      "Referencing advice",
      "Personalised next steps",
    ],
  },
  {
    slug: "standard",
    name: "Standard",
    price: 49,
    description: "Detailed feedback to help strengthen your own work.",
    features: [
      "Everything in Basic",
      "Detailed draft feedback",
      "Editing guidance",
      "Research support session",
    ],
    popular: true,
  },
  {
    slug: "premium",
    name: "Premium",
    price: 99,
    description: "More comprehensive support for complex projects.",
    features: [
      "Everything in Standard",
      "Extended feedback session",
      "Detailed improvement plan",
      "Priority communication",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Personalised Guidance",
    text: "Support shaped around your subject and academic requirements.",
  },
  {
    number: "02",
    title: "Academic Integrity",
    text: "Guidance that respects your university's rules and your own work.",
  },
  {
    number: "03",
    title: "Clear Communication",
    text: "Understand the scope of the service and what to expect.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand">
  <Image
    src="/images/logo.png"
    alt="The Scholar's Desk Logo"
    width={220}
    height={80}
    priority
    className="brand-logo"
  />
  <span className="brand-text">
    <strong>The Scholar&apos;s Desk</strong>
    <small>ACADEMIC SUPPORT &amp; GUIDANCE</small>
  </span>
</Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
        </nav>

        <Link href="/contact" className="nav-button">
          Get Started <span>↗</span>
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              YOUR ACADEMIC JOURNEY, ELEVATED
            </p>

            <h1>
              Think Deeper.
              <br />
              <span>Write Better.</span>
              <br />
              Move Forward.
            </h1>

            <p className="hero-description">
              Thoughtful academic guidance for international
              students working on dissertations, theses,
              assignments and research.
            </p>

            <div className="hero-buttons">
              <Link href="#services" className="button-gold">
                Explore Services <span>→</span>
              </Link>
              <Link href="#about" className="text-button">
                Discover Our Approach ↗
              </Link>
            </div>

            <div className="hero-note">
              <span>✦</span>
              <p>
                Build confidence in your own academic work.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-image"
              role="img"
              aria-label="Academic study desk with books and laptop"
            />
            <div className="hero-image-caption">
              <span>THE SCHOLAR&apos;S DESK</span>
              <strong>Where ideas take shape.</strong>
            </div>
            <div className="floating-card">
              <span className="floating-icon">✧</span>
              <div>
                <strong>Your goals. Your progress.</strong>
                <p>Guidance for every stage.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="promise-strip">
          <div>
            <span>01 /</span>
            <p>Research with direction</p>
          </div>
          <div>
            <span>02 /</span>
            <p>Writing with clarity</p>
          </div>
          <div>
            <span>03 /</span>
            <p>Progress with confidence</p>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE OUR SERVICES</p>
              <h2>
                Academic support,
                <br />
                <span>thoughtfully delivered.</span>
              </h2>
              <p className="section-description">
                Find the right academic guidance for your
                research, writing and editing needs.
              </p>
            </div>
            <Link href="/contact" className="view-all">
              Discuss Your Needs <span>→</span>
            </Link>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                className="service-card"
                key={service.slug}
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                  <span className="service-badge">
                    {service.badge}
                  </span>
                  <span className="image-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="service-content">
                  <span className="service-number">
                    SERVICE 0{index + 1}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link">
                    Explore Service <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="pricing-heading">
            <p className="eyebrow">CLEAR &amp; TRANSPARENT PRICING</p>
            <h2>
              Find your level
              <br />
              <span>of support.</span>
            </h2>
            <p className="section-description">
              Choose a starting package that fits your needs.
              Final prices depend on the agreed service and scope.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card ${
                  plan.popular ? "featured-plan" : ""
                }`}
                key={plan.slug}
              >
                {plan.popular && (
                  <span className="popular-badge">
                    MOST POPULAR
                  </span>
                )}

                <h3>{plan.name}</h3>
                <p className="plan-description">
                  {plan.description}
                </p>

                <div className="plan-price">
                  <span>£</span>
                  {plan.price}
                  <small> starting</small>
                </div>

                <div className="plan-divider" />

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?plan=${plan.slug}`}
                  className="pricing-button"
                >
                  Choose Plan <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Prices shown are illustrative. Confirm your actual
            prices, service scope and deliverables before publishing.
          </p>
        </section>

        <section className="about-section" id="about">
          <div className="about-visual">
            <div className="about-image" />
            <div className="about-image-label">
              <span>OUR PHILOSOPHY</span>
              <strong>Better understanding. Better work.</strong>
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">THE SCHOLAR&apos;S DESK APPROACH</p>
            <h2>
              Your ideas deserve
              <br />
              <span>to be understood.</span>
            </h2>
            <p className="about-description">
              Academic projects can feel overwhelming. We aim
              to make the process clearer through structured
              guidance, thoughtful feedback and attention to detail.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div className="benefit-row" key={benefit.number}>
                  <span className="benefit-number">
                    {benefit.number}
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="button-navy">
              Talk to Us <span>→</span>
            </Link>
          </div>
        </section>

        <section className="process-section">
          <div className="process-heading">
            <p className="eyebrow">A CLEARER WAY FORWARD</p>
            <h2>Getting started is simple.</h2>
            <p>
              Three straightforward steps to find the support
              that fits your academic needs.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card">
              <span>01</span>
              <h3>Tell Us Your Goals</h3>
              <p>
                Share your subject, project requirements and
                the challenges you are facing.
              </p>
            </article>
            <article className="process-card">
              <span>02</span>
              <h3>Choose Your Support</h3>
              <p>
                Discuss the appropriate service, scope and
                price before placing your order.
              </p>
            </article>
            <article className="process-card">
              <span>03</span>
              <h3>Move Forward</h3>
              <p>
                Use feedback and guidance to improve your
                understanding and your own work.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-banner">
          <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Let&apos;s make your
            <br />
            academic journey clearer.
          </h2>
          <p>
            Tell us what you are working on and discover
            the support available for your project.
          </p>
          <Link href="/contact" className="button-gold">
            Discuss Your Project <span>↗</span>
          </Link>
          <span className="contact-watermark" aria-hidden="true">
            S.
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand">
  <Image
    src="/images/logo.png"
    alt="The Scholar's Desk Logo"
    width={220}
    height={80}
    priority
    className="brand-logo"
  />
  <span className="brand-text">
    <strong>The Scholar&apos;s Desk</strong>
    <small>ACADEMIC SUPPORT &amp; GUIDANCE</small>
  </span>
</Link>
            <p>
              Thoughtful guidance for clearer writing,
              stronger research and confident learning.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <Link href="#services">Our Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#about">About Us</Link>
          </div>

          <div className="footer-column">
            <h3>Get Started</h3>
            <Link href="/contact">Contact Us</Link>
            <Link href="/services/dissertation">
              Dissertation Support
            </Link>
            <Link href="/services/editing">
              Editing &amp; Proofreading
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} The Scholar&apos;s Desk.
            All rights reserved.
          </p>
          <p>Learn with clarity. Write with confidence.</p>
        </div>
      </footer>
    </>
  );
}
