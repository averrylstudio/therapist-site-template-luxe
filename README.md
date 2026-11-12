# Therapist website template — Luxe

A premium, editorial starter site for a high-end private practice. Built by [Averryl Studio](https://averryl.com) as a companion to the calmer Willow River template: the same architecture, a completely different presence. Use this when the practice wants a boutique, quietly luxurious feel — executive and high-achiever work, couples, concierge or private-pay therapy.

**Live preview:** [https://averrylstudio.github.io/therapist-site-template-luxe/](https://averrylstudio.github.io/therapist-site-template-luxe/)

The preview uses a **fictional** practice — The Whitmore Practice, Dr. Elise Whitmore, Ph.D., a licensed clinical psychologist in Manhattan. Every name, fee, address, telephone number, email and biography line is placeholder text. Do not present it as a real clinic. The portrait is a **stock photograph**, clearly captioned, and must be replaced before a client site goes live.

This is a static site (plain HTML, CSS and JavaScript). There is no build step. It is designed to be hosted for free on GitHub Pages, the same way [averryl.com](https://averryl.com) is.

---

## For a new client, edit one file

**`site.config.js`** is the only file you need to change for a typical handover.

It holds the practice name, therapist name and credentials, tagline, biography, specialties, services, fees and private-pay / superbill wording, session formats, location and telehealth states, contact email and phone, the inquiry email (for the form), an optional Calendly or booking URL, social links, colours, logo path, photo paths, crisis-line text, the “accepting clients” line, testimonials (or the switch to hide them), the press / “selected mentions” strip (or the switch to hide it), Insights article cards and the sample essay, the first-session steps, the “Find your path” options, the consult offer, and whether the “Site by Averryl Studio” credit is shown.

After you save the file, refresh the site. No build, no compile.

A short checklist:

1. Duplicate this repository for the client (see [Handing the site over](#handing-the-site-over) below). Do not edit the master template in place, and do not put a client’s real details in this public preview repository.
2. Open `site.config.js` and replace every placeholder. Search for the words “placeholder”, “sample” and “fictional” so none are left.
3. Set `siteUrl` to the live address (for example `https://www.whitmorepractice.com`). This is used for the form’s thank-you redirect, Open Graph tags and the JSON-LD schema.
4. Drop the therapist’s photos into `images/` and point `photos.*` at them. Add a logo file and set `logo` if they have one; leave `logo` as `""` to keep the wordmark and the “W” monogram (turn the monogram off with `showMark: false`).
5. Update `contact.inquiryEmail` to the therapist’s real email. The form sends there through FormSubmit (see below).
6. If the practice uses Calendly (or any booking page) for the complimentary consult, set `bookingUrl` to that address. Consult buttons will open it. If `bookingUrl` is empty, they go to the contact form instead.
7. Set `press.show` to `false` unless you have real, permitted mentions. The default names (“Publication One”, “A Journal”) are clearly placeholders — never invent a feature in Forbes, The New York Times, or any real publication.
8. Replace or hide the testimonials. Never invent client words. Set `testimonials.show` to `false` if you have none with consent. There is deliberately no ethics or confidentiality note under this section.
9. Update `sitemap.xml` and `robots.txt` so they use the client’s domain.
10. Optionally update the `<title>`, meta description and Open Graph tags in each HTML file’s `<head>`. JavaScript also injects JSON-LD from the config. Some social crawlers read only the static HTML, so changing the head is worth doing before launch.
11. Replace the sample essay in `article.html` / `SITE.article`, and the three cards in `SITE.articles`, with real writing — or leave the Insights section as a quiet blog the therapist can grow into.
12. Preview locally (see below), then push and point the client’s domain at GitHub Pages.

### Colours and logo

Colours live under `colors` in the config. The defaults are ivory, espresso and a muted brass. The stylesheet uses CSS variables (`--ivory`, `--espresso`, `--brass`, and so on) and a dark-appearance theme (`html[data-theme="dark"]`) that visitors can turn on from the comfort controls.

A logo, if `logo` is set to a path such as `"images/logo.png"`, replaces the wordmark in the header. If it is empty, the practice name is shown as an elegant wordmark, with the thin “W” monogram. Recommended logo: a transparent PNG or SVG, roughly 400×120, on a clear background. On the dark header over the hero, a light or single-colour mark works best.

### Photos

All images already in `images/` are free Unsplash photographs, downloaded into the repo (not hotlinked). Replace them with the therapist’s own photos. Keep the same file names, or change the paths in `photos` in the config. Always write a real `alt` description.

Suggested replacements:

- `entrance.jpg` — the hero: a doorway, a considered façade, or the consulting room at dusk
- `portrait.jpg` — the therapist (the current file is a **stock photo**, clearly captioned as a placeholder)
- `room.jpg`, `living.jpg` — the consulting room or a quiet interior
- `city.jpg` — a city or landscape band, if the practice is urban
- `study.jpg` — used on the sample essay; a desk, books, or a still life
- `architecture.jpg`, `hallway.jpg`, `house.jpg` — supporting atmosphere

---

## The session-request form

The form on `contact.html` has no backend. It posts to [FormSubmit](https://formsubmit.co/) at `https://formsubmit.co/<inquiryEmail>`, using the address in `site.config.js`.

Fields: name, email, telephone (optional), what they are writing about, preferred way to meet, a short note, and a required consent checkbox. There is a honeypot field (`website`, declared to FormSubmit as `_honey`), a `_subject` line, a `_template=table` for a readable email, an automatic confirmation (`_autoresponse`), and a `_next` redirect to `thank-you.html`. The form, and the footer, both carry a clear “not for emergencies” note.

**Activation:** the first time a form is submitted to a new email address, FormSubmit sends a one-time confirmation email to that address. The therapist must click the link in that email before any further submissions will be delivered. Plan for this on handover: send a test request yourself, ask the therapist to check their inbox (and spam), and confirm the activation link.

The thank-you redirect (`_next`) is an absolute URL built from the current page, so it works on a preview domain and on the client’s own domain. If you have set a custom `thankYouPath`, keep it as a file in the same folder.

---

## Features included

1. **Find your path** — a short, elegant selector that recommends a service and leads to the consult form. It is clearly labelled as *not* a diagnosis, a screening tool, or a clinical opinion.
2. **Your first session** — a four-step account of what happens after someone writes.
3. **Private-pay transparency** — an Investment page with placeholder fees, superbill / out-of-network wording, a reduced-fee note, and a cancellation policy, all written to be replaced.
4. **A complimentary consultation** — a fifteen-minute offer, used as a primary call to action. Set `bookingUrl` for Calendly (or any scheduler); if it is empty, every consult button falls back to the form.
5. **Selected mentions** — a press or credentials strip with placeholder wordmarks, easy to hide with `press.show: false`.
6. **Insights** — a small journal: three article cards and one sample essay (`article.html`).
7. **Crisis note** — in the footer, with the wording set in the config (default: 988 in the United States, or a local emergency number).
8. **Comfort controls** — larger text, reduced motion, and a dark appearance. The choice is remembered in the browser. Motion also respects `prefers-reduced-motion`.
9. **Privacy-minded by default** — fonts are self-hosted (no request to Google Fonts), and there is no analytics or tracking unless you add it.

There is **no Quick exit button** on this template, by design.

The site is responsive, with WCAG AA contrast, keyboard navigation, visible focus states, alt text, a skip link, and a mobile menu whose “Request a consult” button keeps strong contrast (ivory on espresso in the header; espresso on ivory inside the dark mobile panel). Basic SEO is in place: meta tags, Open Graph, JSON-LD for the practice (and for the sample essay), a sitemap and `robots.txt`.

---

## Previewing locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Hosting on GitHub Pages

The live preview is served from this repository’s `main` branch, from the root of the project.

For a client site:

1. Create a **new** repository (private is usually better) from this template. Do not push client details to the public preview repo.
2. In the repository Settings → Pages, set the source to `main` and the folder to `/ (root)`.
3. The site will appear at `https://<owner>.github.io/<repo>/`.
4. If the client has a domain (they should buy this themselves), add a `CNAME` file containing that domain, and add the GitHub Pages DNS records at their registrar. GitHub will issue a free HTTPS certificate.

Relative paths are used throughout, so the site works both at a root domain and at a `github.io/repo` path.

---

## Handing the site over

There are two good options, matching what we offer the therapist:

**Care plan (recommended).** The site stays on the Averryl Studio GitHub account. We handle updates for the monthly care-plan fee. The client owns their domain and we point it at the site. They are never locked in — we can transfer the repository at any time.

**Full handover.** Transfer the repository to the client’s own GitHub account (Settings → General → Danger zone → Transfer ownership), or download a zip and help them publish it. After a transfer they own the code, the hosting and the updates. Walk them through FormSubmit activation and how to edit `site.config.js`.

In both cases the client owns their domain.

---

## Photo credits (placeholder images)

All placeholder photographs are from [Unsplash](https://unsplash.com), used under the [Unsplash License](https://unsplash.com/license). They were downloaded into `images/` and are not hotlinked. Please replace them with the therapist’s own photos for a live client site, and keep credits if any Unsplash images remain. Photographer names below should be confirmed on the Unsplash page if a credit will appear in public.

| File | Subject | Unsplash photograph |
| --- | --- | --- |
| `entrance.jpg` | Modern house at dusk, a lit doorway | [photo-1600585154526](https://unsplash.com/photos/photo-1600585154526-990dced4db0c) |
| `living.jpg` | Contemporary sitting room | [photo-1600607687939](https://unsplash.com/photos/photo-1600607687939-ce8a6c25118c) |
| `room.jpg` | Leather sofa, timber, a wall of trees | [photo-1600210492493](https://unsplash.com/photos/photo-1600210492493-94d14f2c1b4e) |
| `city.jpg` | Manhattan at sunrise | [photo-1480714378408](https://unsplash.com/photos/NYCity-skyline-photo-1480714378408) |
| `study.jpg` | Bound books in a private study | [photo-1521587760476](https://unsplash.com/photos/photo-1521587760476-6c12a4b040da) |
| `architecture.jpg` | Looking up at glass towers | [photo-1486406146926](https://unsplash.com/photos/photo-1486406146926-c627a92ad1ab) |
| `hallway.jpg` | A quiet, considered bedroom | [photo-1600607687644](https://unsplash.com/photos/photo-1600607687644-c7171b42498f) |
| `house.jpg` | A contemporary house among trees | [photo-1600566753190](https://unsplash.com/photos/photo-1600566753190-17f0baa2a6c3) |
| `texture.jpg` | Abstract white waves | [photo-1558591710](https://unsplash.com/photos/photo-1558591710-4b4a1ae0f04d) |
| `portrait.jpg` | Stock portrait (placeholder only) | [photo-1580489944761](https://unsplash.com/photos/photo-1580489944761-15a19d654956) |

If a photographer’s name is needed, follow the Unsplash link and use the name shown on the photo page. The portrait is a stock photograph of a real person; it must stay clearly labelled as a placeholder and must be replaced before a client site goes live.

Fonts are **Cormorant Garamond** (Christian Thalmann) and **Outfit** (Rodrigo Fuenzalida / Omnibus-Type), self-hosted, under the SIL Open Font License.

---

## Project structure

```
site.config.js      ← edit this for each client
index.html          Home
about.html          About the therapist
services.html       Services and specialties
investment.html     Fees, private-pay, policies
insights.html       Journal listing
article.html        One sample essay
contact.html        Consultation-request form
thank-you.html      After the form is sent
404.html
css/fonts.css       Self-hosted font faces
css/styles.css      All layout and design
js/app.js           Reads the config, wires features
images/             Photos, logo slot, favicon, monogram
fonts/              Cormorant Garamond and Outfit (woff2)
sitemap.xml
robots.txt
```

---

## A note on selling this as a starter site

This is the more editorial, high-end of the two therapist templates. Present it to practices that want a boutique, private-pay presence, and keep a clear scope for each sale: the therapist’s name, photo, bio, specialties, services, fees, contact details, colours, logo, and one round of changes. Anything beyond that is a paid extra. The calmer Willow River template remains the right starting point for a warm, inviting general practice. Offer the $49/month care plan as the natural next step.
