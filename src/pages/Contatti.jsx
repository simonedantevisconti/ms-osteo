import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import "../styles/contatti.css";

const offices = [
  {
    name: "Bonfanti Osteopatia",
    city: "Busnago",
    address: "Via Italia 197, Busnago (MB)",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Centro+Commerciale+Globo+Busnago,+Via+Italia+197,+Busnago+MB,+Italia",
  },
  {
    name: "Poliambulatorio PiEmmeGi",
    city: "Brugherio",
    address: "Via S. Caterina 72, Brugherio (MB)",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Via+S.+Caterina+72,+Brugherio+MB,+Italia",
  },
  {
    name: "Farmacia Triante",
    city: "Monza",
    address: "Via Monte Cervino 2, Monza (MB)",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Via+Monte+Cervino+2,+Monza+MB,+Italia",
  },
];

export default function Contatti() {
  return (
    <>
      <section className="contact-hero section-padding">
        <div className="container-wide contact-hero__grid">
          <div className="reveal">
            <p className="eyebrow">Contatti</p>

            <h1>Parliamo della tua salute</h1>

            <p className="contact-hero__description">
              Per informazioni o per fissare un appuntamento puoi contattarmi
              direttamente. Ricevo esclusivamente su appuntamento.
            </p>
          </div>

          <div className="contact-panel reveal reveal--delay">
            <a
              href="https://wa.me/393493590667"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />

              <div>
                <span>WhatsApp</span>
                <strong>349 359 0667</strong>
              </div>
            </a>

            <a href="tel:+393493590667">
              <Phone />

              <div>
                <span>Telefono</span>
                <strong>349 359 0667</strong>
              </div>
            </a>

            <a href="mailto:martasimeone.osteopata@gmail.com">
              <Mail />

              <div>
                <span>E-mail</span>
                <strong>martasimeone.osteopata@gmail.com</strong>
              </div>
            </a>

            <div>
              <Clock3 />

              <div>
                <span>Disponibilità</span>
                <strong>Solo su appuntamento</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offices section-padding">
        <div className="container-wide">
          <div className="section-heading reveal">
            <p className="eyebrow">Dove ricevo</p>
            <h2>Tre sedi in Monza e Brianza</h2>
          </div>

          <div className="offices__grid">
            {offices.map((office, index) => (
              <article
                className="office-card reveal"
                style={{ animationDelay: `${index * 100}ms` }}
                key={office.name}
              >
                <span className="office-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <MapPin size={28} />

                <p>{office.city}</p>

                <h3>{office.name}</h3>

                <span>{office.address}</span>

                <a href={office.directions} target="_blank" rel="noreferrer">
                  Ottieni indicazioni →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <img
          src="/assets/imgs/1.png"
          alt="Mani che proteggono i piedi di un neonato"
        />

        <div className="contact-cta__overlay">
          <div className="container-narrow reveal">
            <p className="eyebrow">Osteopatia per ogni età</p>

            <h2>Un trattamento rispettoso, dalla nascita all’età adulta</h2>

            <a
              className="button button--light"
              href="https://wa.me/393493590667"
              target="_blank"
              rel="noreferrer"
            >
              Richiedi informazioni
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
