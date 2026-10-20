# RideShare — Java 5 · Hyrja dhe lejet

Ruaje si java-05.md pranë README, jashtë aplikacioni/.
Hiqi shenjat . Mos vendos sekrete, email ose pamje të kredencialeve.

## Çfarë ndërtova
[Shtova hyrjen me GitHub dhe panelin e perdoruesit. Identiteti tregon kush eshte perdoruesi, roli tregon nese eshte udhetar apo shofer, ndersa pronesia tregon cilin udhetim ka te drejte ta ndryshoje shoferi. Serveri kontrollon nese perdoruesi ka leje per ta ndryshuar udhetimin.] Shpjego dallimin mes identitetit, rolit dhe pronësisë në aplikacionin tënd.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
[Kur hapa /panel pa hyre, faqja me kerkoi te hyja me GitHub. Pas hyrjes u shfaq emri im, ID-ja e GitHub dhe roli im. Pas rifreskimit, sesioni vazhdoi te funksiononte. Kur isha i kycur, shfaqej butoni "Dil nga llogaria", ndersa kur nuk isha i kycur shfaqej "Hyr me GitHub".] Hapa /panel pa hyrë, hyra me GitHub, rifreskova, pastaj dola.
Shkruaj çfarë shfaqej para hyrjes, pas rifreskimit dhe pas daljes.

### Prova 2: Shoferi ndryshon udhëtimin e vet
[Pasi e caktova rolin tim si shofer ne Neon dhe e lidha llogarine me udhetimin me ID 2, ne panel u shfaq formulari per ndryshimin e ores. E ndryshova oren nga 08:15 ne 08:25 dhe sistemi konfirmoi se ora u ruajt. Kontrollova listen, detajet dhe databazen. Pastaj e riktheva oren ne 08:15.] Si shofer i ID 2 e ndryshova orën në 08:25.
Shkruaj çfarë u shfaq në panel, listë, detaje dhe SQL Editor. Rikthe 08:15.

### Prova 3: Veprimi pa leje refuzohet
[Ndryshova ID-ne e formularit nga 2 ne 1 dhe provova ta ruaja oren 08:30. Sistemi shfaqi mesazhin: "Nuk ke leje per kete udhetim. Ora nuk ndryshoi." Serveri e refuzoi veprimin sepse udhetimi nuk ishte ne pronesine e llogarise sime. Ne Neon SQL Editor mund te kontrollohet qe udhetimi me ID 1 ka mbetur ne oren 08:00.] Nga formulari i hapur ndryshova ID në 1 dhe provova Ruaj.
Shkruaj mesazhin e refuzimit dhe si verifikove në Neon që ID 1 mbeti 08:00.
Provat shtesë me heqjen e rolit dhe formularin e vjetër janë opsionale pas dorëzimit.

## Ku gjendet puna
[Repository: https://github.com/madianberisha-lab/rideshare-mobile

Skedaret e Java 5 gjenden ne dosjen aplikacioni, ndersa java-05.md ruhet prane README-se, jashte dosjes aplikacioni.

Demo: https://rideshare-mobile-java4.vercel.app/] Linku i repository-t dhe skedarët e rinj; demo në Vercel nëse e publikove.

## Çfarë mbetet për përmirësim
[Kerkesa per vend eshte ende simulim. Ne te ardhmen do te shtoja mundesine qe udhetari te dergoje kerkese per vend dhe shoferi ta pranoje ose refuzoje ate.] Një kufizim: kërkesa për vend është ende simulim; çfarë do të shtoje më pas?

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
[Gjate punes perdora AI per ndihme ne zgjidhjen e disa gabimeve qe me dolen, si problemi me Client ID gjate hyrjes me GitHub dhe disa probleme me faqen ne localhost. Pas sugjerimeve, i provova ndryshimet ne aplikacion.] Çfarë ndihme more dhe çfarë provove vetë, ose: Nuk përdora AI.
