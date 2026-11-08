# apertoir-website
Website voor apertoir: appinformatie, downloadlinks en privacyverklaring.

## Bestanden

- `index.html`: landingspagina. Storelinks worden pas toegevoegd als de echte vermeldingen bestaan.
- `privacy/index.html`: privacyverklaring versie 1.4, Nederlands en Engels, voor Free en de voorbereiding van de Play-release. Bevestigd: Mark Amante, Supabase Free in Ierland, Resend Free, maximaal 12 maanden voor feedback en supportmails. De tekst onderscheidt test- en productieadvertenties en beschrijft de lokale leeftijdskeuze bij account aanmaken/inloggen (gastgebruik zonder leeftijd blijft mogelijk), aangepaste Google-behandeling voor 13–15 en 16–17 jaar, UMP en heropenbare privacykeuzes waar Google dit vereist. Bij een publieke advertentierelease moet deze paragraaf aansluiten op de dan werkende toestemmingsflow.
- `assets/style.css` en `assets/icon.png`: lokale stijlen en bestaand K2-appicoon. Het naamlogo naast het icoon volgt `ApertoirWordmark` uit de app: Outfit 500, gedraaide e en gouden i met schuin streepje. Ook de voettekst gebruikt het naamlogo.
- `assets/fonts/`: hetzelfde lokale Outfit-lettertype als in de app, met bijbehorende SIL Open Font License. Geen externe fontaanvraag.
- `.nojekyll`: gewone statische bestanden, geen buildstap nodig.

Een klein lokaal script (`assets/theme.js`) biedt Systeem, Licht en Donker op de homepage en privacyverklaring. Standaard volgt de site de systeeminstelling, ook als die verandert. Een handmatige keuze wordt alleen lokaal in de browser bewaard; Systeem verwijdert die voorkeur. Zonder JavaScript volgt de CSS de systeeminstelling. Geen tracking, externe fonts of appgegevens. De website kan lokaal worden bekeken met `python -m http.server 8080 --bind 127.0.0.1` vanuit deze map.

## GitHub Pages

Repository: `mad7signal/apertoir-website`. In Settings → Pages: Source → Deploy from a branch, Branch → main, map → /(root), Save. De tijdelijke website is dan, na geslaagde publicatie, `https://mad7signal.github.io/apertoir-website/`.

Het publieke adres is **https://apertoir.nl/**, met **https://apertoir.nl/privacy/**. Beide waren op 6 november 2026 via geldige HTTPS bereikbaar. Controleer na upload dat de privacy-URL de nieuwste versie toont.

Het domein is in GitHub Pages ingesteld. De openbare repository bevat inmiddels `CNAME` met `apertoir.nl`; behoud dat bestand. De lokale websitebranch is bijgewerkt op basis van de browseruploads, met behoud van dit domeinbestand. Op 6 november om 22:37 was www CNAME naar mad7signal.github.io correct zichtbaar, maar www-HTTPS nog niet bevestigd. Bestaande Resend-, mail- en nameserverrecords behouden.

Officiële uitleg: [publicatiebron](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [eigen domein](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Vóór AdMob en de publieke apprelease

- De privacytekst voor de huidige testfase is uitgewerkt. De verantwoordelijke bewaakt ook de uitvoering: feedbackopschoning, supportmailverwijdering, privacyverzoeken en providerafspraken. Controleer eventuele wijzigingen vóór een nieuwe release.
- Advertentieparagraaf afstemmen op de uiteindelijke build; UMP en heropenbare privacykeuzes zijn ingebouwd in de Free-testbuild; volledige toestelvalidatie en productieconfiguratie blijven afzonderlijke releasevoorwaarden. Geen claims over verleende toestemming afleiden uit deze verklaring.
- Nederlandse en Engelse tekst samen bijwerken. Versie 1.2 bevat geen conceptlabel of noindex; dit is geen claim van Play-goedkeuring of technische releasegereedheid.
- Pagina anoniem via HTTPS controleren. Werkende privacy-URL invullen in AdMob en later Play Console; in-app tekst synchroon houden.
- App-ads.txt met de exacte regel uit AdMob toevoegen wanneer de ontwikkelaarswebsite wordt gekoppeld. Nog niet opgenomen of geverifieerd.
- Echte Google Play-link toevoegen bij beschikbaarheid; App Store-link pas na iOS-publicatie. Geen fictieve downloadknoppen.

De appbroncode, databasebestanden, API-sleutels, testlogs en privéjournalen horen niet in deze openbare repository.

## Appschermen op de homepage

De sectie ‘A look inside apertoir’ toont de echte Free-interface voor leesritme, braindump en quiz. De zes PNG’s in `assets/screens/` zijn rechtstreeks gerenderd uit de Flutter-widgets met de eigen Outfit-font en uitsluitend fictieve voorbeeldinhoud, op 780 × 1688 pixels. Er zijn geen screenshots met accountgegevens of persoonlijke notities gebruikt. De website zet de beelden in een telefoonframe; de scherminhoud zelf is niet grafisch nagebouwd.

Lichte en donkere beelden volgen de bestaande themakeuze. Een klik opent een toegankelijke vergroting; Escape of Sluiten sluit deze en geeft focus terug. Zonder JavaScript opent de afbeeldingslink rechtstreeks. De beelden worden vertraagd geladen en hebben vaste afmetingen en beschrijvende alternatieve tekst. De tekst vermeldt dat het ontwikkelschermen met voorbeeldinhoud zijn.

De reproduceerbare capture-tool en QA-rapporten staan in de private projectrepository, niet in deze openbare websitebron.

## Standaardtaal

De homepage en alle zes appafbeeldingen zijn vanaf 8 november 2026 standaard Engels, inclusief fictieve titels en notities, navigatie, alternatieve teksten en themakeuze. De app-taal van bezoekers wordt hierdoor niet gewijzigd. `/privacy/` opent met de bestaande Engelse verklaring; Nederlands blijft bereikbaar via `#nederlands`. Bestaande Nederlandse fragmentlinks blijven geldig. Privacyversie 1.5 verduidelijkt ook de bestaande gasttoegang en de huidige Free-wisroute op S16; geen wijziging van gegevensverwerking.
