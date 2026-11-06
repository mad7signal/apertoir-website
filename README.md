# apertoir-website
Website voor apertoir: appinformatie, downloadlinks en privacyverklaring.

## Bestanden

- `index.html`: landingspagina. Storelinks worden pas toegevoegd als de echte vermeldingen bestaan.
- `privacy/index.html`: Nederlands en Engels privacyconcept voor de huidige Free-testbuild. Nog niet gebruiken als definitieve AdMob-/Play-verklaring.
- `assets/style.css` en `assets/icon.png`: lokale stijlen en bestaand K2-appicoon.
- `.nojekyll`: gewone statische bestanden, geen buildstap nodig.

Geen JavaScript, tracking, externe fonts of appgegevens. De website kan lokaal worden bekeken met `python -m http.server 8080 --bind 127.0.0.1` vanuit deze map.

## GitHub Pages

Repository: `mad7signal/apertoir-website`. In Settings → Pages: Source → Deploy from a branch, Branch → main, map → /(root), Save. De tijdelijke website is dan, na geslaagde publicatie, `https://mad7signal.github.io/apertoir-website/`.

Het beoogde publieke adres is **https://apertoir.nl/**, met **https://apertoir.nl/privacy/**. Deze adressen zijn nog niet als gepubliceerd/geconfigureerd bevestigd.

Koppel eerst het domein in GitHub Pages, daarna de website-DNS bij HostingSquad. Controleer domeinverificatie en HTTPS. Bestaande Resend-, mail- en nameserverrecords behouden. De map bevat bewust nog geen CNAME: voeg het domein toe zodra de Pages-inrichting wordt uitgevoerd.

Officiële uitleg: [publicatiebron](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [eigen domein](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Vóór AdMob en de publieke apprelease

- Privacyconcept inhoudelijk afronden: verantwoordelijke/contact, grondslagen, daadwerkelijke providerregio's/doorgiften, bewaartermijnen voor logs/back-ups en afhandeling van verwijderverzoeken.
- Advertentieparagraaf afstemmen op de uiteindelijke build; UMP en heropenbare privacykeuzes werken nog niet in de huidige testbuild. Geen claims over verleende toestemming afleiden uit dit concept.
- Nederlandse en Engelse tekst controleren; daarna pas conceptlabel en noindex verwijderen.
- Pagina anoniem via HTTPS controleren. Werkende privacy-URL invullen in AdMob en later Play Console; in-app tekst synchroon houden.
- App-ads.txt met de exacte regel uit AdMob toevoegen wanneer de ontwikkelaarswebsite wordt gekoppeld. Nog niet opgenomen of geverifieerd.
- Echte Google Play-link toevoegen bij beschikbaarheid; App Store-link pas na iOS-publicatie. Geen fictieve downloadknoppen.

De appbroncode, databasebestanden, API-sleutels, testlogs en privéjournalen horen niet in deze openbare repository.
