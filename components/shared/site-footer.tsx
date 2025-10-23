import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/mahir-jeet", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahir-jeet",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:mahir.jeet@example.com", icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__meta">
        <span className="site-footer__name">
          © {new Date().getFullYear()} Mahir Jeet
        </span>
        <p className="site-footer__tagline">
          Code, craft, and curiosity from Toronto.
        </p>
      </div>
      <div className="site-footer__links">
        {footerLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            <Icon size={16} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
