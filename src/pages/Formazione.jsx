import { ArrowRight, Award, BookOpen, HeartHandshake } from "lucide-react";

import { Link } from "react-router-dom";

import "../styles/formazione.css";

export default function Formazione() {
  return (
    <>
      <section className="hero">
        <div className="container-wide hero__grid">
          <div className="hero__content reveal">
            <p className="eyebrow">Osteopatia personalizzata</p>

            <h1>
              Ascolta il
              <br />
              corpo
              <br />
              <em>
                Ritrova
                <br />
                l&apos;equilibrio
              </em>
            </h1>

            <p className="hero__lead">
              Trattamenti osteopatici individuali per sostenere mobilità,
              funzionalità e benessere in ogni fase della vita.
            </p>

            <div className="hero__actions">
              <Link className="text-link" to="/trattamenti">
                Scopri i trattamenti
              </Link>

              <a
                className="button"
                href="https://wa.me/393493590667"
                target="_blank"
                rel="noreferrer"
              >
                Prenota una visita
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero__visual reveal reveal--delay">
            <div className="hero__image-wrap">
              <img
                src="/assets/imgs/logo-marta-icon.png"
                alt="Marta Simeone osteopata"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="container-wide intro-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Chi sono</p>
            <h2>Una visione completa della persona</h2>
          </div>

          <div className="intro-copy reveal reveal--delay">
            <p>
              Il funzionamento del corpo umano mi ha sempre incuriosita e
              affascinata. L’osteopatia mi permette di osservarlo come un
              sistema interconnesso, ricercando le possibili cause del disturbo
              senza soffermarmi soltanto sul sintomo.
            </p>

            <p>
              Ogni trattamento viene costruito in modo individuale, con
              l’obiettivo di migliorare la funzionalità corporea, ridurre il
              dolore e sostenere la salute della persona.
            </p>
          </div>
        </div>
      </section>

      <section className="formation-section section-padding">
        <div className="container-wide formation-grid">
          <div className="portrait-card reveal">
            <img
              src="/assets/imgs/marta-ritratto.jpg"
              alt="Ritratto di Marta Simeone"
            />
          </div>

          <div className="timeline reveal reveal--delay">
            <p className="eyebrow">Formazione ed esperienza</p>

            <h2>Competenza in continuo aggiornamento</h2>

            <article>
              <span className="timeline__icon">
                <Award size={20} />
              </span>

              <div>
                <h3>Formazione osteopatica</h3>

                <p>
                  Diploma in Osteopatia presso ICOM International College of
                  Osteopathic Medicine e Master of Science in Osteopathy presso
                  Nescot University, conseguiti nel 2017.
                </p>
              </div>
            </article>

            <article>
              <span className="timeline__icon">
                <BookOpen size={20} />
              </span>

              <div>
                <h3>Specializzazioni</h3>

                <p>
                  Diploma MCB nel 2015, Master in Osteopatia Pediatrica presso
                  SIOP e percorso di Biodinamica presso Advanced Osteopathy
                  Institute.
                </p>
              </div>
            </article>

            <article>
              <span className="timeline__icon">
                <HeartHandshake size={20} />
              </span>

              <div>
                <h3>Esperienza professionale</h3>

                <p>
                  Esperienza in ambito sportivo, docenza universitaria e
                  attività clinica presso centri polispecialistici, farmacia e
                  studio privato.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container-wide cta-band__inner reveal">
          <div>
            <p className="eyebrow">Inizia il tuo percorso</p>
            <h2>Prenditi cura della tua salute</h2>
          </div>

          <a
            className="button button--light"
            href="https://wa.me/393493590667"
            target="_blank"
            rel="noreferrer"
          >
            Scrivimi su WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
