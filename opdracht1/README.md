# Opdracht 1 - Progressive Enhancement
//Het web is voor iedereen. Leren over Progressive enhancement

## Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

### Breedband
Breedband heeft heel veel te maken met de user experience. Breedband kan er voor zorgen dat de website super traag laad. Dit kan echter opgevangen worden. 

Er zijn een aantal manier waarop je kan checken wat een langzame connectie doet met een webpagina. Ik heb chrome devtools gebruikt. Hiermee kon ik van een aantal websites inzichtelijk maken wat een trage verbinding deed met de website.

Wat wij leren bij Performance Matters kunnen wij direct toepassen. Dit gaat namelijk ook heel erg om de breedband. Het probleem van breedband is dat je het vanuit jou app/website niet sneller kan maken. Echter kan je het laden wel sneller maken door je eigen app/website kleiner te maken. Dit zorgt ervoor dat de gebruiker niet zo lang hoeft te wachten. 

Kan getest worden met elke website.

* Afbeeldingen kleiner maken
* Critical CSS
* Check of er al iets in de cache staat

> https://www.webpagetest.org/

### Localstorage
Localstorage wordt gezien als een heel bruikbaar. Toch heeft het zo zijn voor/nadelen. Voordat localstorage gebruikt werd, werd er vaak gebruik gemaakt van cookies. Deze hebben hele vervelende beperkingen. De grootte van een cookie en het feit dat ze bij elk request mee worden gegeven.

Naast localstorage heb je sessionstorage. Als je het hebt over localstorage en sessionstorage hebt, dan heb je het over de webstorage. Sessionstorage wordt direct verwijderd na het dichtdoen van de website.

* Er zit een max van 5mb in localstorage
* Kan worden aangeroepen door Javascript op dezelfde website
* De data wordt onthouden
* Alleen opslaan van `Named value pairs`
* Het is altijd een string

Twitter gebruikt veel localstorage, maar blijft werken als je het uitzet. Het werkt misschien iets langzamer.

Wat betreft de gebruiker kan deze de localstorage ook uitzetten. Het is echter niet zo simpel en zal daardoor ook niet zomaar gedaan worden door een 'gewone' gebruiker van het internet. Daarnaast verschilt dat ook per browser. Het is niet voor de hand liggend dat een gebruiker de localstorage uit zet. 

Het geldt voor elke manier van data opslaan op de gebruiker zijn computer dat dit uitgezet kan worden. Dit zorgt er daardoor voor dat de website niet altijd bij elke gebruiker geoptimaliseerd is. Echter zal de gebruiker er altijd zelf voor kiezen of hij/zij deze functie uitzet.

> https://stackoverflow.com/questions/6600754/how-can-i-browse-with-localstorage-disabled

> https://teamtreehouse.com/library/what-is-local-storage-and-why-use-it

## Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

De acht features: 
* Afbeelding
* Breedband
* Cookies
* Fonts
* Javascript
* Kleur
* Local Storage
* Trackpad

Je kan een website op veel verschillende manieren in accessibility verbeteren. Al is het vaak makkelijker voor jezelf als je er mee begint bij het maken van de website. Achteraf een website helemaal accessible maken vormt soms problemen. Daarnaast moet iedereen het eens zijn met de keuzes die er zijn gemaakt.

### To Do
Wat moet ik nog doen om progressive enhancement op mijn webapp toe te passen. 
* Om de website overzichtpagina te laden zouden de afbeeldingen gecompressed kunnen worden. Daarnaast zouden er ook meerdere formaten afbeeldingen gebruikt kunnen worden zodat je imgscrset kan gebruiken om de app zo toegankelijk mogelijk te maken.
* Bij een langzame verbinding werkt de app redelijk. Toch zie je een hele lange tijd helemaal niets. Ook geen laad icoon. De gebruiker moet daardoor te lang wachten. Daarnaast wordt de tekst ook van de server gehaald. Dit zou ook in de html kunnen staan omdat iedereen altijd de zelfde tekst als eerst ziet.
* Cookies gebruik ik niet. Eventueel zou je ik cookies kunnen gebruiken waardoor de gebruiker zijn eigen keuze op kan slaan. Hierdoor wordt de app persoonlijker per gebruiker. 
* Op dit moment werkt de hele app niet als er de javascript niet werkt. Ik heb daar voor nu geen oplossing voor gemaakt. Wat ik zou kunnen doen is een waarschuwing neerzetten aan het begin van de app als de javascript uit staat. En het maken van een standaard tekst over kunstenaars die je ziet als de javascript uit staat.

### Done
Een aantal dingen heb ik meteen kunnen aanpassen om progressive enhancement toe te passen.
* Toepassen van Local Storage. Dit zorgt ervoor dat bij een tweede visit door de gebruiker de website sneller laadt.
* Het font dat nu wordt gebruikt is een standaard font. Dit zorgt ervoor dat er geen apart font gedownload hoeft te worden.
* De kleur is netjes. Met genoeg contrast.
* De app is redelijk goed voor trackpad en tab. Je kan zonder muis de hele app door. Waardoor ook mensen zonder muis een goede ervaring hebben met mijn website. Als ik meer tijd had gehad, had ik nog een manier gebruikt om betere focus states te hebben. 

### Screenreader
Een screenreader werkt goed op de website. Het was lastig om een werkende windows screenreader te vinden. Nadat ik er een had gevonden werd de tekst gelezen zoals ik het had bedacht. Het lastige aan onepage webapps is dat het gevaarlijk is dat de hele pagina in één keer wordt gelezen. Gelukkig gebeurde dit niet bij mij. De applicatie ging wel de naam van mijn app twee keer voorlezen. Dat komt omdat er een `<title>` is en hij haalt die naam nog op uit de data.

### De opdracht
Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
- Pas Progressive enhancement toe op je OBA Web App.
- Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
- Test  je OBA Web App in het device lab.
- Laat je OBA Web App voorlezen door een screenreader.
- Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Beoordelingscriteria
- Zet je code op Github
- Schrijf een Readme met:
  - een beschrijving van de problemen die je hebt gevonden
  - beschrijf hoe je de problemen hebt opgelost
  - of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben
<<<<<<< HEAD


Plaatjes toevoegen
Betere hierarchie/structuur
code snippets
=======
  
  
  Link naar applicatie: https://velomovies.github.io/wafs/app/
  
  
>>>>>>> f27657608bd346f381b7b2142e2f1844631636e5
