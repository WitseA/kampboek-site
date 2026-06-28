# Kabouters in Wonderland — kampboek-website

Een eenvoudige, mooie website van het kampboek voor het kabouterkamp van
**Scouts Bunt** (1–10 juli 2026, Mol). Gemaakt met React + Vite, gratis te
hosten op Netlify.

De site heeft drie delen op één pagina, bereikbaar via het menu bovenaan:

1. **Kampboek** — alle 10 dagen met foto en uitleg
2. **Leiding & Foeriers** — alle leden met foto en weetjes
3. **Adres & Praktische info** — kampadres, post versturen, noodnummer

---

## 1. Lokaal bekijken

Je hebt [Node.js](https://nodejs.org) nodig (LTS-versie). Daarna:

```bash
cd kampboek-site
npm install      # eenmalig: installeert alles
npm run dev      # start de site lokaal -> open de link die verschijnt
```

---

## 2. Tekst aanpassen

Alle teksten staan in de map **`src/content/`**. Je hoeft alleen de tekst
tussen de aanhalingstekens `"..."` te wijzigen — verder niets.

| Bestand | Wat staat erin |
|--------|----------------|
| `camp.js` | Titel, datums, het voorwoord en de slottekst |
| `days.js` | De 10 dagen (titel, datum, uitleg) |
| `team.js` | Leiding & foeriers (naam, rol, totem, hobby's, weetje, figuur) |
| `info.js` | Kampadres, postadres en het noodnummer |

> Tip: een veld bij een leiding/foerier dat je **leeg** laat (`''`) wordt
> gewoon niet getoond. Zo blijft het netjes tot je het invult.
> Vul ook het **noodnummer** in `info.js` aan zodra je het hebt.

---

## 3. Foto's toevoegen

1. Zet je foto in de map **`public/photos/`**.
2. Zorg dat de bestandsnaam overeenkomt met wat in het inhoud-bestand staat
   (bv. `dag-1.jpg`, `witse.jpg`, `cover.jpg`).

De volledige lijst met verwachte bestandsnamen staat in
`public/photos/README.txt`. Heb je nog geen foto? Dan toont de site
automatisch een nette **"Foto volgt"**-placeholder.

---

## 4. Online zetten via Netlify (gratis)

Je hebt twee opties.

### Optie A — Slepen en klaar (snelst)

1. `npm run build` → er verschijnt een map **`dist/`**.
2. Ga naar **https://app.netlify.com/drop**.
3. Sleep de map `dist` erop. Klaar — je krijgt meteen een link.

Wil je later iets aanpassen? Pas de tekst/foto's aan, run opnieuw
`npm run build` en sleep de nieuwe `dist`-map er weer op.

### Optie B — Gekoppeld aan GitHub (automatisch updaten)

1. Zet deze map als project op GitHub.
2. In Netlify: **Add new site → Import an existing project** → kies je repo.
3. De instellingen staan al klaar in `netlify.toml`
   (build: `npm run build`, publicatiemap: `dist`).
4. Vanaf nu update de site zichzelf telkens je iets naar GitHub pusht.

> De gratis Netlify-laag is ruim voldoende voor deze site.

---

## 5. Kleuren aanpassen (optioneel)

Wil je de kleuren wijzigen? Open `src/theme.css` en pas bovenaan de
waarden onder `:root` aan (bv. `--paars`). De rest van de site volgt
automatisch.
