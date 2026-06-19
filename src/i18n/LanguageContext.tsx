import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Loc } from "../data/content";

export type Lang = "he" | "en";

type LanguageCtx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the string for the active language. */
  t: (loc: Loc) => string;
};

const LanguageContext = createContext<LanguageCtx | null>(null);

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "he" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "he";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const t = useCallback((loc: Loc) => loc[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
