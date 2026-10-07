"use client";

import Link from "next/link";
import { useState } from "react";

const perspectives = [
  {
    id: "01",
    label: "OUR MISSION",
    title: "Make technology genuinely useful.",
    text: "We believe technology should solve real problems, remove unnecessary complexity, and create measurable value for the people using it.",
  },
  {
    id: "02",
    label: "OUR APPROACH",
    title: "Understand first. Build second.",
    text: "We start by understanding the business problem before choosing the technology. The goal is not to use more technology — it is to use the right technology.",
  },
  {
    id: "03",
    label: "OUR MINDSET",
    title: "Build with purpose.",
    text: "From AI and automation to digital products, we focus on solutions that are practical, maintainable, and designed to evolve with the business.",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Complex problems become easier to solve when the objective is clearly understood.",
  },
  {
    number: "02",
    title: "Practicality",
    description:
      "We value solutions that work in the real world over technology chosen simply because it is new.",
  },
  {
    number: "03",
    title: "Curiosity",
    description:
      "We keep learning, questioning assumptions, and exploring better ways to approach difficult problems.",
  },
  {
    number: "04",
    title: "Craft",
    description:
      "Details matter. We care about the experience, reliability, performance, and quality of what we build.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the business, users, constraints, and the problem behind the request.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "We evaluate possible approaches and identify where technology can create meaningful value.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We turn the chosen direction into a focused digital solution through thoughtful design and development.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "Good products should improve over time. We design with future needs and scalability in mind.",
  },
];

const faqs = [
  {
    question: "What does OCEBA Labs focus on?",
    answer:
      "OCEBA Labs focuses on practical technology solutions across AI, automation, software development, digital experiences, and technology strategy.",
  },
  {
    question: "Do you work only on large projects?",
    answer:
      "No. A project can begin with a focused problem or a small digital product. The right starting point depends on the business objective and the complexity of the problem.",
  },
  {
    question: "How do you choose the technology for a project?",
    answer:
      "We start with the requirements and constraints rather than starting with a particular technology. The technical approach should support the business goal, user experience, maintainability, and future growth.",
  },
  {
    question: "Can OCEBA help shape an idea before development?",
    answer:
      "Yes. Early conversations can be useful for understanding the problem, defining the scope, exploring possible approaches, and deciding what should be built first.",
  },
];

export default function AboutPage() {
  const [activePerspective, setActivePerspective] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const perspective = perspectives[activePerspective];

  return (
    <main className="oceba-about">
      {/* =================================
          NAVIGATION
      ================================= */}

      <header className="about-header">
        <Link href="/" className="about-logo">
          <span>OCEBA</span>
          <small>LABS</small>
        </Link>

        <nav className="about-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about" className="active">
            About Us
          </Link>
        </nav>

        <Link href="/#project" className="about-header-cta">
          Start a Project <span>→</span>
        </Link>
      </header>

      {/* =================================
          HERO
      ================================= */}

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-eyebrow">
            <span />
            ABOUT OCEBA LABS
          </div>

          <h1>
            Technology with
            <br />
            <span>intention.</span>
          </h1>

          <p>
            We explore how thoughtful technology can help businesses work
            smarter, solve meaningful problems, and create better digital
            experiences.
          </p>

          <div className="about-hero-actions">
            <a href="#our-story" className="about-primary-btn">
              Discover OCEBA <span>↓</span>
            </a>

            <Link href="/services" className="about-secondary-btn">
              Explore our services <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          <div className="about-orbit orbit-outer" />
          <div className="about-orbit orbit-middle" />
          <div className="about-orbit orbit-inner" />

          <div className="about-core">
            <span>O</span>
          </div>

          <div className="about-orbit-dot dot-one" />
          <div className="about-orbit-dot dot-two" />
          <div className="about-orbit-dot dot-three" />

          <span className="hero-visual-caption">
            BUILD · AUTOMATE · SCALE
          </span>
        </div>

        <div className="about-hero-bottom">
          <span />
          PRACTICAL TECHNOLOGY. BUILT AROUND YOUR BUSINESS.
        </div>
      </section>

      {/* =================================
          STORY
      ================================= */}

      <section className="about-story" id="our-story">
        <div className="about-story-intro">
          <span className="about-kicker">OUR PERSPECTIVE</span>

          <h2>
            Technology is only
            <br />
            valuable when it
            <br />
            <span>moves something forward.</span>
          </h2>
        </div>

        <div className="about-story-content">
          <p>
            Businesses face different challenges. Some need to automate
            repetitive work. Others need a better digital experience, a
            clearer way to work with data, or a new software product.
          </p>

          <p>
            Our role is to understand that challenge and translate it into
            technology that is useful, understandable, and built around the
            people who will actually use it.
          </p>

          <div className="story-signature">
            <span className="signature-line" />
            <span>THE OCEBA WAY</span>
          </div>
        </div>
      </section>

      {/* =================================
          INTERACTIVE PERSPECTIVES
      ================================= */}

      <section className="perspective-section">
        <div className="perspective-heading">
          <span className="about-kicker">WHAT DRIVES US</span>

          <h2>
            Three ideas behind
            <br />
            <span>everything we build.</span>
          </h2>
        </div>

        <div className="perspective-layout">
          <div className="perspective-tabs">
            {perspectives.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  activePerspective === index
                    ? "perspective-tab active"
                    : "perspective-tab"
                }
                onClick={() => setActivePerspective(index)}
              >
                <span>{item.id}</span>
                <strong>{item.label}</strong>
                <i>→</i>
              </button>
            ))}
          </div>

          <div className="perspective-display" key={perspective.id}>
            <div className="perspective-display-number">
              {perspective.id}
            </div>

            <span>{perspective.label}</span>

            <h3>{perspective.title}</h3>

            <p>{perspective.text}</p>

            <div className="perspective-line" />
          </div>
        </div>
      </section>

      {/* =================================
          PRINCIPLES
      ================================= */}

      <section className="principles-section">
        <div className="principles-heading">
          <span className="about-kicker">OUR PRINCIPLES</span>

          <h2>
            How we choose to
            <br />
            <span>work.</span>
          </h2>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <div className="principle-top">
                <span>{principle.number}</span>

                <span className="principle-arrow">↗</span>
              </div>

              <div className="principle-icon">
                <span />
              </div>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =================================
          PROCESS
      ================================= */}

      <section className="about-process">
        <div className="process-heading">
          <span className="about-kicker">OUR WAY OF WORKING</span>

          <h2>
            From a question
            <br />
            to something <span>real.</span>
          </h2>

          <p>
            We keep the journey clear. Every stage has a purpose, and every
            decision should connect back to the problem we are trying to solve.
          </p>
        </div>

        <div className="about-process-list">
          {steps.map((step) => (
            <article className="about-process-item" key={step.number}>
              <span className="process-index">{step.number}</span>

              <div className="process-connector" />

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <span className="process-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* =================================
          FAQ
      ================================= */}

      <section className="about-faq">
        <div className="faq-heading">
          <span className="about-kicker">COMMON QUESTIONS</span>

          <h2>
            Before we
            <br />
            <span>build together.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                className={isOpen ? "faq-item open" : "faq-item"}
                key={faq.question}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <strong>{isOpen ? "−" : "+"}</strong>
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =================================
          CTA
      ================================= */}

      <section className="about-final-cta">
        <div className="final-cta-glow" />

        <span className="about-kicker">HAVE SOMETHING IN MIND?</span>

        <h2>
          Let's turn the
          <br />
          <span>idea into action.</span>
        </h2>

        <p>
          Tell us about the problem you are trying to solve. We can explore
          the possibilities together.
        </p>

        <Link href="/#project" className="about-primary-btn">
          Start a Project <span>→</span>
        </Link>
      </section>

      {/* =================================
          FOOTER
      ================================= */}

      <footer className="about-footer">
        <Link href="/" className="about-logo">
          <span>OCEBA</span>
          <small>LABS</small>
        </Link>

        <p>Practical technology. Built around your business.</p>

        <div>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Us</Link>
        </div>

        <span>
          © {new Date().getFullYear()} OCEBA Labs
        </span>
      </footer>
    </main>
  );
}