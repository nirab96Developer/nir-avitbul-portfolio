import { TbBriefcase2, TbCircleCheckFilled, TbTrophy } from "react-icons/tb";
import { EXPERIENCE } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS, UI } from "../i18n/strings";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();
  const s = SECTIONS.experience;

  // Data is stored newest-first; tell the story oldest -> newest so the
  // progression reads as growth from the bottom up.
  const journey = [...EXPERIENCE].reverse();
  const currentIndex = journey.length - 1;

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
          {s.subtitle && <p className="section__subtitle">{t(s.subtitle)}</p>}
        </Reveal>

        <Reveal className="journey__path" delay={60}>
          <ol className="journey__path-list">
            {journey.map((job, i) => (
              <li key={job.stage.en} className="journey__path-step">
                <span className="journey__path-num">{i + 1}</span>
                <span className="journey__path-label">{t(job.stage)}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="timeline">
          {journey.map((job, i) => {
            const isCurrent = i === currentIndex;
            return (
              <Reveal
                key={job.company.en + job.period.en}
                delay={i * 90}
                className={`timeline__item${isCurrent ? " timeline__item--current" : ""}`}
              >
                <div className="timeline__marker" aria-hidden="true">
                  <TbBriefcase2 size={16} />
                </div>
                <div className="timeline__content">
                  <div className="timeline__head">
                    <div>
                      <div className="timeline__stagerow">
                        <span className="timeline__stage">{t(job.stage)}</span>
                        {isCurrent && (
                          <span className="timeline__now">{t(UI.current)}</span>
                        )}
                      </div>
                      <h3 className="timeline__role">{t(job.role)}</h3>
                      <span className="timeline__company">{t(job.company)}</span>
                      {job.client && (
                        <span className="timeline__client">{t(job.client)}</span>
                      )}
                    </div>
                    <span className="timeline__period">{t(job.period)}</span>
                  </div>

                  <p className="timeline__highlight">
                    <TbTrophy size={16} />
                    <span>{t(job.highlight)}</span>
                  </p>

                  <p className="timeline__summary">{t(job.summary)}</p>

                  <ul className="timeline__bullets">
                    {job.bullets.map((b) => (
                      <li key={b.en}>
                        <TbCircleCheckFilled size={16} className="timeline__check" />
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="timeline__tags">
                    {job.tags.map((tag) => (
                      <span key={tag.en} className="timeline__tag">
                        {t(tag)}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
