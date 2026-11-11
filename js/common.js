(() => {
  "use strict";
  const assetLogoUrl = new URL("../assets/logo.svg", document.currentScript.src)
    .href;
  const $ = (id) => document.getElementById(id);
  const fmt = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Indian/Antananarivo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  function tick() {
    if ($("topClock"))
      $("topClock").textContent = "Antananarivo · " + fmt.format(new Date());
  }
  tick();
  setInterval(tick, 1000);
  if ($("year")) $("year").textContent = new Date().getFullYear();
  if ($("stationCount") && typeof PROGRAMS !== "undefined")
    $("stationCount").textContent = new Set(
      PROGRAMS.map((p) => p.radio.toLowerCase() + "|" + p.frequence),
    ).size;
  if ($("broadcastCount") && typeof PROGRAMS !== "undefined")
    $("broadcastCount").textContent = PROGRAMS.length;
  try {
    if (localStorage.getItem("tantara-theme") === "dark")
      document.body.classList.add("theme-dark");
  } catch {}
  function icon() {
    if ($("themeToggle"))
      $("themeToggle").innerHTML =
        '<i class="bx bx-' +
        (document.body.classList.contains("theme-dark") ? "sun" : "moon") +
        '"></i>';
  }
  icon();
  $("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    try {
      localStorage.setItem(
        "tantara-theme",
        document.body.classList.contains("theme-dark") ? "dark" : "light",
      );
    } catch {}
    icon();
  });
  $("menuToggle")?.addEventListener("click", () => {
    const open = $("mainNav").classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(open));
    $("menuToggle").innerHTML =
      '<i class="bx bx-' + (open ? "x" : "menu") + '"></i>';
  });
  $("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!e.target.reportValidity()) return;
    const name = $("contactName").value.trim(),
      email = $("contactEmail").value.trim(),
      subject = $("contactSubject").value,
      message = $("contactMessage").value.trim();
    const body = "Nom : " + name + "\nE-mail : " + email + "\n\n" + message;
    window.location.href =
      "mailto:r.nantenaina.josoa@gmail.com?subject=" +
      encodeURIComponent("[Tantara Indray Mihaino] " + subject) +
      "&body=" +
      encodeURIComponent(body);
  });
  function initMotion() {
    const splash = document.createElement("div");
    splash.className = "splash";
    splash.setAttribute("aria-hidden", "true");
    splash.innerHTML =
      '<div class="splash-content"><img src="' +
      assetLogoUrl +
      '" alt="Logo Tantara Malagasy"><p>TANTARA INDRAY MIHAINO</p><div class="splash-line"></div></div>';
    document.body.appendChild(splash);
    const close = () => {
      splash.classList.add("is-hidden");
      setTimeout(() => splash.remove(), 500);
    };
    window.addEventListener("load", () => setTimeout(close, 2100), {
      once: true,
    });
    setTimeout(close, 3800);
    const nodes = document.querySelectorAll(
      "main section, .program-card, .schedule-panel, .full-schedule, .footer-main, .hero-copy, .hero-visual",
    );
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              obs.unobserve(e.target);
            }
          }),
        { threshold: 0.08 },
      );
      nodes.forEach((n) => {
        n.classList.add("reveal");
        obs.observe(n);
      });
    } else nodes.forEach((n) => n.classList.add("is-visible"));
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", initMotion);
  else initMotion();
})();
// Navigation and favorites CTA localization across pages.
(function () {
  const labels = {
    mg: ["Jereo ny ora", "Jereo ny fandaharana"],
    en: ["View schedule", "View the schedule"],
    fr: ["Voir les horaires", "Voir le programme"],
  };
  function update() {
    let lang = "fr";
    try {
      lang =
        localStorage.getItem("tantara-language") ||
        document.documentElement.lang ||
        "fr";
    } catch (e) {}
    lang = lang.toLowerCase().slice(0, 2);
    const t = labels[lang] || labels.fr;
    document
      .querySelectorAll("[data-nav-schedule]")
      .forEach((el) => (el.textContent = t[0]));
    document
      .querySelectorAll("[data-favorites-action]")
      .forEach((el) => (el.textContent = t[1]));
  }
  document.addEventListener("tantara:language", update);
  document.addEventListener("DOMContentLoaded", () => {
    update();
    document
      .querySelector("#languageSelect")
      ?.addEventListener("change", () => setTimeout(update, 30));
  });
})();
