/* The Whitmore Practice — site behaviour.
 * Reads window.SITE (site.config.js). No build step.
 */
(function () {
  "use strict";

  const S = window.SITE || {};
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- tiny helpers ---------- */
  function text(el, value) {
    if (el && value != null) el.textContent = value;
  }
  function html(el, value) {
    if (el && value != null) el.innerHTML = value;
  }
  function attr(el, name, value) {
    if (!el) return;
    if (value == null || value === "") el.removeAttribute(name);
    else el.setAttribute(name, value);
  }
  function show(el, on) {
    if (!el) return;
    el.hidden = !on;
  }
  function consultHref() {
    const url = (S.bookingUrl || "").trim();
    return url || "contact.html";
  }
  function consultExternal() {
    return Boolean((S.bookingUrl || "").trim());
  }
  function photo(key) {
    return (S.photos && S.photos[key]) || {};
  }

  /* ---------- brand / logo ---------- */
  function hydrateBrand() {
    const name = S.practiceName || "";
    $$("[data-practice-name]").forEach((el) => text(el, name));
    $$("[data-therapist-name]").forEach((el) => {
      const cred = S.credentials ? S.therapistName + ", " + S.credentials : S.therapistName;
      text(el, el.hasAttribute("data-short") ? S.therapistName : cred);
    });
    $$("[data-title]").forEach((el) => text(el, S.professionalTitle || ""));
    $$("[data-tagline]").forEach((el) => text(el, S.tagline || ""));
    $$("[data-short]").forEach((el) => {
      if (el.hasAttribute("data-therapist-name")) return;
      text(el, S.shortDescription || "");
    });
    $$("[data-email]").forEach((el) => {
      const mail = (S.contact && S.contact.email) || "";
      text(el, mail);
      if (el.tagName === "A") attr(el, "href", mail ? "mailto:" + mail : "");
    });
    $$("[data-phone]").forEach((el) => {
      const ph = (S.contact && S.contact.phone) || "";
      text(el, ph);
      if (el.tagName === "A") {
        const digits = ph.replace(/[^\d+]/g, "");
        attr(el, "href", digits ? "tel:" + digits : "");
      }
    });
    $$("[data-hours]").forEach((el) => text(el, (S.contact && S.contact.hours) || ""));
    $$("[data-address]").forEach((el) => {
      const loc = S.location || {};
      text(el, [loc.address, loc.postalCode].filter(Boolean).join(" · "));
    });
    $$("[data-consult-cta]").forEach((el) => {
      const label = consultExternal()
        ? (S.consultCtaBooked || S.consultCta || "Choose a time")
        : (S.consultCta || "Arrange a consultation");
      text(el, label);
      attr(el, "href", consultHref());
      if (consultExternal()) {
        attr(el, "target", "_blank");
        attr(el, "rel", "noopener noreferrer");
      } else {
        el.removeAttribute("target");
        el.removeAttribute("rel");
      }
    });
    $$("[data-consult-duration]").forEach((el) =>
      text(el, [S.consultDuration, S.consultPrice].filter(Boolean).join(" · "))
    );
    $$("[data-consult-title]").forEach((el) => text(el, S.consultTitle || ""));
    $$("[data-consult-text]").forEach((el) => text(el, S.consultText || ""));
    $$("[data-crisis]").forEach((el) =>
      text(el, S.crisisText || "If you are in crisis, call or text 988 (US) or your local emergency number.")
    );
    $$("[data-emergency-note]").forEach((el) => text(el, S.emergencyFormNote || S.crisisText || ""));
    $$("[data-closing-title]").forEach((el) => text(el, S.closingTitle || ""));
    $$("[data-closing-text]").forEach((el) => text(el, S.closingText || ""));
    $$("[data-footer-credit]").forEach((el) => {
      const c = S.footerCredit || {};
      if (!c.show) {
        show(el, false);
        return;
      }
      const a = $("a", el) || el;
      text(a, c.text || "Site by Averryl Studio");
      if (a.tagName === "A") attr(a, "href", c.url || "https://averryl.com");
    });

    /* Logo slot with wordmark fallback */
    $$("[data-brand]").forEach((el) => {
      const logo = (S.logo || "").trim();
      const img = $("[data-logo]", el);
      const word = $("[data-wordmark]", el);
      const mark = $("[data-mark]", el);
      if (logo && img) {
        img.src = logo;
        img.alt = S.logoAlt || name;
        show(img, true);
        if (word) show(word, false);
        if (mark) show(mark, false);
      } else {
        if (img) show(img, false);
        if (word) {
          show(word, true);
          const n = $("[data-practice-name]", word) || word;
          if (n && !n.hasAttribute("data-bound")) text($("[data-practice-name]", word) || null, name);
        }
        if (mark) show(mark, S.showMark !== false);
      }
    });

    /* Accepting clients */
    $$("[data-accepting]").forEach((el) => {
      text(el, S.acceptingClients ? S.acceptingLabel : S.waitlistLabel);
    });

    /* Favicon */
    if (S.favicon) {
      let link = $('link[rel="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = S.favicon;
      link.type = "image/svg+xml";
    }
  }

  /* ---------- photos ---------- */
  function hydratePhotos() {
    $$("[data-photo]").forEach((el) => {
      const p = photo(el.getAttribute("data-photo"));
      if (!p.src) return;
      if (el.tagName === "IMG") {
        el.src = p.src;
        el.alt = p.alt || "";
      } else {
        const img = $("img", el) || el;
        if (img && img.tagName === "IMG") {
          img.src = p.src;
          img.alt = p.alt || "";
        }
      }
    });
    $$("[data-photo-caption]").forEach((el) => {
      const p = photo(el.getAttribute("data-photo-caption"));
      if (p.caption) text(el, p.caption);
    });
  }

  /* ---------- lists from config ---------- */
  function hydrateLists() {
    const fill = (sel, items, render) => {
      const root = $(sel);
      if (!root || !items) return;
      root.innerHTML = items.map(render).join("");
    };

    fill("[data-services]", S.services, (s) =>
      `<article class="card"><p class="meta">${esc(s.duration || "")}</p><h3>${esc(s.name)}</h3><p>${esc(s.description || "")}</p></article>`
    );
    fill("[data-specialties]", S.specialties, (s) =>
      `<article class="card"><h3>${esc(s.name)}</h3><p>${esc(s.description || "")}</p></article>`
    );
    fill("[data-values]", S.values, (v) =>
      `<article class="card"><h3>${esc(v.title)}</h3><p>${esc(v.text || "")}</p></article>`
    );
    fill("[data-fees]", S.fees && S.fees.items, (f) =>
      `<div class="fee-row"><div><div class="fee-name">${esc(f.name)}</div>${f.note ? `<div class="fee-note">${esc(f.note)}</div>` : ""}</div><div class="fee-price">${esc(f.price)}</div></div>`
    );
    fill("[data-training]", S.training, (t) => `<li>${esc(t)}</li>`);
    fill("[data-faq]", S.faq, (f) =>
      `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`
    );
    fill("[data-steps]", S.firstSession, (s, i) =>
      `<article class="step"><div class="step-index">${i + 1}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`
    );

    /* Bio paragraphs */
    $$("[data-bio]").forEach((el) => {
      const paras = S.bioLong || [];
      el.innerHTML = paras.map((p) => `<p>${esc(p)}</p>`).join("");
    });
    $$("[data-bio-short]").forEach((el) => text(el, S.bioShort || ""));
    $$("[data-about-lead]").forEach((el) => text(el, S.aboutLead || ""));
    $$("[data-approach]").forEach((el) => text(el, S.approach || ""));
    $$("[data-approach-title]").forEach((el) => text(el, S.approachTitle || "The work"));
    $$("[data-who]").forEach((el) => text(el, S.whoIWorkWith || ""));
    $$("[data-who-not]").forEach((el) => text(el, S.whoIDont || ""));
    $$("[data-fees-intro]").forEach((el) => text(el, (S.fees && S.fees.intro) || ""));
    $$("[data-insurance]").forEach((el) => text(el, (S.fees && S.fees.insurance) || ""));
    $$("[data-insurance-title]").forEach((el) => text(el, (S.fees && S.fees.insuranceTitle) || ""));
    $$("[data-sliding]").forEach((el) => text(el, (S.fees && S.fees.slidingScale) || ""));
    $$("[data-sliding-title]").forEach((el) => text(el, (S.fees && S.fees.slidingScaleTitle) || ""));
    $$("[data-cancel]").forEach((el) => text(el, (S.fees && S.fees.cancellation) || ""));
    $$("[data-cancel-title]").forEach((el) => text(el, (S.fees && S.fees.cancellationTitle) || ""));
    $$("[data-payment]").forEach((el) => text(el, (S.fees && S.fees.paymentNote) || ""));
    $$("[data-first-intro]").forEach((el) => text(el, S.firstSessionIntro || ""));
    $$("[data-services-intro]").forEach((el) => text(el, S.servicesIntro || ""));
    $$("[data-specialties-intro]").forEach((el) => text(el, S.specialtiesIntro || ""));
    $$("[data-training-note]").forEach((el) => text(el, S.trainingNote || ""));
    $$("[data-articles-intro]").forEach((el) => text(el, S.articlesIntro || ""));

    /* Telehealth */
    $$("[data-telehealth]").forEach((el) => {
      const t = S.telehealth || {};
      if (!t.available) {
        show(el, false);
        return;
      }
      text(el, t.note || (t.states || []).join(", "));
    });

    /* Testimonials — no ethics/confidentiality note */
    const tRoot = $("[data-testimonials]");
    if (tRoot) {
      const t = S.testimonials || {};
      if (!t.show || !t.items || !t.items.length) {
        const wrap = tRoot.closest("section") || tRoot;
        wrap.hidden = true;
      } else {
        tRoot.innerHTML = t.items
          .map(
            (q) =>
              `<figure class="quote"><blockquote>${esc(q.quote)}</blockquote><figcaption>${esc(q.attribution || "Placeholder")}</figcaption></figure>`
          )
          .join("");
        $$("[data-testimonials-heading]").forEach((el) => text(el, t.heading || "In their words"));
      }
    }

    /* Press strip — easy to hide */
    const pressRoot = $("[data-press]");
    if (pressRoot) {
      const p = S.press || {};
      const wrap = pressRoot.closest("section") || pressRoot;
      if (!p.show || !p.items || !p.items.length) {
        wrap.hidden = true;
      } else {
        const heading = $("[data-press-heading]", wrap);
        const note = $("[data-press-note]", wrap);
        const items = $("[data-press-items]", wrap) || pressRoot;
        text(heading, p.heading || "Selected mentions");
        text(note, p.note || "");
        items.innerHTML = p.items
          .map((it) => {
            const inner = esc(it.name);
            if (it.href) {
              return `<a class="press-item" href="${esc(it.href)}" rel="noopener noreferrer">${inner}</a>`;
            }
            return `<span class="press-item">${inner}</span>`;
          })
          .join("");
      }
    }

    /* Insights cards */
    const aRoot = $("[data-articles]");
    if (aRoot && S.articles) {
      aRoot.innerHTML = S.articles
        .map((a, i) => {
          const p = photo(a.image);
          const featured = a.featured || i === 0 ? " featured" : "";
          const img = p.src
            ? `<img src="${esc(p.src)}" alt="${esc(p.alt || "")}" width="1200" height="800">`
            : "";
          return `<a class="article-card${featured}" href="${esc(a.href || "article.html")}">
            ${img}
            <p class="eyebrow">${esc(a.eyebrow || "")}</p>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.excerpt || "")}</p>
          </a>`;
        })
        .join("");
    }

    /* Sample article body */
    const art = S.article || {};
    $$("[data-article-title]").forEach((el) => text(el, art.title || ""));
    $$("[data-article-eyebrow]").forEach((el) => text(el, art.eyebrow || ""));
    $$("[data-article-date]").forEach((el) => text(el, art.date || ""));
    $$("[data-article-dek]").forEach((el) => text(el, art.dek || ""));
    $$("[data-article-body]").forEach((el) => {
      el.innerHTML = (art.body || []).map((p) => `<p>${esc(p)}</p>`).join("");
    });
    const artImg = $("[data-article-image]");
    if (artImg && art.image) {
      const p = photo(art.image);
      const img = artImg.tagName === "IMG" ? artImg : $("img", artImg);
      if (img && p.src) {
        img.src = p.src;
        img.alt = p.alt || "";
      }
    }
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Find your path ---------- */
  function hydratePath() {
    const root = $("[data-path]");
    if (!root) return;
    const options = S.pathOptions || [];
    $$("[data-path-title]").forEach((el) => text(el, S.pathTitle || "Find your path"));
    $$("[data-path-intro]").forEach((el) => text(el, S.pathIntro || ""));
    $$("[data-path-disclaimer]").forEach((el) => text(el, S.pathDisclaimer || ""));

    const list = $("[data-path-list]", root) || root;
    list.innerHTML = options
      .map((o, i) => {
        const n = String(i + 1).padStart(2, "0");
        return `<div class="path-item" data-path-item="${esc(o.id)}">
          <button type="button" class="path-btn" aria-expanded="false" aria-controls="path-panel-${esc(o.id)}" id="path-btn-${esc(o.id)}">
            <span class="path-num">${n}</span>
            <span class="path-label">${esc(o.label)}</span>
            <span class="path-arrow" aria-hidden="true">+</span>
          </button>
          <div class="path-panel" id="path-panel-${esc(o.id)}" role="region" aria-labelledby="path-btn-${esc(o.id)}" hidden>
            <p class="path-recommend">${esc(o.recommend || "")}</p>
            <p>${esc(o.text || "")}</p>
            <a class="btn btn-primary" data-consult-cta href="${esc(consultHref())}">${esc(S.pathCta || "Arrange a consultation")}</a>
          </div>
        </div>`;
      })
      .join("");

    /* Event delegation — lesson from template 1: do not query unique IDs on a subtree */
    list.addEventListener("click", (e) => {
      const btn = e.target.closest(".path-btn");
      if (!btn || !list.contains(btn)) return;
      const item = btn.closest(".path-item");
      const open = item.classList.contains("is-open");
      $$(".path-item", list).forEach((it) => {
        it.classList.remove("is-open");
        const b = $(".path-btn", it);
        const p = $(".path-panel", it);
        if (b) b.setAttribute("aria-expanded", "false");
        if (p) p.hidden = true;
      });
      if (!open) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        const panel = $(".path-panel", item);
        if (panel) {
          panel.hidden = false;
          /* re-bind consult cta inside (already has href) */
        }
      }
    });
  }

  /* ---------- FormSubmit ---------- */
  function hydrateForm() {
    const form = document.getElementById("inquiry-form");
    if (!form) return;
    const email = ((S.contact && (S.contact.inquiryEmail || S.contact.email)) || "").trim();
    const cfg = S.form || {};
    const thank = cfg.thankYouPath || "thank-you.html";
    /* Absolute thank-you so FormSubmit can redirect */
    const next = new URL(thank, window.location.href).href;

    form.setAttribute("action", "https://formsubmit.co/" + encodeURIComponent(email));
    form.setAttribute("method", "POST");
    setHidden(form, "_next", next);
    setHidden(form, "_subject", cfg.subject || "Consultation request");
    setHidden(form, "_template", "table");
    setHidden(form, "_captcha", "false");
    setHidden(form, "_honey", "website"); /* honeypot field name */
    if (cfg.autoresponse) setHidden(form, "_autoresponse", cfg.autoresponse);

    const consentLabel = $("[data-consent-text]");
    if (consentLabel) text(consentLabel, cfg.consentText || consentLabel.textContent);
    const submit = form.querySelector('[type="submit"]');
    if (submit && cfg.submitLabel) text(submit, cfg.submitLabel);

    form.addEventListener("submit", (e) => {
      const alertBox = document.getElementById("form-alert");
      const honey = form.querySelector('input[name="website"]');
      if (honey && honey.value) {
        e.preventDefault();
        return;
      }
      const consent = form.querySelector("#consent, [name='consent']");
      if (consent && !consent.checked) {
        e.preventDefault();
        if (alertBox) {
          alertBox.hidden = false;
          alertBox.classList.add("error");
          alertBox.textContent = "Please confirm the consent box before sending.";
          consent.focus();
        }
        return;
      }
      if (!email || email === "hello@example.com") {
        /* Still allow submit — placeholder practice. The first real client
           must replace the email and click FormSubmit's activation link. */
      }
    });
  }

  function setHidden(form, name, value) {
    let input = form.querySelector(`input[name="${name}"]`);
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }
    input.value = value;
  }

  /* ---------- Mobile menu ---------- */
  function nav() {
    const toggle = document.getElementById("menu-toggle");
    const panel = document.getElementById("mobile-panel");
    if (!toggle || !panel) return;
    const close = () => {
      document.body.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
    };
    const open = () => {
      document.body.classList.add("is-menu-open");
      toggle.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
    };
    toggle.addEventListener("click", () => {
      if (document.body.classList.contains("is-menu-open")) close();
      else open();
    });
    panel.addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("is-menu-open")) {
        close();
        toggle.focus();
      }
    });
  }

  /* ---------- Sticky header state ---------- */
  function headerScroll() {
    const on = () => {
      document.body.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
  }

  /* ---------- Comfort: type, motion, theme ---------- */
  function comfort() {
    const root = document.documentElement;
    const storedType = localStorage.getItem("wp-type");
    const storedMotion = localStorage.getItem("wp-motion");
    const storedTheme = localStorage.getItem("wp-theme");
    if (storedType) root.setAttribute("data-type", storedType);
    if (storedMotion) root.setAttribute("data-motion", storedMotion);
    if (storedTheme) root.setAttribute("data-theme", storedTheme);

    const typeBtn = document.getElementById("comfort-type");
    const motionBtn = document.getElementById("comfort-motion");
    const themeBtn = document.getElementById("comfort-theme");

    const sync = () => {
      if (typeBtn) {
        const on = root.getAttribute("data-type") === "large";
        typeBtn.setAttribute("aria-pressed", on ? "true" : "false");
        typeBtn.textContent = on ? "Default text size" : "Larger text";
      }
      if (motionBtn) {
        const on = root.getAttribute("data-motion") === "reduce";
        motionBtn.setAttribute("aria-pressed", on ? "true" : "false");
        motionBtn.textContent = on ? "Allow motion" : "Reduce motion";
      }
      if (themeBtn) {
        const on = root.getAttribute("data-theme") === "dark";
        themeBtn.setAttribute("aria-pressed", on ? "true" : "false");
        themeBtn.textContent = on ? "Light appearance" : "Dark appearance";
      }
    };
    sync();

    /* Delegation on the comfort bar — unique IDs via getElementById */
    const bar = document.getElementById("comfort");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.id === "comfort-type") {
        const on = root.getAttribute("data-type") === "large";
        if (on) {
          root.removeAttribute("data-type");
          localStorage.removeItem("wp-type");
        } else {
          root.setAttribute("data-type", "large");
          localStorage.setItem("wp-type", "large");
        }
      } else if (btn.id === "comfort-motion") {
        const on = root.getAttribute("data-motion") === "reduce";
        if (on) {
          root.removeAttribute("data-motion");
          localStorage.removeItem("wp-motion");
        } else {
          root.setAttribute("data-motion", "reduce");
          localStorage.setItem("wp-motion", "reduce");
        }
      } else if (btn.id === "comfort-theme") {
        const on = root.getAttribute("data-theme") === "dark";
        if (on) {
          root.removeAttribute("data-theme");
          localStorage.removeItem("wp-theme");
        } else {
          root.setAttribute("data-theme", "dark");
          localStorage.setItem("wp-theme", "dark");
        }
      }
      sync();
    });
  }

  /* Apply stored theme early — a tiny inline in <head> also does this */
  function applyStoredThemeEarly() {
    try {
      const t = localStorage.getItem("wp-theme");
      const m = localStorage.getItem("wp-motion");
      const y = localStorage.getItem("wp-type");
      if (t) document.documentElement.setAttribute("data-theme", t);
      if (m) document.documentElement.setAttribute("data-motion", m);
      if (y) document.documentElement.setAttribute("data-type", y);
    } catch (err) { /* private mode */ }
  }

  /* ---------- Current nav ---------- */
  function currentNav() {
    const file = (location.pathname.split("/").pop() || "index.html") || "index.html";
    const page = file === "" ? "index.html" : file;
    $$(".nav a, #mobile-panel a").forEach((a) => {
      const href = (a.getAttribute("href") || "").split("#")[0];
      if (!href) return;
      if (href === page || (page === "index.html" && (href === "./" || href === "index.html"))) {
        if (!a.classList.contains("nav-cta")) a.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------- SEO: JSON-LD (in case head is static) ---------- */
  function jsonld() {
    if ($("script[data-jsonld]")) return;
    const loc = S.location || {};
    const c = S.contact || {};
    const data = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: S.practiceName,
      description: S.shortDescription,
      url: S.siteUrl,
      email: c.email,
      telephone: c.phone,
      image: S.siteUrl ? S.siteUrl.replace(/\/$/, "") + "/images/entrance.jpg" : undefined,
      address: {
        "@type": "PostalAddress",
        addressLocality: loc.city,
        addressRegion: loc.state,
        addressCountry: "US"
      },
      founder: {
        "@type": "Person",
        name: S.therapistName,
        jobTitle: S.professionalTitle
      },
      areaServed: ((S.telehealth && S.telehealth.states) || []).map((st) => ({
        "@type": "State",
        name: st
      })),
      priceRange: "$$$"
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-jsonld", "true");
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- Social links ---------- */
  function social() {
    const soc = S.social || {};
    $$("[data-social]").forEach((el) => {
      const key = el.getAttribute("data-social");
      const href = soc[key];
      if (!href) {
        show(el, false);
        return;
      }
      attr(el, "href", href);
    });
  }


  function applyColors() {
    const c = S.colors || {};
    if (!c.ivory && !c.espresso) return;
    let el = document.getElementById("theme-from-config");
    if (!el) {
      el = document.createElement("style");
      el.id = "theme-from-config";
      document.head.appendChild(el);
    }
    const dec = (k, v) => (v ? `${k}: ${v};` : "");
    el.textContent = `:root { ${dec("--ivory", c.ivory)}${dec("--parchment", c.parchment)}${dec("--stone", c.stone)}${dec("--espresso", c.espresso)}${dec("--ink", c.ink)}${dec("--umber", c.umber)}${dec("--taupe", c.taupe)}${dec("--brass", c.brass)}${dec("--brass-deep", c.brassDeep)} }`;
  }

  /* ---------- Kick-off ---------- */
  applyStoredThemeEarly();
  document.addEventListener("DOMContentLoaded", () => {
    applyColors();
    hydrateBrand();
    hydratePhotos();
    hydrateLists();
    hydratePath();
    hydrateForm();
    /* Re-run consult CTAs after path injects new buttons */
    hydrateBrand();
    nav();
    headerScroll();
    comfort();
    currentNav();
    jsonld();
    social();
    document.documentElement.classList.add("is-ready");
  });
})();
