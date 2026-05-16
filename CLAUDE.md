# CLAUDE.md — Improo Website

## 1. Over het project

- Naam: **Improo-Site**
- Type: Statische website (plain HTML + CSS)
- Gehost op: **Vercel** (met Vercel Analytics ingebouwd)
- Doel: Marketing/landingspagina voor de Improo-community en mobiele app
- Taal van de website: **Engels**
- Primaire taal in deze samenwerking: **Engels** (Ramon's voorkeur vanaf sessie 5)

## 2. Wat is Improo

Improo is een gezondheids- en self-improvement platform gericht op:
- Gewicht verliezen stap voor stap
- Meer bewegen (stappen, wandelen)
- Betere gewoontes opbouwen (slaap, eten, vasten)
- Community-steun: je bent niet alleen
- De filosofie: **kleine stappen, echte vooruitgang**

De website is de publieke voorkant van het platform. De echte app
(React Native / Expo) wordt gebouwd in het aparte project `c:\projects\improo`.

## 3. Over de gebruiker

- Naam: **Ramon**
- Ramon heeft **geen code-ervaring**
- Leg elke wijziging uit in **gewone taal** — geen vakjargon zonder uitleg
- Geef altijd **complete bestanden** terug wanneer je iets aanpast
- Als iets onduidelijk is: **vraag door**, verzin niets
- Vóór grote wijzigingen: **leg eerst het plan uit en vraag om akkoord**

## 4. Projectstructuur

```
Improo-Site/
├── index.html              — Hoofdpagina (hero, features, waitlist, FAQ)
├── guides.html             — Overzichtspagina voor guides
├── roadmap.html            — Publieke roadmap van de app
├── disclaimer.html         — Juridische disclaimer
├── privacy-policy.html     — Privacybeleid
├── terms-of-service.html   — Algemene voorwaarden
├── styles.css              — Alle stijlen (één enkel CSS-bestand)
├── styles-dark-backup.css.css — Backup van eerdere dark-mode stijlen
├── images/                 — Afbeeldingen (logo.png, app.jpg, etc.)
├── guides/                 — Individuele gidspagina's (HTML-bestanden)
│   ├── intermittent-fasting.html
│   ├── what-is-keto.html
│   └── ...meer gidsen
└── insights/               — Artikelen / blog-sectie
    ├── index.html          — Overzichtspagina artikelen
    └── ...individuele artikelen
```

## 5. Design & Stijl

- Primaire kleur: **blauw `#2563eb`**
- Accentkleur: **`#3b9ef5`**
- Achtergrond: lichtgrijs/wit
- Font: **Sora** (via Google Fonts / CDN)
- Icons: **Tabler Icons** (webfont via CDN)
- Vercel Analytics: al ingebouwd in elke pagina — niet verwijderen
- Mobile-first design
- Geen video's (bewuste keuze)
- Toon: warm, aanmoedigend, eerlijk — geen hype, geen schreeuwerige claims

## 6. Navigatie (alle pagina's)

Elke pagina heeft dezelfde header met:
- Links: Improo-logo (tekst, gradient blauw)
- Nav: Home · Articles · Guides · Roadmap · Contact (popup)
- Rechts: YouTube-icoon + X (Twitter)-icoon

Zorg dat wijzigingen aan de navigatie in **alle HTML-bestanden** worden doorgevoerd.

## 7. Wat de site bevat

- **Hero**: hoofdboodschap + statistieken (80% / 95% / 65%) + CTA naar waitlist
- **Waitlist**: e-mailinschrijving (Supabase `waitlist_subscribers` tabel via fetch-API)
- **Features/tools**: stappenteller, vastenklok, gewichtslogger, gorden-systeem
- **Guides**: uitgebreide gidsen over gewichtsverlies, vasten, keto, slaap, etc.
- **Insights/Articles**: blog-achtige artikelen over self-improvement
- **Roadmap**: publieke roadmap van de Improo-app

## 8. Verbinding met de app

De website en de app (`c:\projects\improo`) zijn zusterprojecten:
- De website verwijst naar de app (downloadlinks, features)
- De waitlist (Supabase) en de app gebruiken dezelfde Supabase-instantie
- Stijlgids is gedeeld: zelfde kleuren, zelfde merkidentiteit
- App-features die nog niet af zijn, staan op de roadmap van de website

## 9. Technische afspraken

- Geen npm/bundler — dit is plain HTML/CSS/JS
- Geen frameworks (geen React, geen Vue)
- Inline JavaScript is oké voor kleine interacties (contact-popup, waitlist-form)
- Externe CDN's die al in gebruik zijn:
  - Tabler Icons: `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/`
  - Google Fonts: Sora
- Vercel deployment: pushen naar `main` branch → automatisch live
- Bij nieuwe pagina's: voeg dezelfde `<head>` structuur + navigatie toe als de bestaande pagina's

## 10. Wat je NIET mag doen zonder overleg

- Bestanden in `images/` verwijderen
- De Vercel Analytics-scriptregels verwijderen
- De navigatiestructuur ingrijpend wijzigen
- Bestaande gidsen of artikelen verwijderen of herschrijven
- Externe CDN-links vervangen door iets anders

## 11. Samenwerking

- Bij grote taken: maak eerst een **stappenplan** en vink af wat klaar is
- Als iets risicovol is: **waarschuw duidelijk vooraf**
- Als je iets niet zeker weet: **zeg het eerlijk**
- Als Ramon iets vraagt dat niet slim is: **zeg het**, leg uit waarom,
  en stel iets beters voor
