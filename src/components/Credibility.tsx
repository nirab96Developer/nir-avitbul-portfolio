import type { IconType } from "react-icons";
import {
  TbGitCommit,
  TbBuildingSkyscraper,
  TbStack2,
  TbDatabase,
  TbSchool,
} from "react-icons/tb";
import { CREDIBILITY } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/strings";

const ICONS: Record<string, IconType> = {
  commits: TbGitCommit,
  app: TbBuildingSkyscraper,
  stack: TbStack2,
  sql: TbDatabase,
  degree: TbSchool,
};

export default function Credibility() {
  const { t } = useLang();
  return (
    <section className="credibility" aria-label={t(UI.highlights)}>
      <div className="container">
        <ul className="credibility__list">
          {CREDIBILITY.map((item) => {
            const Icon = ICONS[item.icon] ?? TbStack2;
            return (
              <li key={item.label.en} className="credibility__item">
                <Icon size={18} aria-hidden="true" />
                <span>{t(item.label)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
