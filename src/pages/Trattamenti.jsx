import { ArrowRight, Baby, Bone, CircleGauge, HeartPulse } from "lucide-react";

import "../styles/trattamenti.css";

const treatments = [
  {
    title: "Dolori muscolo-scheletrici",
    image: "/assets/imgs/dolori-muscolo-scheletrici.png",
    icon: Bone,
    text: "Un supporto per tensioni, limitazioni articolari, posture scorrette, contratture e discomfort muscolare, attraverso tecniche selezionate sulla persona.",
  },
  {
    title: "Disturbi viscerali",
    image: "/assets/imgs/disturbi-viscerali.png",
    icon: HeartPulse,
    text: "Un approccio complementare volto a favorire la mobilità dei tessuti e il benessere in presenza di disturbi funzionali ricorrenti.",
  },
  {
    title: "Controllo posturale",
    image: "/assets/imgs/controllo-posturale.png",
    icon: CircleGauge,
    text: "Valutazione e trattamento delle tensioni che influenzano postura, mobilità, elasticità e qualità del movimento quotidiano o sportivo.",
  },
  {
    title: "Osteopatia pediatrica",
    image: "/assets/imgs/osteopatia-pediatrica.png",
    icon: Baby,
    text: "Tecniche dolci e rispettose per accompagnare il bambino durante la crescita e sostenere l’adattamento nelle diverse fasi dello sviluppo.",
  },
];

export default function Trattamenti() {
  return (
    <>
      <section className="page-hero page-hero--treatments">
        <div className="container-narrow reveal">
          <p className="eyebrow">Trattamenti</p>

          <h1>Ogni corpo racconta una storia diversa</h1>

          <p className="page-hero__description">
            La seduta nasce da una valutazione attenta e da un trattamento
            costruito sulle tue esigenze, con tecniche manuali selezionate di
            volta in volta.
          </p>
        </div>
      </section>

      <section className="treatments section-padding">
        <div className="container-wide treatments__grid">
          {treatments.map(({ title, image, icon: Icon, text }, index) => (
            <article
              className="treatment-card reveal"
              style={{ animationDelay: `${index * 100}ms` }}
              key={title}
            >
              <div className="treatment-card__image">
                <img src={image} alt={title} />

                <span className="treatment-card__icon">
                  <Icon size={24} />
                </span>
              </div>

              <div className="treatment-card__body">
                <p className="treatment-card__number">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2>{title}</h2>

                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="practice section-padding">
        <div className="container-wide">
          <div className="section-heading reveal">
            <p className="eyebrow">L’osteopatia in pratica</p>

            <h2>La qualità del gesto manuale incontra l’ascolto</h2>
          </div>

          <div className="practice__gallery">
            <img
              src="/assets/imgs/2.png"
              alt="Valutazione osteopatica del ginocchio"
            />

            <img
              src="/assets/imgs/3.png"
              alt="Trattamento manuale osteopatico"
            />

            <img src="/assets/imgs/4.png" alt="Seduta di osteopatia" />
          </div>
        </div>
      </section>

      <section className="first-visit section-padding">
        <div className="container-wide first-visit__grid">
          <div className="reveal">
            <p className="eyebrow">La prima visita</p>

            <h2>Un percorso chiaro, dall’ascolto al trattamento</h2>
          </div>

          <ol className="steps reveal reveal--delay">
            <li>
              <span>01</span>

              <div>
                <h3>Colloquio iniziale</h3>

                <p>
                  Raccolta delle informazioni utili e ascolto delle tue
                  esigenze.
                </p>
              </div>
            </li>

            <li>
              <span>02</span>

              <div>
                <h3>Valutazione funzionale</h3>

                <p>
                  Osservazione della mobilità e delle aree di maggiore tensione.
                </p>
              </div>
            </li>

            <li>
              <span>03</span>

              <div>
                <h3>Trattamento personalizzato</h3>

                <p>
                  Applicazione delle tecniche più adatte alla situazione emersa.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <a
          className="button first-visit__button"
          href="https://wa.me/393493590667"
          target="_blank"
          rel="noreferrer"
        >
          Prenota la tua visita
          <ArrowRight size={18} />
        </a>
      </section>
    </>
  );
}
