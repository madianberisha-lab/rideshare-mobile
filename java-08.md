# RideShare — Java 8

## Çfarë ndërtova
[Shtova funksionin e zgjedhjes se vendtakimit ne RideShare. Perdoruesi mund ta shkruaje vendtakimin manualisht ose te kerkoje vendndodhjen permes GPS-it. Vendtakimi ruhet lokalisht ne ekran dhe konfirmohet vetem pasi te klikohet butoni "Konfirmo ne telefon".] Përshkruaj ndryshimin e kësaj jave me fjalët e tua.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
[Hapat: Hapa faqen /java-08-test dhe prita pa klikuar butonin e vendndodhjes.
Pritshmeria: Faqja te hapet pa kerkuar leje per GPS.
Vezhgimi: Faqja u hap normalisht dhe leja nuk u kerkua deri sa klikova butonin "Perdor vendndodhjen time".] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
[Hapat: Bllokova lejen e vendndodhjes ne shfletues, rifreskova faqen dhe klikova butonin e GPS-it. Pastaj shkrova "Parkingu" dhe klikova "Konfirmo ne telefon".
Pritshmeria: Pas refuzimit te GPS-it te shfaqet mesazhi perkates dhe te mund te vazhdohet me zgjedhje manuale.
Vezhgimi: U shfaq mesazhi "Leja u refuzua. Shkruaj vendtakimin vete." Pas konfirmimit, vendtakimi "Parkingu" u shfaq si i konfirmuar. Gjithashtu provova timeout-in me simulim te perkohshem. U shfaq mesazhi se koha e kerkimit perfundoi dhe zgjedhja manuale vazhdoi te funksiononte. Butoni simulues u hoq pas proves.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
[Hapat: Kontrollova komponentin Vendndodhja.tsx dhe funksionin e GPS-it. Provova marrjen e vendndodhjes dhe pastaj shkrova dhe konfirmova manualisht vendtakimin.
Pritshmeria: Ne GitHub te mos publikohen koordinata reale, adresa personale ose sekrete.
Vezhgimi: Komponenti shfaq vetem saktesine e GPS-it ne metra dhe vendtakimi shkruhet manualisht nga perdoruesi. Koordinatat nuk ruhen si vendtakim dhe nuk dergohen te shoferi. Kontrolli perfundimtar i skedareve ne GitHub mbetet per t'u bere pas publikimit.] Hapat, rezultati i pritur dhe çfarë ndodhi.

## Ku gjendet puna
[aplikacioni/src/components/Vendndodhja.tsx - komponenti i vendtakimit.
aplikacioni/src/app/udhetimi/[id]/page.tsx - faqja e detajeve te udhetimit.
aplikacioni/src/app/java-08-test/page.tsx - faqja e testimit.
mobile-week08.json - konfigurimi i testimit.
java-08.md - raporti i ushtrimit.
Faqja lokale e testimit: http://localhost:3000/java-08-test] Shëno skedarët kryesorë dhe linkun e demonstrimit nëse është publikuar.

## Çfarë mbetet për përmirësim
[Vendtakimi ruhet vetem lokalisht ne telefonin e perdoruesit. Shoferi ende nuk e merr kete informacion. Ky funksion mund te zhvillohet ne nje hap te ardhshem.] Një kufizim ose gabim që vure re dhe hapi i ardhshëm.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[AI me ndihmoi ne kontrollimin dhe korrigjimin e disa pjeseve te kodit dhe ne gjetjen e gabimeve gjate zhvillimit. Kodin e kontrollova duke e hapur aplikacionin dhe duke provuar funksionet manualisht.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.

## Prova me një hyrje të re
[Hyrja qe provova: Shkrova "Parkingu" pa klikuar butonin e konfirmimit, pasi vendtakimi "Biblioteka" ishte konfirmuar.
Parashikimi im para klikimit: Vendtakimi i konfirmuar duhet te mbetet "Biblioteka".
Cfare pashe realisht: "Parkingu" mbeti vetem ne fushe, ndersa vendtakimi i konfirmuar vazhdoi te ishte "Biblioteka".
Skedari dhe funksioni qe e shpjegojne: Vendndodhja.tsx, funksioni konfirmoVendtakimin dhe funksioni onChange i fushes.
Cfare kuptova ose korrigjova: Kuptova se teksti qe shkruhet dhe vendtakimi i konfirmuar jane dy vlera te ndara. Vendtakimi ndryshon vetem pas klikimit te konfirmimit.] Zgjidh me kolegun njërën: tekst me vetëm hapësira ose ndryshim vendtakimi pa konfirmim.
- Hyrja që provova:
- Parashikimi im para klikimit:
- Çfarë pashë realisht:
- Skedari dhe funksioni që e shpjegojnë:
- Çfarë kuptova ose korrigjova:

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.
