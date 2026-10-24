# Sakandire 🪔 — free study companion for Nigerian SS1–SS3

Live: https://0xzahra.github.io/sakandire/

Static, offline-first web app (HTML/CSS/JS, no build step, service worker). No login, free.

- **Books**: original simplified notes (Physics, Chemistry, Biology, Mathematics, English, Economics) with hand-drawn SVG diagrams, worked examples and exercises with "Show answer". Font size, light/sepia/dark themes, bookmarks, search.
- **Dry lab**: titration, projectile motion, Ohm's law — interactive with step-by-step guides.
- **Exam prep**: CBT practice simulations — JAMB UTME-style (4 subjects, 2 h, /400), WAEC-style, NECO-style, Post-UTME-style; Graduate Trainee aptitude-style (numerical, verbal, abstract, SJT).
- **Courses & Careers**: 50 courses with UTME/O'Level requirements, career finder, combination checker, degree-path and diploma-routes guides, directory of ~770 tertiary institutions.
- **Reference**: IUPAC periodic table (118), four-figure tables computed in JS, maps of Nigeria / West Africa / Africa.

## Copyright
All notes and questions are original and follow WAEC/NECO/JAMB syllabus topics. No textbook text is reproduced; textbooks are named only as further reading. Practice questions are **not** real past questions. Not affiliated with JAMB, WAEC, NECO, NUC, NBTE, NCCE, NMCN, SHL, Workforce Group or any employer.

Data: Nigeria state boundaries © geoBoundaries/GRID3 (CC BY 4.0); country outlines Natural Earth (public domain); university list from NUC; colleges from NCCE; polytechnics from the Wikipedia list (based on NBTE). Tech careers summarised from *Getting Started in Tech* by Amarachi Amaechi (2021).

## Adding content
Add a chapter object to `data/books-<subject>.js` (`{title, topic, syl, html, ex:[{q,a}]}`), or questions to `data/q-<subject>.js`. Bump `V` in `sw.js` after changes.

Owner: Zahra.

## Deployment
Served by GitHub Pages from the `gh-pages` branch (no build step). Push changes to `main`, then update `gh-pages` to match.
