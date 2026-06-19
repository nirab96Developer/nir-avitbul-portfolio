import type { IconType } from "react-icons";
import {
  TbBuildingSkyscraper,
  TbDatabaseSearch,
  TbPlugConnected,
  TbSettingsAutomation,
  TbUsersGroup,
} from "react-icons/tb";
import { IMPACT } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS } from "../i18n/strings";
import Reveal from "./Reveal";

const ICONS: Record<string, IconType> = {
  ManagementImpact: TbBuildingSkyscraper,
  SqlImpact: TbDatabaseSearch,
  IntegrationImpact: TbPlugConnected,
  AutomationImpact: TbSettingsAutomation,
  UsersImpact: TbUsersGroup,
};

export default function Impact() {
  const { t } = useLang();
  const s = SECTIONS.impact;

  return (
    <section id="impact" className="section">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
          {s.subtitle && <p className="section__subtitle">{t(s.subtitle)}</p>}
        </Reveal>

        <div className="impact__grid">
          {IMPACT.map((item, i) => {
            const Icon = ICONS[item.icon] ?? TbBuildingSkyscraper;
            const isWide = i === IMPACT.length - 1 && IMPACT.length % 2 !== 0;
            return (
              <Reveal
                key={item.title.en}
                delay={i * 80}
                className={`impact__card${isWide ? " impact__card--wide" : ""}`}
              >
                <div className="impact__icon">
                  <Icon size={24} />
                </div>
                <div className="impact__body">
                  <div className="impact__heading">
                    <h3 className="impact__title">{t(item.title)}</h3>
                    {item.metric && (
                      <span className="impact__metric">{item.metric}</span>
                    )}
                  </div>
                  <p className="impact__desc">{t(item.description)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
