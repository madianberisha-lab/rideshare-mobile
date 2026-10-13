# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat .
Mos vendos DATABASE_URL, pamje të kredencialeve ose të dhëna reale.

## Çfarë ndërtova
[E lidha aplikacionin RideShare me databazen Neon permes variables DATABASE_URL, e cila ruhet lokalisht ne .env.local dhe nuk publikohet ne GitHub.
Lista kryesore i lexon udhetimet nga tabela udhetimet ne PostgreSQL permes funksionit lexoUdhetimet(). Faqja e detajeve perdor funksionin gjejUdhetimin(id) per te lexuar udhetimin sipas ID-se. Te dhenat shfaqen nga databaza dhe jo nga nje liste e shkruar drejtperdrejt ne faqe.] Shpjego si lista dhe detajet i lexojnë udhëtimet nga Neon.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
[Ne Neon SQL Editor ndryshova oren e udhetimit me ID 2 nga 08:15 ne 08:25. Pas rifreskimit, lista e shfaqi oren 08:25. Edhe faqja e detajeve per ID 2 e shfaqi oren e re. Pastaj e riktheva oren ne 08:15 dhe rifreskova te dyja faqet.] Ndryshova orën e ID 2 nga 08:15 në 08:25 në SQL Editor.
Shkruaj çfarë tregoi lista dhe çfarë treguan detajet pas rifreskimit.
Ktheje orën në 08:15 dhe provo përsëri.

### Prova 2: Lista bosh dhe rikthimi
[Te funksioni lexoUdhetimet() shtova perkohesisht WHERE false ne pyetjen SQL. Aplikacioni shfaqi mesazhin: "Nuk ka udhetime per momentin." Nuk u fshine rreshta nga databaza. Pasi hoqa WHERE false dhe rifreskova faqen, u kthyen tri kartat e udhetimeve.] Shtova WHERE false vetëm te pyetja e lexoUdhetimet.
Shkruaj mesazhin që u shfaq. Hoqe WHERE false dhe u kthyen tri kartat?

### Prova 3: Lidhja mungon, rikthimi dhe siguria
[Ne .env.local ndryshova perkohesisht emrin DATABASE_URL ne DATABASE_URL_PA_TEST dhe rinisa serverin. Aplikacioni shfaqi mesazhin: "Nuk u lidhem me databazen. Provo perseri." Pastaj riktheva emrin DATABASE_URL, rinisa serverin dhe tri udhetimet u shfaqen perseri.] Ndryshova përkohësisht emrin DATABASE_URL në .env.local,
rinisa serverin dhe shënova mesazhin. Riktheva emrin dhe rinisa serverin.
Shkruaj a punoi sërish; a mungon .env.local në listën e GitHub Desktop?

## Ku gjendet puna
[aplikacioni/schema.sql — skema e databazes.
aplikacioni/src/lib/db.ts — lidhja me Neon.
aplikacioni/src/lib/udhetimet.ts — funksionet per leximin e udhetimeve.
aplikacioni/src/app/page.tsx — lista e udhetimeve.
aplikacioni/src/app/udhetimi/[id]/page.tsx — detajet e udhetimit.
aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx — simulimi i kerkeses.

Repository: https://github.com/madianberisha-lab/rideshare-mobile
Linku ne Vercel: https://rideshare-mobile-java4.vercel.app ] Shëno schema.sql, skedarët që ndryshove dhe linkun e repository-t.
Nëse punon në Vercel, shto linkun e aplikacionit (opsional këtë javë).

## Çfarë mbetet për përmirësim
[Kerkesa "Ne pritje" eshte vetem simulim. Ajo nuk ruhet ne databaze dhe nuk i dergohet shoferit. Hapi im i ardhshem eshte te krijoj ruajtjen reale te kerkeses ne databaze dhe nje menyre qe shoferi ta pranoje ose refuzoje.] Një kufizim ose gabim dhe hapi yt i ardhshëm.
Kërkesa “Në pritje” mbetet simulim; nuk ka rezervim real.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Gjate punes mora ndihme per disa pjese te kodit dhe per lidhjen me databazen. I provova ndryshimet ne aplikacion dhe kontrollova qe te dhenat shfaqen sakte.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.
