import { Counter, Reveal, ScrollText } from "./motion";
import { statement, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <ScrollText text={statement} className="statement" />

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.12}>
              <p className="stat-value">
                {s.text ?? <Counter to={s.to} suffix={s.suffix} />}
              </p>
              <p className="stat-label">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
