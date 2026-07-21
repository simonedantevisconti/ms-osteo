# Marta Simeone Osteopata

Sito web professionale dedicato all’attività di **Marta Simeone**, osteopata operativa in diverse sedi della provincia di Monza e Brianza.

Il progetto presenta la formazione professionale, i trattamenti osteopatici disponibili, le sedi di ricevimento e i contatti per richiedere informazioni o prenotare una visita.

## Tecnologie utilizzate

- React
- Vite
- React Router DOM
- Bootstrap
- Lucide React
- CSS personalizzato
- JavaScript

## Funzionalità

- Navigazione tra pagine tramite React Router
- Layout condiviso con Header e Footer
- Menu responsive per desktop, tablet e dispositivi mobili
- Collegamento diretto a WhatsApp
- Collegamento telefonico ed e-mail
- Link alle indicazioni Google Maps
- Sezioni animate durante il caricamento
- Design responsive
- Componenti riutilizzabili
- Stili separati per ogni pagina
- Gestione centralizzata di colori, font e variabili CSS

## Pagine

### Formazione

Pagina principale del sito contenente:

- presentazione professionale;
- descrizione dell’approccio osteopatico;
- formazione accademica;
- specializzazioni;
- esperienza professionale;
- collegamenti ai trattamenti e alla prenotazione.

### Trattamenti

Pagina dedicata ai principali trattamenti disponibili:

- dolori muscolo-scheletrici;
- disturbi viscerali;
- controllo posturale;
- osteopatia pediatrica;
- spiegazione dello svolgimento della prima visita.

### Contatti

Pagina contenente:

- numero di telefono;
- contatto WhatsApp;
- indirizzo e-mail;
- disponibilità su appuntamento;
- sedi di ricevimento;
- collegamenti alle indicazioni stradali.

## Struttura del progetto

```text
marta-simeone-osteopata/
├── public/
│   └── assets/
│       └── imgs/
│           └── immagini del sito
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── layouts/
│   │   └── DefaultLayouts.jsx
│   │
│   ├── pages/
│   │   ├── Formazione.jsx
│   │   ├── Trattamenti.jsx
│   │   └── Contatti.jsx
│   │
│   ├── styles/
│   │   ├── styles.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── formazione.css
│   │   ├── trattamenti.css
│   │   └── contatti.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
