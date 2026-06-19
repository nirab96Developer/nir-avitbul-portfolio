import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLang } from "../i18n/LanguageContext";
import { NAV, UI } from "../i18n/strings";
import { PROFILE } from "../data/content";

const sectionIds = NAV.map((l) => l.href.slice(1));

function LanguageSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="langswitch" role="group" aria-label="Language / שפה">
      <button
        type="button"
        className={`langswitch__btn${lang === "he" ? " is-active" : ""}`}
        onClick={() => setLang("he")}
        aria-pressed={lang === "he"}
      >
        עברית
      </button>
      <button
        type="button"
        className={`langswitch__btn${lang === "en" ? " is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        English
      </button>
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" aria-label={t(UI.home)}>
          <span className="header__monogram">{PROFILE.initials}</span>
          <span className="header__name">{t(PROFILE.name)}</span>
        </a>

        <nav className="header__nav" aria-label={t(UI.primaryNav)}>
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__link${active === link.href.slice(1) ? " is-active" : ""}`}
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <LanguageSwitch />
          <a href="#contact" className="btn btn--primary btn--sm header__cta">
            {t(UI.getInTouch)}
          </a>
          <button
            type="button"
            className={`header__toggle${menuOpen ? " is-open" : ""}`}
            aria-label={t(UI.toggleNav)}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`header__mobile${menuOpen ? " is-open" : ""}`}>
        {NAV.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="header__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {t(link.label)}
          </a>
        ))}
        <div className="header__mobile-lang">
          <LanguageSwitch />
        </div>
        <a href="#contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
          {t(UI.getInTouch)}
        </a>
      </div>
    </header>
  );
}
