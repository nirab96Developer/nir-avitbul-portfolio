import { TbArrowRight } from "react-icons/tb";
import { DIFFERENTIATORS } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS, ABOUT } from "../i18n/strings";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();
  const s = SECTIONS.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__lead">
            {ABOUT.lead.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </Reveal>

          <Reveal className="about__stats" delay={120}>
            {ABOUT.stats.map((stat) => (
              <div key={stat.label.en} className="about__stat">
                <span className="about__stat-num">{t(stat.num)}</span>
                <span className="about__stat-label">{t(stat.label)}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="about__diff">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title.en} delay={i * 90} className="about__diff-card">
              <span className="about__diff-icon">
                <TbArrowRight size={18} />
              </span>
              <h3 className="about__diff-title">{t(d.title)}</h3>
              <p className="about__diff-text">{t(d.text)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
