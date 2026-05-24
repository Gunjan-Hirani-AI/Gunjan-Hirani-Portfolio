import { education } from '../data';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="education__orb education__orb--1" />
      <div className="education__orb education__orb--2" />
      <div className="container">
        <div className="education__header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subtitle education__subtitle">
            My foundation in computer engineering — where I built strong fundamentals in software and systems.
          </p>
        </div>

        <div className="education__card glass-card">
          <div className="education__card-accent" />
          <div className="education__card-inner">
            <div className="education__icon-wrap">
              <span className="education__icon">🎓</span>
            </div>

            <div className="education__content">
              <span className="education__period">{education.period}</span>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__field">{education.field}</p>
              <p className="education__institution">{education.institution}</p>
              <p className="education__location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {education.location}
              </p>
            </div>

            <div className="education__cgpa">
              <span className="education__cgpa-label">CGPA</span>
              <span className="education__cgpa-value gradient-text">
                {education.cgpa}
                <span className="education__cgpa-max">/{education.cgpaMax}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
