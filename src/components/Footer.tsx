import { PROFILE } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/strings";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <span className="footer__monogram">{PROFILE.initials}</span>
          {t(PROFILE.name)}
        </span>
        <p className="footer__note">
          © {year} {t(PROFILE.name)}. {t(UI.builtWith)}
        </p>
        <div className="footer__links">
          <a href={`mailto:${PROFILE.email}`}>{t(UI.email)}</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer noopener">
            {t(UI.github)}
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener">
            {t(UI.linkedin)}
          </a>
        </div>
      </div>
    </footer>
  );
}
