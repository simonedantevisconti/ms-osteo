import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide footer__grid">
        <div className="footer__brand">
          <img src="/assets/imgs/logo-marta-completo.png" alt="Marta Simeone Osteopata" />
          <p>Un approccio osteopatico attento, rispettoso e costruito sulle esigenze della persona.</p>
        </div>

        <div>
          <h3>Esplora</h3>
          <Link to="/formazione">Formazione</Link>
          <Link to="/trattamenti">Trattamenti</Link>
          <Link to="/contatti">Contatti</Link>
        </div>

        <div>
          <h3>Contatti</h3>
          <a href="tel:+393493590667"><Phone size={18} /> 349 359 0667</a>
          <a href="mailto:martasimeone.osteopata@gmail.com"><Mail size={18} /> Scrivi una e-mail</a>
          <span><MapPin size={18} /> Monza e Brianza</span>
        </div>
      </div>
      <div className="footer__bottom container-wide">
        <p>© {new Date().getFullYear()} Marta Simeone Osteopata. Tutti i diritti riservati.</p>
        <p>Le informazioni presenti non sostituiscono il parere medico.</p>
      </div>
    </footer>
  );
}
