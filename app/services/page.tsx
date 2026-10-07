
import Link from "next/link";

const services = [
  {
    number: "01",
    tag: "INTELLIGENCE",
    title: "AI & Machine Learning",
    description:
      "Turn data into useful insights and build intelligent features around real business needs.",
    items: ["AI-powered solutions", "Predictive models", "Intelligent assistants"],
    symbol: "✳",
  },
  {
    number: "02",
    tag: "AUTOMATION",
    title: "Business Process Automation",
    description:
      "Reduce repetitive work by connecting tools, simplifying workflows, and automating routine tasks.",
    items: ["Workflow automation", "Process optimization", "System integrations"],
    symbol: "↗",
  },
  {
    number: "03",
    tag: "DIGITAL EXPERIENCES",
    title: "Web Development",
    description:
      "Build fast, responsive websites and web applications designed around your customers and goals.",
    items: ["Business websites", "Web applications", "Responsive interfaces"],
    symbol: "⌘",
  },
  {
    number: "04",
    tag: "CUSTOM SOLUTIONS",
    title: "Custom Software",
    description:
      "Create software that fits your operations, business requirements, and long-term direction.",
    items: ["Custom platforms", "Internal business tools", "API development"],
    symbol: "⟨/⟩",
  },
  {
    number: "05",
    tag: "DATA & INSIGHTS",
    title: "Data Solutions",
    description:
      "Organize business data and make it easier to understand through useful reporting and analytics.",
    items: ["Data processing", "Dashboards and reporting", "Data-driven insights"],
    symbol: "▥",
  },
  {
    number: "06",
    tag: "STRATEGY",
    title: "Technology Consulting",
    description:
      "Identify the right technical approach, plan implementation, and make informed technology decisions.",
    items: ["Technical planning", "Architecture guidance", "Solution discovery"],
    symbol: "◎",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, challenges, users, and requirements.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the scope, technical approach, and implementation plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test, and refine a solution around your needs.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We identify opportunities to improve performance and usability.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <header className="services-header">
        <Link href="/" className="services-logo" aria-label="OCEBA Labs home">
          <span>OCEBA</span>
          <small>LABS</small>
        </Link>

        <nav className="services-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services" className="current">
            Services
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Us</Link>
        </nav>

        <Link href="/#project" className="services-header-cta">
          Start a Project <span>→</span>
        </Link>
      </header>

      <section className="services-hero">
        <div className="services-eyebrow">
          <span />
          WHAT WE DO
        </div>

        <h1>
          Technology built
          <br />
          around <span>your business.</span>
        </h1>

        <p>
          From intelligent automation to custom digital products, we help
          businesses solve practical problems with thoughtful technology.
        </p>

        <div className="services-hero-actions">
          <Link href="#our-services" className="services-primary-btn">
            Explore Our Services <span>↓</span>
          </Link>
          <Link href="/#project" className="services-text-link">
            Discuss a project <span>↗</span>
          </Link>
        </div>

        <div className="services-hero-note">
          <span className="services-note-line" />
          PRACTICAL TECHNOLOGY. BUILT AROUND YOUR BUSINESS.
        </div>
      </section>

      <section className="services-offerings" id="our-services">
        <div className="services-section-heading">
          <div>
            <span className="section-kicker">OUR CAPABILITIES</span>
            <h2>
              What we can <span>build together.</span>
            </h2>
          </div>

          <p>
            Focused expertise. Practical solutions. Technology chosen for the
            problem—not the trend.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-symbol" aria-hidden="true">
                  {service.symbol}
                </span>
              </div>

              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↗</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={`/#project`}
                className="service-card-link"
                aria-label={`Discuss ${service.title}`}
              >
                Discuss this service <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="process-intro">
          <span className="section-kicker">HOW WE WORK</span>
          <h2>
            A clear path from
            <br />
            <span>idea to execution.</span>
          </h2>
          <p>
            Good solutions start with understanding the problem. We keep the
            process focused, collaborative, and transparent.
          </p>
        </div>

        <div className="process-steps">
          {process.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-step-line" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta" id="project">
        <div className="cta-glow" aria-hidden="true" />

        <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
        <h2>
          Let's build something
          <br />
          <span>that works for you.</span>
        </h2>
        <p>
          Tell us what you are trying to solve. We can explore the right
          approach together.
        </p>

        <Link href="/#project" className="services-primary-btn">
          Start a Conversation <span>→</span>
        </Link>
      </section>

      <footer className="services-footer">
        <Link href="/" className="services-logo">
          <span>OCEBA</span>
          <small>LABS</small>
        </Link>

        <p>Practical technology. Built around your business.</p>

        <div>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
        </div>

        <span className="footer-copyright">
          © {new Date().getFullYear()} OCEBA Labs
        </span>
      </footer>
    </main>
  );
}
