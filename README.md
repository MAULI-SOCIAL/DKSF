# Dnyaneshwar Katke Social Foundation site
Static site, no build step. Upload everything to the repo root (or /socialfoundation).
Replace every yellow [placeholder] and edit EMAIL, SOCIAL, WA, IMPACT, SLIDES and GALLERY at the top of app.js.
Missing files never break the site: a soft colour block shows instead.

## FILE NAMES (save everything inside the /img folder)
### 1. Top slideshow (home page): edit the SLIDES list in app.js
Default names: slide1.jpg, slide2.jpg, slide3.jpg, slide4.jpg, slide5.jpg
- Any slide can be a photo (.jpg .png .webp) or a video (.mp4 .webm). To use a video, save it e.g. as slide2.mp4 and change "slide2.jpg" to "slide2.mp4" in the SLIDES list.
- Add or remove rows freely: ["file name","Marathi title","English title"]. Any number of slides, any mix.
- Photos: landscape, about 1920x900, under 400 KB. Videos: landscape, 1080p max, 8 to 15 seconds, under 8 MB, no sound needed (they play muted). A video moves to the next slide when it ends.
### 2. Home gallery: edit the GALLERY list in app.js
Default names: g1.jpg to g8.jpg. Videos work here too: save as g3.mp4 and change "g3.jpg" to "g3.mp4". Videos show a play badge and open in a viewer.
### 3. "What we do" tiles on home
education.jpg (large tile, landscape), health.jpg, women.jpg, relief.jpg, culture.jpg
### 4. Programs page cards
gunagaurav.jpg, studykit.jpg, health.jpg, women.jpg, sewing.jpg, grain.jpg, teerth.jpg, navratri.jpg, eco.jpg, sports.jpg
### 5. News page and "Latest activities" (home shows the first four)
news1.jpg to news7.jpg (news1 = newest)
### 6. Journey cards (home)
journey1.jpg, journey2.jpg, journey3.jpg, journey4.jpg
### 7. About page and founder
founder.jpg (portrait, 4:5, a neutral photo), story.mp4 + story.jpg (video and its cover picture)
### 8. Other
logo.png and logo-full.png (included), upi-qr.png (donation QR)
### 9. Documents: put PDFs in /docs
registration-certificate.pdf, 12a-80g-certificates.pdf, annual-report.pdf, audited-accounts.pdf

## Tips
- Use photos of the work itself (beneficiaries, camps, kits). Avoid party colours, flags and election banners.
- Keep videos small: GitHub rejects files over 100 MB and the site loads faster. Free tools like HandBrake can shrink a video.
- Marathi is the default. Edit English wording in the data-en="..." attribute of each element.
