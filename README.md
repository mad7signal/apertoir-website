# apertoir-website
Website voor apertoir: appinformatie, downloadlinks en privacyverklaring.

## Bestanden

- `index.html`: landingspagina. Storelinks worden pas toegevoegd als de echte vermeldingen bestaan.
- `privacy/index.html`: privacyverklaring versie 1.0, Nederlands en Engels, voor de huidige Free-testbuild. Bevestigd: Mark Amante, Supabase Free in Ierland, Resend Free, maximaal 12 maanden voor feedback en supportmails. De tekst beschrijft testadvertenties en claimt geen al werkende advertentietoestemming. Bij een publieke advertentierelease moet deze paragraaf aansluiten op de dan werkende toestemmingsflow.
- `assets/style.css` en `assets/icon.png`: lokale stijlen en bestaand K2-appicoon.
- `.nojekyll`: gewone statische bestanden, geen buildstap nodig.

Geen JavaScript, tracking, externe fonts of appgegevens. De website kan lokaal worden bekeken met `python -m http.server 8080 --bind 127.0.0.1` vanuit deze map.

## GitHub Pages

Repository: `mad7signal/apertoir-website`. In Settings → Pages: Source → Deploy from a branch, Branch → main, map → /(root), Save. De tijdelijke website is dan, na geslaagde publicatie, `https://mad7signal.github.io/apertoir-website/`.

Het publieke adres is **https://apertoir.nl/**, met **https://apertoir.nl/privacy/**. Beide waren op 6 november 2026 via geldige HTTPS bereikbaar. Controleer na upload dat de privacy-URL de nieuwste versie toont.

Het domein is in GitHub Pages ingesteld. De openbare repository bevat inmiddels `CNAME` met `apertoir.nl`; behoud dat bestand. De lokale websitebranch is bijgewerkt op basis van de browseruploads, met behoud van dit domeinbestand. Op 6 november om 22:37 was www CNAME naar mad7signal.github.io correct zichtbaar, maar www-HTTPS nog niet bevestigd. Bestaande Resend-, mail- en nameserverrecords behouden.

Officiële uitleg: [publicatiebron](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [eigen domein](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Vóór AdMob en de publieke apprelease

- De privacytekst voor de huidige testfase is uitgewerkt. De verantwoordelijke bewaakt ook de uitvoering: feedbackopschoning, supportmailverwijdering, privacyverzoeken en providerafspraken. Controleer eventuele wijzigingen vóór een nieuwe release.
- Advertentieparagraaf afstemmen op de uiteindelijke build; UMP en heropenbare privacykeuzes werken nog niet in de huidige testbuild. Geen claims over verleende toestemming afleiden uit deze verklaring.
- Nederlandse en Engelse tekst samen bijwerken. Versie 1.0 bevat geen conceptlabel of noindex; dit is geen claim van Play-goedkeuring of technische releasegereedheid.
- Pagina anoniem via HTTPS controleren. Werkende privacy-URL invullen in AdMob en later Play Console; in-app tekst synchroon houden.
- App-ads.txt met de exacte regel uit AdMob toevoegen wanneer de ontwikkelaarswebsite wordt gekoppeld. Nog niet opgenomen of geverifieerd.
- Echte Google Play-link toevoegen bij beschikbaarheid; App Store-link pas na iOS-publicatie. Geen fictieve downloadknoppen.

De appbroncode, databasebestanden, API-sleutels, testlogs en privéjournalen horen niet in deze openbare repository.
