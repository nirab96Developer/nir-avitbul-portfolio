import { useState } from "react";
import {
  TbBrandGithub,
  TbArrowUpRight,
  TbStarFilled,
  TbCircleCheckFilled,
  TbLayoutGrid,
} from "react-icons/tb";
import { PROFILE, PROJECTS } from "../data/content";
import type { Project } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { UI, SECTIONS } from "../i18n/strings";
import TechIcon from "./TechIcon";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

function ProblemSolution({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <dl className="pso">
      <div className="pso__row">
        <dt className="pso__label pso__label--problem">{t(UI.problem)}</dt>
        <dd className="pso__text">{t(project.problem)}</dd>
      </div>
      <div className="pso__row">
        <dt className="pso__label pso__label--solution">{t(UI.solution)}</dt>
        <dd className="pso__text">{t(project.solution)}</dd>
      </div>
      <div className="pso__row">
        <dt className="pso__label pso__label--outcome">{t(UI.outcome)}</dt>
        <dd className="pso__text">{t(project.outcome)}</dd>
      </div>
    </dl>
  );
}

function TechRow({ tech }: { tech: string[] }) {
  return (
    <ul className="project__tech">
      {tech.map((tname) => (
        <li key={tname}>
          <TechIcon name={tname} size={14} /> {tname}
        </li>
      ))}
    </ul>
  );
}

function Actions({ project, onOpen }: { project: Project; onOpen?: () => void }) {
  const { t } = useLang();
  const codeHref = project.links?.github ?? PROFILE.github;
  return (
    <div className="project__actions">
      {project.caseStudy && onOpen && (
        <button type="button" className="btn btn--primary btn--sm" onClick={onOpen}>
          <TbLayoutGrid size={17} /> {t(UI.viewDetails)}
        </button>
      )}
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
          className="btn btn--ghost btn--sm"
        >
          <TbArrowUpRight size={18} /> {t(UI.live)}
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t } = useLang();
  const cover = project.screenshots?.[0];

  return (
    <Reveal className={`project project--${project.accent} project--featured`}>
      <article className="project__card project__card--featured">
        <div className="project__featured-main">
          <div className="project__featured-head">
            <span className="project__glyph">
              <TechIcon name={project.icon} size={30} />
            </span>
            <span
              className={`project__featured-tag${project.flagship ? " project__featured-tag--flagship" : ""}`}
            >
              <TbStarFilled size={13} />{" "}
              {project.flagship ? t(UI.flagship) : t(UI.featured)}
            </span>
          </div>
          <h3 className="project__title">{project.title}</h3>
          {project.client && (
            <span className="project__client">{t(project.client)}</span>
          )}
          <p className="project__summary">{t(project.summary)}</p>
          <p className="project__desc">{t(project.description)}</p>

          {project.metrics && (
            <ul className="project__metrics">
              {project.metrics.map((m) => (
                <li key={m.label.en} className="project__metric">
                  <span className="project__metric-value">{m.value}</span>
                  <span className="project__metric-label">{t(m.label)}</span>
                </li>
              ))}
            </ul>
          )}

          <ProblemSolution project={project} />

          <div className="project__chips">
            {project.achievements.map((a) => (
              <span key={a.en} className="project__chip">
                <TbCircleCheckFilled size={14} /> {t(a)}
              </span>
            ))}
          </div>
          <TechRow tech={project.tech} />
          <Actions project={project} onOpen={onOpen} />
        </div>

        <div className="project__featured-side">
          {cover ? (
            <button
              type="button"
              className="project__shotpreview"
              onClick={onOpen}
              aria-label={t(UI.viewScreenshots)}
            >
              <img src={cover.src} alt={t(cover.caption)} loading="lazy" />
              <span className="project__shotpreview-overlay">
                <TbLayoutGrid size={18} /> {t(UI.viewScreenshots)}
              </span>
            </button>
          ) : (
            <>
              <p className="project__side-label">{t(UI.keyCapabilities)}</p>
              <ul className="project__highlights">
                {project.highlights.map((h) => (
                  <li key={h.en}>{t(h)}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen?: () => void;
}) {
  const { t } = useLang();
  return (
    <Reveal delay={index * 80} className={`project project--${project.accent}`}>
      <article className="project__card">
        <div className="project__head">
          <span className="project__glyph">
            <TechIcon name={project.icon} size={24} />
          </span>
          <div className="project__head-text">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__summary">{t(project.summary)}</p>
          </div>
        </div>

        <p className="project__desc">{t(project.description)}</p>

        <ProblemSolution project={project} />

        <div className="project__chips">
          {project.achievements.map((a) => (
            <span key={a.en} className="project__chip">
              <TbCircleCheckFilled size={13} /> {t(a)}
            </span>
          ))}
        </div>

        <TechRow tech={project.tech} />
        <Actions project={project} onOpen={onOpen} />
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useLang();
  const s = SECTIONS.projects;
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const openProject = PROJECTS.find((p) => p.title === openTitle) ?? null;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
          {s.subtitle && <p className="section__subtitle">{t(s.subtitle)}</p>}
        </Reveal>

        <div className="projects__featured">
          {featured.map((project) => (
            <FeaturedProject
              key={project.title}
              project={project}
              onOpen={() => setOpenTitle(project.title)}
            />
          ))}
        </div>

        <div className="projects__grid">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={
                project.caseStudy ? () => setOpenTitle(project.title) : undefined
              }
            />
          ))}
        </div>
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenTitle(null)} />
      )}
    </section>
  );
}
