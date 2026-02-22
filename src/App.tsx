import { projects } from "./data/projects";
import { ProjectTile } from "./components/ProjectTile";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const projectCount = projects.length;

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top">
            Justin Habashi
          </a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__content">
            <p className="eyebrow">React Portfolio</p>
            <h1>Hi, I&apos;m Justin. I build secure code</h1>
            <p className="hero__lede">
              This is a landing page to showcase some backend projects I have built throughout the years.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View {projectCount} Project Tiles
              </a>
              <a className="button button--ghost" href="https://github.com/justinhabashi">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section__heading">
              <p className="eyebrow">Featured Work</p>
              <p>
                Update `src/data/projects.ts` to change content without touching the UI
                component logic.
              </p>
            </div>

            <div className="project-grid" role="list">
              {projects.map((project) => (
                <div key={project.id} role="listitem">
                  <ProjectTile project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section--muted">
          <div className="container prose-block">
            <p className="eyebrow">About</p>
            <h2>Home of the Future About Section</h2>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s connect</h2>
            </div>
            <ul className="contact-links">
              <li>
                <a href="mailto:justinhabashi@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://github.com/justinhabashi" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/justinhabashi" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Justin&apos;s Space. Built with React + Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
