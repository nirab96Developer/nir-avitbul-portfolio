import { SKILL_GROUPS, CORE_STACK } from "../data/content";
import type { Skill } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS, UI } from "../i18n/strings";
import TechIcon from "./TechIcon";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLang();
  const s = SECTIONS.skills;

  const proficiency = (level: number) => {
    if (level >= 85) return t(UI.advanced);
    if (level >= 75) return t(UI.proficient);
    return t(UI.working);
  };

  const SkillRow = ({ skill }: { skill: Skill }) => (
    <li className="skill">
      <div className="skill__top">
        <span className="skill__name">
          <span className="skill__icon">
            <TechIcon name={skill.name} size={18} />
          </span>
          {skill.name}
        </span>
        <span className="skill__level">{proficiency(skill.level)}</span>
      </div>
      <div className="skill__bar" aria-hidden="true">
        <span className="skill__bar-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </li>
  );

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
          {s.subtitle && <p className="section__subtitle">{t(s.subtitle)}</p>}
        </Reveal>

        <Reveal className="skills__core" delay={60}>
          <span className="skills__core-label">{t(UI.coreStack)}</span>
          <ul className="skills__core-list">
            {CORE_STACK.map((tech) => (
              <li key={tech} className="skills__core-chip">
                <TechIcon name={tech} size={18} /> {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category.en} delay={i * 80} className="skills__card">
              <header className="skills__card-head">
                <h3 className="skills__category">{t(group.category)}</h3>
                <p className="skills__caption">{t(group.caption)}</p>
              </header>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <SkillRow key={item.name} skill={item} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
