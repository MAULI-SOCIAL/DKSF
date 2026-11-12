# Dnyaneshwar Katke Social Foundation site
Static site, no build step. Upload everything to the repo root (or /socialfoundation).
Replace every yellow [placeholder] and edit EMAIL, SOCIAL, WA, IMPACT, SLIDES and NEWS at the top of app.js.
Missing files never break the site: a soft colour block shows instead.

## FILE NAMES (save everything inside the /img folder)
### 1. Top slideshow (home): edit the SLIDES list in app.js
slide1.jpg to slide5.jpg by default. Any slide can be a photo (.jpg .png .webp) or a video (.mp4 .webm): save it as slide2.mp4 and change the name in the SLIDES list. Add or remove rows freely.
Photos: landscape ~1920x900, under 400 KB. Videos: landscape, 8 to 15 seconds, under 8 MB.
### 2. Gallery (home slideshow of photos + About page gallery): AUTOMATIC
Just save g1.jpg, g2.jpg, g3.jpg, g4.jpg ... as many as you like. They appear by themselves (a video can be g7.mp4). No code to edit. Small gaps (a missing number) are fine; after about 6 missing numbers in a row the site stops looking.
### 3. Janta Darbar videos (About page): AUTOMATIC
darbar1.mp4, darbar2.mp4, darbar3.mp4 ... vertical (9:16) Instagram videos, shown side by side. They appear by themselves.
### 4. Text for photos and videos: details.js
Open details.js and add one line per file, for example:
"g1":["मराठी तपशील","English details"],
The text shows when the photo is opened (and under each darbar video). The name is the file name without .jpg / .mp4.
### 5. News snapshots (news page): AUTOMATIC
Save a photo of each newspaper clipping as news1.jpg, news2.jpg, news3.jpg ... news8.jpg and so on. They appear by themselves, in number order (a new clipping goes at the end).
The first seven (news1 to news7) already have headlines. For a new one, add a line in details.js: "news8":["Marathi date | Marathi headline","English date | English headline"],
A clipping with no line in details.js still shows, just without a caption.
### 6. "What we do" tiles (home)
education.jpg (large, landscape), health.jpg, women.jpg, relief.jpg, culture.jpg
### 7. Programs page cards
scholarship.jpg, gunagaurav.jpg, studykit.jpg, health.jpg, checkup.jpg, hospital.jpg, women.jpg, sewing.jpg, grain.jpg, essentials.jpg, teerth.jpg, navratri.jpg, eco.jpg, trees.jpg, sports.jpg, games.jpg
### 8. About page and founder
founder.jpg (portrait 4:5, neutral photo), story.mp4 + story.jpg (video and its cover picture)
### 9. Other
logo.png and logo-full.png (included), upi-qr.png (donation QR)
### 10. Documents: PDFs in /docs
registration-certificate.pdf, 12a-80g-certificates.pdf, annual-report.pdf, audited-accounts.pdf

## Tips
- Use photos of the work itself. Avoid party colours, flags and election banners.
- Keep videos small (GitHub rejects files over 100 MB). HandBrake can shrink them.
- Marathi is the default. Edit English wording in the data-en="..." attribute of each element.
