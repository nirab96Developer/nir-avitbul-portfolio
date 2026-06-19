import { useEffect, useState, useCallback } from "react";
import {
  TbX,
  TbChevronLeft,
  TbChevronRight,
  TbLayoutGrid,
  TbListCheck,
  TbAlertTriangle,
  TbBulb,
  TbBrandGithub,
  TbArrowUpRight,
} from "react-icons/tb";
import type { Project } from "../data/content";
import { PROFILE } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/strings";
import TechIcon from "./TechIcon";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLang();
  const shots = project.screenshots ?? [];
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((i) => (i + 1) % shots.length),
    [shots.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + shots.length) % shots.length),
    [shots.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && shots.length > 1) next();
      else if (e.key === "ArrowLeft" && shots.length > 1) prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev, shots.length]);

  const cs = project.caseStudy;
  const codeHref = project.links?.github ?? PROFILE.github;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — ${t(UI.caseStudy)}`}
      onClick={onClose}
    >
      <div
        className={`modal__panel project--${project.accent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label={t(UI.close)}>
          <TbX size={22} />
        </button>

        <header className="modal__head">
          <span className="project__glyph">
            <TechIcon name={project.icon} size={28} />
          </span>
          <div>
            <p className="modal__eyebrow">{t(UI.caseStudy)}</p>
            <h2 className="modal__title">{project.title}</h2>
            <p className="modal__summary">{t(project.summary)}</p>
          </div>
        </header>

        <div className="modal__body">
          {shots.length > 0 && (
            <div className="carousel">
              <div className="carousel__stage">
                <button
                  className="carousel__nav carousel__nav--prev"
                  onClick={prev}
                  aria-label={t(UI.prevShot)}
                >
                  <TbChevronLeft size={22} />
                </button>
                <img
                  className="carousel__img"
                  src={shots[active].src}
                  alt={t(shots[active].caption)}
                  loading="lazy"
                />
                <button
                  className="carousel__nav carousel__nav--next"
                  onClick={next}
                  aria-label={t(UI.nextShot)}
                >
                  <TbChevronRight size={22} />
                </button>
              </div>
              <div className="carousel__footer">
                <p className="carousel__caption">{t(shots[active].caption)}</p>
                <div className="carousel__dots">
                  {shots.map((shot, i) => (
                    <button
                      key={shot.src}
                      className={`carousel__dot${i === active ? " is-active" : ""}`}
                      onClick={() => setActive(i)}
                      aria-label={`${t(UI.goToShot)} ${i + 1}`}
                      aria-current={i === active || undefined}
                    />
                  ))}
                </div>
              </div>
              <div className="carousel__thumbs">
                {shots.map((shot, i) => (
                  <button
                    key={shot.src}
                    className={`carousel__thumb${i === active ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={t(shot.caption)}
                  >
                    <img src={shot.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {cs && (
            <>
              <section className="modal__section">
                <h3 className="modal__section-title">{t(UI.overview)}</h3>
                <p className="modal__text">{t(cs.overview)}</p>
              </section>

              <div className="modal__columns">
                <section className="modal__section">
                  <h3 className="modal__section-title">
                    <TbLayoutGrid size={18} /> {t(UI.architecture)}
                  </h3>
                  <ul className="modal__list">
                    {cs.architecture.map((a) => (
                      <li key={a.en}>{t(a)}</li>
                    ))}
                  </ul>
                </section>

                <section className="modal__section">
                  <h3 className="modal__section-title">
                    <TbListCheck size={18} /> {t(UI.features)}
                  </h3>
                  <ul className="modal__list">
                    {cs.features.map((f) => (
                      <li key={f.en}>{t(f)}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="modal__section">
                <h3 className="modal__section-title">{t(UI.technologies)}</h3>
                <ul className="project__tech">
                  {project.tech.map((tname) => (
                    <li key={tname}>
                      <TechIcon name={tname} size={14} /> {tname}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="modal__columns">
                <section className="modal__section">
                  <h3 className="modal__section-title">
                    <TbAlertTriangle size={18} /> {t(UI.challenges)}
                  </h3>
                  <ul className="modal__list">
                    {cs.challenges.map((c) => (
                      <li key={c.en}>{t(c)}</li>
                    ))}
                  </ul>
                </section>

                <section className="modal__section">
                  <h3 className="modal__section-title">
                    <TbBulb size={18} /> {t(UI.lessons)}
                  </h3>
                  <ul className="modal__list">
                    {cs.lessons.map((l) => (
                      <li key={l.en}>{t(l)}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </>
          )}

          <div className="modal__actions">
            <a
              href={codeHref}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--ghost btn--sm"
            >
              <TbBrandGithub size={18} /> {t(UI.code)}
            </a>
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn--primary btn--sm"
              >
                <TbArrowUpRight size={18} /> {t(UI.liveDemo)}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
