import Link from "next/link";

const posts = [
  {
    category: "AI & Automation",
    title: "How AI Automation Is Changing the Way Businesses Work",
    description:
      "AI automation is helping businesses reduce repetitive work, improve operational efficiency, and make better decisions. Here is how companies can practically adopt AI without overcomplicating their technology stack.",
    date: "October 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    category: "Business Technology",
    title: "When Should a Business Build Custom Software?",
    description:
      "Off-the-shelf software works for many businesses, but growing organizations often reach a point where custom technology becomes more efficient and scalable.",
    date: "October 2026",
    readTime: "5 min read",
  },
  {
    category: "AI",
    title: "5 Practical Ways Businesses Can Use AI Today",
    description:
      "From customer support to document processing, AI can solve real operational problems when implemented with a clear business objective.",
    date: "September 2026",
    readTime: "4 min read",
  },
  {
    category: "Automation",
    title: "Why Business Automation Is More Than Just Saving Time",
    description:
      "Automation can improve consistency, reduce human error, and allow teams to focus on higher-value work.",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    category: "Software Development",
    title: "Building Scalable Digital Products From the Ground Up",
    description:
      "A scalable product needs more than good code. Architecture, user experience, security, performance, and maintainability all matter.",
    date: "August 2026",
    readTime: "7 min read",
  },
  {
    category: "Digital Transformation",
    title: "A Practical Guide to Digital Transformation for Growing Businesses",
    description:
      "Digital transformation does not always mean replacing everything. Start with the right processes, identify bottlenecks, and introduce technology where it creates measurable value.",
    date: "August 2026",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-label">
          <span></span>
          OCEBA INSIGHTS
        </div>

        <h1>
          Ideas that turn
          <span> technology into impact.</span>
        </h1>

        <p>
          Practical insights on AI, automation, software development and
          digital transformation — helping businesses make smarter technology
          decisions.
        </p>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="featured-section">
        <div className="section-heading">
          <span>FEATURED</span>
          <h2>What we're thinking about</h2>
        </div>

        <article className="featured-card">
          <div className="featured-visual">
            <div className="visual-grid"></div>

            <div className="visual-circle circle-one"></div>
            <div className="visual-circle circle-two"></div>

            <div className="visual-text">
              AI
              <small>+</small>
              AUTOMATION
            </div>
          </div>

          <div className="featured-content">
            <div className="post-meta">
              <span>AI & Automation</span>
              <span>6 min read</span>
            </div>

            <h2>
              How AI Automation Is Changing the Way Businesses Work
            </h2>

            <p>
              AI automation is moving beyond experimentation. Businesses are
              using intelligent systems to automate repetitive processes,
              analyze information faster and create better customer
              experiences.
            </p>

            <p>
              The key is not to automate everything. The real opportunity is
              identifying the right processes where AI can create measurable
              business value.
            </p>

            <Link href="#" className="read-link">
              Read article <span>→</span>
            </Link>
          </div>
        </article>
      </section>

      {/* BLOG GRID */}
      <section className="articles-section">
        <div className="section-heading">
          <span>FROM THE BLOG</span>
          <h2>Technology explained simply.</h2>
        </div>

        <div className="category-filter">
          <button className="active">All</button>
          <button>AI</button>
          <button>Automation</button>
          <button>Software</button>
          <button>Business</button>
        </div>

        <div className="articles-grid">
          {posts.slice(1).map((post, index) => (
            <article className="article-card" key={index}>
              <div className="article-image">
                <div className="article-number">
                  0{index + 1}
                </div>

                <div className="article-glow"></div>
              </div>

              <div className="article-content">
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="article-footer">
                  <span>{post.date}</span>

                  <Link href="#" aria-label={`Read ${post.title}`}>
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INSIGHT SECTION */}
      <section className="insight-section">
        <div className="insight-content">
          <div className="blog-label">
            <span></span>
            OUR APPROACH
          </div>

          <h2>
            Technology should solve a
            <span> real problem.</span>
          </h2>

          <p>
            We believe good technology starts with understanding the problem,
            not choosing the newest technology. Our articles explore practical
            ways businesses can use technology to become more efficient,
            scalable and competitive.
          </p>
        </div>

        <div className="insight-stats">
          <div>
            <strong>AI</strong>
            <span>Intelligent systems</span>
          </div>

          <div>
            <strong>AUTOMATE</strong>
            <span>Reduce repetitive work</span>
          </div>

          <div>
            <strong>BUILD</strong>
            <span>Digital products</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <p>HAVE A TECHNOLOGY CHALLENGE?</p>

        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>

        <Link href="/contact" className="cta-button">
          Start a Project
          <span>→</span>
        </Link>
      </section>

    </main>
  );
}