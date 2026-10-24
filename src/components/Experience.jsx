import { Reveal } from "./motion";
import { education, experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Experience
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Where I’ve worked.
          <br />
          <span className="muted">And what I got done there.</span>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} className="job" delay={0.05}>
              <div className="job-meta">
                <p className="job-period">{job.period}</p>
                <p className="job-place">{job.place}</p>
              </div>
              <div className="job-main">
                <h3 className="job-company">
                  {job.company}
                  {i === 0 && <span className="job-now">Now</span>}
                </h3>
                <p className="job-role">{job.role}</p>
                <ul className="job-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal as="h3" className="subhead edu-heading">
          Education
        </Reveal>
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.school} className="card edu-card" delay={i * 0.1}>
              <p className="edu-period">{e.period}</p>
              <h4>{e.school}</h4>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-detail">{e.detail}</p>
              <p className="edu-grade">{e.grade}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
