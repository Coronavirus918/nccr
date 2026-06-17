import { Flame } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <span className="brand-mark">
            <Flame size={22} />
          </span>
          <span>Nyama Choma Resort</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href + item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
