# RideShare — Java 6 · PWA dhe puna offline

Ruaje si java-06.md pranë README të repository-t, jashtë aplikacioni/.
Hiqi . Mos vendos sekrete, email ose fotografi kredencialesh.

## Çfarë ndërtova
[Manifesti e pershkruan aplikacionin RideShare dhe ikonat e tij, qe shfletuesi ta njohe si aplikacion web. Service Worker ruan kopjen publike te faqes offline dhe ndihmon qe lista e udhetimeve te shfaqet edhe kur nuk ka internet. Kopja offline i paraqet tri udhetimet e ruajtura, por nuk konfirmon rezervime.] Shpjego çfarë bëjnë manifesti, service worker dhe kopja publike në pajisje.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
[Hapa aplikacionin lokalisht ne http://localhost:3000. Kontrollova http://localhost:3000/manifest.webmanifest, ikonat icon-192.png dhe icon-512.png, si dhe Service Worker-in /sw.js. Te gjitha u hapen dhe Service Worker-i u shfaq aktiv. Lista e udhetimeve u shfaq me tri udhetime. Instalimi nga shfletuesi nuk u konfirmua.] Shkruaj URL-në që hape, emrin dhe përmasat e ikonave që pe, si dhe nëse u ruajt lista. Nëse shfletuesi nuk ofroi instalim, shënoje.

### Prova 2: Pa internet dhe pas rifreskimit
[Ne Chrome DevTools, te Network, aktivizova menyren Offline dhe hapa/rifreskova http://localhost:3000/offline.html. U shfaqen tri udhetimet e ruajtura: Prishtine–AAB ne 08:00, Fushe Kosove–AAB ne 08:15 dhe Lipjan–AAB ne 07:45. Faqja tregonte se lista ishte e ruajtur dhe mund te ishte e vjeter, se bashku me kohen e ruajtjes. Kjo nuk eshte konfirmim rezervimi, sepse faqja offline vetem paraqet te dhenat e ruajtura dhe nuk mund ta dergoje apo konfirmoje kerkesen te serveri.] Si e simulove ndërprerjen? A u hapën tri kartat pas rifreskimit? Çfarë kohe ruajtjeje dhe mesazhi pe? Pse nuk ishte konfirmim rezervimi?

### Prova 3: Lidhja rikthehet
[Ne Neon e ndryshova perkohesisht oren e udhetimit me ID 2 nga 08:15 ne 08:25. Pas rifreskimit, aplikacioni online e shfaqi oren 08:25. Pastaj e riktheva vleren fillestare me UPDATE udhetimet SET ora = '08:15' WHERE id = '2'; dhe kontrollova qe ora te ishte perseri 08:15. Ne pamjen offline shfaqeshin te dhenat e ruajtura, te cilat mund te jene te vjetra. Pas rikthimit online, lista mund te rifreskohet nga databaza.] Shëno orën e vjetër dhe të renë të ID 2 në Neon, çfarë shfaqej offline dhe çfarë ndodhi pas Rifresko listën. Rikthe orën fillestare.

## Ku gjendet puna
[Repository: https://github.com/madianberisha-lab/rideshare-mobile

Skedaret e Java 6 perfshijne aplikacioni/public/icons/icon-192.png, aplikacioni/public/icons/icon-512.png, aplikacioni/public/offline.html, aplikacioni/public/sw.js, aplikacioni/src/app/api/udhetimet/route.ts, aplikacioni/src/app/manifest.ts dhe aplikacioni/src/components/Pwa.tsx. U bene gjithashtu ndryshime ne globals.css, layout.tsx dhe KartaUdhetimi.tsx.

Demo ne Vercel: publikimi i Java 6 ne Vercel nuk eshte konfirmuar. Provat e mesiperme u bene lokalisht.] Linku i repository-t, skedarët e shtuar dhe demo në Vercel nëse e ke publikuar.

## Çfarë mbetet për përmirësim
[Ne viziten e pare pa internet, nese nuk eshte ruajtur ende kopje, faqja offline mund te mos hapet ose nuk do te kete te dhena te ruajtura. Kufizimi i leximit offline eshte se te dhenat mund te jene te vjetra dhe kerkesat per vende nuk mund te konfirmohen pa lidhje me serverin.] Çfarë ndodh në vizitën e parë pa kopje? Cili është kufizimi i leximit offline?

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Mora ndihme nga AI per te organizuar dhe kontrolluar kodin, stilimin e kartave, manifestin, Service Worker-in dhe dokumentimin. Pastaj i provova vete hapat ne shfletues: kontrollova manifestin, ikonat, Service Worker-in, listen offline dhe ndryshimin e ores ne Neon.] Çfarë ndihme more dhe çfarë provove vetë, ose: Nuk përdora AI.
