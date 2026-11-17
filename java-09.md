# RideShare — Java 9

## Çfarë ndërtova
[Ne Java 9 shtova mundesine qe perdoruesi i kycur te ruaje udhetimet e preferuara. Preferimet ruhen ne databazen Neon dhe shfaqen edhe pas rifreskimit te faqes. Gjithashtu, aplikacioni tregon numrin e preferimeve dhe gjendjen e butonit.] Përshkruaj ndryshimin e kësaj jave me fjalët e tua.

## Provat që bëra
### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.
[U kyca ne aplikacion.
Zgjodha nje udhetim.
Klikova butonin per ruajtjen ne preferime.
Rifreskova faqen.] Hapat, rezultati i pritur dhe çfarë ndodhi.
Rezultati i pritur: Preferimi te mbetet i ruajtur edhe pas rifreskimit.
Rezultati qe mora: Preferimi mbeti i ruajtur dhe numri i preferimeve u shfaq sakte.

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.
[Aktivizova simulimin e nje gabimi gjate ruajtjes.
Provova te ruaj nje udhetim.
Kontrollova gjendjen e butonit dhe numrin e preferimeve.
Rezultati i pritur: Aplikacioni te mos tregoj sukses te rreme, por te kthehet ne gjendjen paraprake dhe te shfaqe mesazhin per riprovim.
Rezultati qe mora: Butoni dhe numri u kthyen ne gjendjen paraprake dhe u shfaq mesazhi "Nuk u ruajt. Provo perseri." Pas testit e caktivizova simulimin dhe ruajtja normale funksionoi.] Hapat, rezultati i pritur dhe çfarë ndodhi.

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.
[Kontrollova tabelen preferimet ne Neon.
Ekzekutova nje pyetje SQL per te gjetur rreshtat e dyfishte.
Kontrollova nese i njejti perdorues kishte me shume se nje rresht per te njejtin udhetim.
Rezultati i pritur: Te mos krijohen preferime te dyfishta.
Rezultati qe mora: Pyetja SQL nuk ktheu asnje rezultat. Ne databaze ekziston kufizimi UNIQUE per kombinimin e perdoruesit dhe udhetimit.] Hapat, rezultati i pritur dhe çfarë ndodhi.

## Ku gjendet puna
[Puna gjendet ne projektin RideShare dhe ne keta skedare:
java-09.sql
aplikacioni/src/lib/preferimet.ts
aplikacioni/src/app/actions/preferimet.ts
aplikacioni/src/components/Preferimi.tsx
aplikacioni/src/components/KartaUdhetimi.tsx
aplikacioni/src/app/page.tsx
Demonstrimi: https://rideshare-mobile-java4.vercel.app/] Shëno skedarët kryesorë dhe linkun e demonstrimit nëse është publikuar.

## Çfarë mbetet për përmirësim
[Ne te ardhmen mund te shtohet mundesia per heqjen e udhetimeve nga lista e preferimeve dhe te behen me shume testime me klikime te shpejta.] Një kufizim ose gabim që vure re dhe hapi i ardhshëm.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[AI me ndihmoi ne identifikimin dhe rregullimin e disa gabimeve teknike gjate lidhjes me Neon dhe testimit te ruajtjes se preferimeve. Funksionalitetin e kontrollova duke e testuar ne aplikacion dhe databaze.] Çfarë ndihme more dhe çfarë verifikove vetë, ose: Nuk përdora AI.
