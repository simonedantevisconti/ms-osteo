import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import "../styles/header.css";

const links = [
  { to: "/formazione", label: "Formazione" },
  { to: "/trattamenti", label: "Trattamenti" },
  { to: "/contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner container-wide">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Torna alla home">
          <img src="/assets/imgs/logo-marta-icon.png" alt="Logo Marta Simeone" />
          <span>
            <strong>Marta Simeone</strong>
            <small>Osteopata</small>
          </span>
        </Link>

        <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Apri il menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Navigazione principale">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              {link.label}
            </NavLink>
          ))}
          <a className="button button--small" href="https://wa.me/393493590667" target="_blank" rel="noreferrer">
            Prenota ora
          </a>
        </nav>
      </div>
    </header>
  );
}
