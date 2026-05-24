import { profile } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__orb" />
      <div className="container">
        <div className="projects__header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            All my AI and backend projects live on one dashboard — I keep it updated whenever I ship something new.
          </p>
        </div>

        <div className="projects__showcase glass-card">
          <div className="projects__showcase-icon">🚀</div>
          <h3 className="projects__showcase-title">View All Projects in One Place</h3>
          <a
            href={profile.aiPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary projects__showcase-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Open AI Project Portfolio
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={profile.aiPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__showcase-url"
          >
            ai-portfolio-dashboard.vercel.app
          </a>
        </div>
      </div>
    </section>
  );
}
