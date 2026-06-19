import { TbSchool, TbCertificate, TbStarFilled, TbTrophy, TbLanguage } from "react-icons/tb";
import { EDUCATION } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS, UI } from "../i18n/strings";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLang();
  const s = SECTIONS.education;
  const { degree, certifications, languages } = EDUCATION;

  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="section__kicker">{t(s.kicker)}</p>
          <h2 className="section__title">{t(s.title)}</h2>
          {s.subtitle && <p className="section__subtitle">{t(s.subtitle)}</p>}
        </Reveal>

        <div className="education__grid">
          <Reveal className="education__degree">
            <div className="education__degree-head">
              <span className="education__icon">
                <TbSchool size={24} />
              </span>
              <span className="education__honor">
                <TbStarFilled size={13} /> {t(UI.honors)}
              </span>
            </div>

            <h3 className="education__degree-title">{t(degree.title)}</h3>
            <p className="education__institution">
              {t(degree.institution)} · {t(degree.period)}
            </p>

            <div className="education__stats">
              <div className="education__stat">
                <span className="education__stat-num">91</span>
                <span className="education__stat-label">{t(UI.gpaShort)}</span>
              </div>
              <div className="education__stat">
                <span className="education__stat-num">100</span>
                <span className="education__stat-label">{t(UI.finalProjectShort)}</span>
              </div>
              <div className="education__stat">
                <span className="education__stat-num">{t(UI.honors)}</span>
                <span className="education__stat-label">{t(UI.graduate)}</span>
              </div>
            </div>

            <p className="education__final">
              <img
                className="education__final-logo"
                src="/forewise-logo.svg"
                alt="Forewise logo"
                width={20}
                height={20}
              />
              <TbTrophy size={16} /> {t(degree.finalProject)}
            </p>

            <div className="education__focus">
              {degree.focus.map((f) => (
                <span key={f.en} className="education__focus-chip">
                  {t(f)}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="education__side" delay={120}>
            <div className="education__card">
              <p className="education__card-label">
                <TbCertificate size={16} /> {t(UI.certifications)}
              </p>
              <ul className="education__certs">
                {certifications.map((cert) => (
                  <li key={cert.title.en} className="education__cert">
                    <span className="education__cert-title">{t(cert.title)}</span>
                    <span className="education__cert-meta">
                      {t(cert.issuer)} · {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="education__card">
              <p className="education__card-label">
                <TbLanguage size={16} /> {t(UI.languagesLabel)}
              </p>
              <ul className="education__langs">
                {languages.map((langItem) => (
                  <li key={langItem.name.en} className="education__lang">
                    <span>{t(langItem.name)}</span>
                    <span className="education__lang-level">{t(langItem.level)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
