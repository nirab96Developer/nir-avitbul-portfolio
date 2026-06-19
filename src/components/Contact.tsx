import {
  TbBrandGithub,
  TbBrandLinkedinFilled,
  TbBrandWhatsapp,
  TbArrowUpRight,
  TbMail,
  TbMapPin,
  TbPhone,
} from "react-icons/tb";
import { PROFILE } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import { SECTIONS, UI } from "../i18n/strings";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();
  const s = SECTIONS.contact;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__card">
          <span className="contact__status">
            <span className="hero__status-dot" />
            {t(PROFILE.availability)}
          </span>
          <h2 className="contact__title">{t(s.title)}</h2>
          {s.subtitle && <p className="contact__text">{t(s.subtitle)}</p>}

          <p className="contact__meta">
            <a href={`mailto:${PROFILE.email}`} className="contact__meta-item">
              <TbMail size={16} /> {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phoneTel}`}
              className="contact__meta-item"
              dir="ltr"
            >
              <TbPhone size={16} /> {PROFILE.phone}
            </a>
            <span className="contact__meta-item">
              <TbMapPin size={16} /> {t(PROFILE.location)}
            </span>
          </p>

          <div className="contact__actions">
            <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
              <TbMail size={19} /> {t(UI.emailMe)}
            </a>
            <a
              href={`https://wa.me/${PROFILE.phoneWa}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--ghost"
            >
              <TbBrandWhatsapp size={20} /> {t(UI.whatsapp)}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--ghost"
            >
              <TbBrandGithub size={20} /> {t(UI.github)}
              <TbArrowUpRight size={16} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--ghost"
            >
              <TbBrandLinkedinFilled size={20} /> {t(UI.linkedin)}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
