import { useEffect, useState } from "react";
import {
  TbArrowRight,
  TbBrandGithub,
  TbBrandLinkedinFilled,
  TbMapPin,
  TbBriefcase2,
  TbDownload,
} from "react-icons/tb";
import { PROFILE, HERO_STATS, HERO_TECH, HERO_DISCIPLINES } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/strings";
import TechIcon from "./TechIcon";

const HERO_TECH_LIST = HERO_TECH;

export default function Hero() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const titles = PROFILE.titles;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, [titles.length]);

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__glow hero__glow--three" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      <div className="container hero__inner">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__status-dot" />
              {t(PROFILE.availability)}
            </p>

            <h1 className="hero__name">{t(PROFILE.name)}</h1>

            <div className="hero__rotator" aria-live="polite">
              {titles.map((title, i) => (
                <span
                  key={i}
                  className={`hero__rotator-item${i === index ? " is-active" : ""}`}
                >
                  {t(title)}
                </span>
              ))}
            </div>

            <p className="hero__tagline">{t(PROFILE.tagline)}</p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                {t(UI.viewMyWork)}
                <TbArrowRight size={18} className="btn__arrow" />
              </a>
              <a href="#contact" className="btn btn--ghost">
                {t(UI.getInTouch)}
              </a>
              <a
                href={PROFILE.cv}
                download="Nir-Avitbul-CV.pdf"
                className="btn btn--ghost"
              >
                <TbDownload size={18} /> {t(UI.downloadCv)}
              </a>
            </div>

            <div className="hero__badges">
              {HERO_TECH_LIST.map((tech, i) => (
                <span
                  key={tech}
                  className="hero__badge"
                  style={{ animationDelay: `${i * 0.4}s` }}
                  title={tech}
                >
                  <TechIcon name={tech} size={16} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero__profile">
            <div className="profile-card">
              <div className="profile-card__top">
                <div className="profile-card__avatar">
                  <span className="profile-card__avatar-ring" aria-hidden="true" />
                  <img
                    className="profile-card__photo"
                    src={PROFILE.photo}
                    alt={t(PROFILE.name)}
                    width={80}
                    height={80}
                    loading="eager"
                  />
                </div>
                <span className="profile-card__badge">
                  <span className="hero__status-dot" />
                  {t(UI.available)}
                </span>
              </div>

              <h2 className="profile-card__name">{t(PROFILE.name)}</h2>
              <p className="profile-card__role">{t(PROFILE.role)}</p>

              <div className="profile-card__meta">
                <p className="profile-card__current">
                  <TbBriefcase2 size={15} /> {t(PROFILE.current)}
                </p>
                <p className="profile-card__location">
                  <TbMapPin size={15} /> {t(PROFILE.location)}
                </p>
              </div>

              <div className="profile-card__links">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-card__link"
                  aria-label="GitHub"
                >
                  <TbBrandGithub size={18} /> {t(UI.github)}
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="profile-card__link"
                  aria-label="LinkedIn"
                >
                  <TbBrandLinkedinFilled size={18} /> {t(UI.linkedin)}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero__stats">
          {HERO_STATS.map((stat) => (
            <div key={stat.label.en} className="hero__stat">
              <span className="hero__stat-value">{t(stat.value)}</span>
              <span className="hero__stat-label">{t(stat.label)}</span>
            </div>
          ))}
        </div>

        <div className="hero__disciplines">
          <span className="hero__disciplines-label">{t(UI.disciplines)}</span>
          <ul className="hero__disciplines-list">
            {HERO_DISCIPLINES.map((d) => (
              <li key={d.en} className="hero__discipline">
                {t(d)}
              </li>
            ))}
          </ul>
        </div>

        <a href="#about" className="hero__scroll" aria-label={t(UI.scroll)}>
          <span className="hero__scroll-mouse" />
          <span className="hero__scroll-label">{t(UI.scroll)}</span>
        </a>
      </div>
    </section>
  );
}
