
export default function Home() {
  return (
    <main className="oceba-hero">
      <header className="oceba-header">
        <a href="/" className="oceba-logo" aria-label="OCEBA Labs home">
          <span>OCEBA</span>
          <small>LABS</small>
        </a>

        <nav className="oceba-nav" aria-label="Main navigation">
          <a className="active" href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/about">About Us</a>
        </nav>

        <a className="header-cta" href="#project">
          Start a Project <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="hero-content">
        <div className="hero-label">
          <span className="status-dot" />
          AI AUTOMATION &amp; TECHNOLOGY
        </div>

        <h1>
          Build.
          <br />
          Automate.
          <br />
          <span className="gradient-text">Scale.</span>
        </h1>

        <p className="hero-description">
          Intelligent AI and digital solutions that help
          <br className="desktop-break" />
          businesses work smarter, automate faster and
          <br className="desktop-break" />
          grow better.
        </p>

        <div className="hero-actions">
          <a href="#project" className="button-primary">
            Start a Project <span aria-hidden="true">→</span>
          </a>

          <a href="/services" className="button-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-footnote">
          <span className="footnote-line" />
          <span>
            PRACTICAL TECHNOLOGY. BUILT AROUND YOUR BUSINESS.
          </span>
        </div>
      </section>
    </main>
  );
}
