import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiChartdotjs,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiGithub,
  SiWhatsapp,
  SiJinja,
  SiOpenjdk,
  SiGnubash,
  SiHtml5,
  SiJenkins,
  SiPostman,
  SiSqlalchemy,
  SiCelery,
  SiRedis,
  SiNginx,
} from "react-icons/si";
import {
  TbDatabase,
  TbBrandAzure,
  TbBrandAws,
  TbBrandCSharp,
  TbBrandCss3,
  TbBrandWindows,
  TbBrandOffice,
  TbBrandVscode,
  TbBrandAndroid,
  TbBrandLinkedinFilled,
  TbApi,
  TbDeviceMobile,
  TbQrcode,
  TbPalette,
  TbSettingsAutomation,
  TbShieldLock,
  TbUsersGroup,
  TbBrain,
  TbDeviceDesktopCode,
  TbBinaryTree,
  TbLockCog,
  TbCode,
} from "react-icons/tb";

type TechMeta = { Icon: IconType; color: string };

const TECH: Record<string, TechMeta> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  FastAPI: { Icon: SiFastapi, color: "#05998b" },
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#d8b400" },
  Java: { Icon: SiOpenjdk, color: "#e76f51" },
  "C#": { Icon: TbBrandCSharp, color: "#a371f7" },
  Bash: { Icon: SiGnubash, color: "#4EAA25" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: TbBrandCss3, color: "#2f74c0" },
  SQL: { Icon: TbDatabase, color: "#a5b4fc" },
  "REST APIs": { Icon: TbApi, color: "#22d3ee" },
  "SQL Server": { Icon: TbDatabase, color: "#CC2927" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Mongoose: { Icon: SiMongoose, color: "#880000" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "#cbd5e1" },
  "Chart.js": { Icon: SiChartdotjs, color: "#FF6384" },
  SQLAlchemy: { Icon: SiSqlalchemy, color: "#bb2e2e" },
  Celery: { Icon: SiCelery, color: "#37a64a" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  PostGIS: { Icon: TbDatabase, color: "#5b8def" },
  WebAuthn: { Icon: TbShieldLock, color: "#34d399" },
  Passkeys: { Icon: TbShieldLock, color: "#34d399" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Terraform: { Icon: SiTerraform, color: "#844FBA" },
  Ansible: { Icon: SiAnsible, color: "#ee3a3a" },
  Jenkins: { Icon: SiJenkins, color: "#d33833" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  AWS: { Icon: TbBrandAws, color: "#FF9900" },
  Azure: { Icon: TbBrandAzure, color: "#3a9bdc" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Git: { Icon: SiGit, color: "#F05032" },
  "Active Directory": { Icon: TbBrandWindows, color: "#2f9be0" },
  "Windows Server": { Icon: TbBrandWindows, color: "#2f9be0" },
  "Microsoft 365": { Icon: TbBrandOffice, color: "#e0612f" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "VS Code": { Icon: TbBrandVscode, color: "#3a9bdc" },
  "Power Automate": { Icon: TbSettingsAutomation, color: "#3b82f6" },
  Android: { Icon: TbBrandAndroid, color: "#3DDC84" },
  Mobile: { Icon: TbDeviceMobile, color: "#22d3ee" },
  Fragments: { Icon: TbDeviceMobile, color: "#a5b4fc" },
  "QR Codes": { Icon: TbQrcode, color: "#22d3ee" },
  "Material Design": { Icon: TbPalette, color: "#34d399" },
  SharedPreferences: { Icon: TbDatabase, color: "#fbbf24" },
  RBAC: { Icon: TbShieldLock, color: "#a5b4fc" },
  CRM: { Icon: TbUsersGroup, color: "#fb7185" },
  "WhatsApp Business": { Icon: SiWhatsapp, color: "#25D366" },
  AI: { Icon: TbBrain, color: "#c084fc" },
  Jinja: { Icon: SiJinja, color: "#cc4444" },
  Tkinter: { Icon: TbDeviceDesktopCode, color: "#9aa6bd" },
  Algorithms: { Icon: TbBinaryTree, color: "#34d399" },
  Cryptography: { Icon: TbLockCog, color: "#fbbf24" },
  GitHub: { Icon: SiGithub, color: "#e8edf7" },
  LinkedIn: { Icon: TbBrandLinkedinFilled, color: "#0A66C2" },
};

const FALLBACK: TechMeta = { Icon: TbCode, color: "#9aa6bd" };

export function getTechMeta(name: string): TechMeta {
  return TECH[name] ?? FALLBACK;
}

type TechIconProps = {
  name: string;
  size?: number;
  /** Apply the technology's brand color. */
  colored?: boolean;
  className?: string;
};

export default function TechIcon({
  name,
  size = 18,
  colored = true,
  className,
}: TechIconProps) {
  const { Icon, color } = getTechMeta(name);
  return (
    <Icon
      size={size}
      className={className}
      style={colored ? { color } : undefined}
      aria-hidden="true"
    />
  );
}
