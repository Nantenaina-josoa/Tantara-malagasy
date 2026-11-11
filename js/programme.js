(() => {
  "use strict";
  const $ = (id) => document.getElementById(id),
    ORDER = [
      "Alatsinainy",
      "Talata",
      "Alarobia",
      "Alakamisy",
      "Zoma",
      "Sabotsy",
      "Alahady",
    ],
    short = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Indian/Antananarivo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const getNow = () => {
    const p = Object.fromEntries(
      fmt
        .formatToParts(new Date())
        .filter((x) => x.type !== "literal")
        .map((x) => [x.type, +x.value]),
    );
    const date = new Date(Date.UTC(p.year, p.month - 1, p.day));
    return {
      ...p,
      dayIndex: (date.getUTCDay() + 6) % 7,
      minutes: p.hour * 60 + p.minute,
      seconds: p.hour * 3600 + p.minute * 60 + p.second,
    };
  };
  const mins = (s) => {
    const [h, m] = s.split(":").map(Number);
    return h * 60 + m;
  };
  const time = (s) => s.replace(":", "h");
  const freq = (n) => Number(n).toFixed(1) + " MHz";
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const items = PROGRAMS.slice().sort(
    (a, b) =>
      ORDER.indexOf(a.jour) - ORDER.indexOf(b.jour) ||
      mins(a.heure) - mins(b.heure),
  );
  let selected = ORDER[getNow().dayIndex];
  let query = "";
  let filter = "all";
  const unique = new Set(
    items.map((p) => p.radio.toLowerCase() + "|" + p.frequence),
  );
  function tabs() {
    const current = ORDER[getNow().dayIndex];
    $("dayTabs").innerHTML = ORDER.map(
      (d, i) =>
        `<button type="button" role="tab" aria-selected="${selected === d}" class="day-tab ${selected === d ? "active" : ""}" data-day="${d}">${short[i]}${d === current ? " · Aujourd’hui" : ""}</button>`,
    ).join("");
    $("dayTabs")
      .querySelectorAll("button")
      .forEach((b) =>
        b.addEventListener("click", () => {
          selected = b.dataset.day;
          tabs();
          render();
          full();
        }),
      );
  }
  function allowed(p, n) {
    const today = ORDER[n.dayIndex];
    if (filter === "today") return p.jour === today;
    if (filter === "upcoming")
      return p.jour === today && mins(p.heure) * 60 > n.seconds;
    if (filter === "past")
      return p.jour === today && mins(p.heure) * 60 <= n.seconds;
    return true;
  }
  function render() {
    const n = getNow();
    const list = items.filter(
      (p) =>
        p.jour === selected &&
        allowed(p, n) &&
        `${p.radio} ${p.frequence}`.toLowerCase().includes(query),
    );
    $("selectedDayTitle").textContent = selected;
    $("resultsCount").textContent =
      list.length + " diffusion" + (list.length > 1 ? "s" : "");
    $("programGrid").innerHTML = list
      .map(
        (p) =>
          `<article class="program-card"><div class="program-card-top"><span class="station-icon"><i class="bx bx-radio"></i></span><div class="card-actions"><button class="favorite-btn ${window.TantaraFavorites?.has(p.id) ? "is-favorite" : ""}" data-fav="${esc(p.id)}" aria-label="Ajouter ou retirer ${esc(p.radio)} des favoris" aria-pressed="${window.TantaraFavorites?.has(p.id) ? "true" : "false"}" title="Favoris"><i class="bx bx-${window.TantaraFavorites?.has(p.id) ? "bxs-heart" : "heart"}"></i></button><button class="copy-btn" data-id="${esc(p.id)}" aria-label="Copier les informations de ${esc(p.radio)}" title="Copier"><i class="bx bx-copy"></i></button></div></div><h5>${esc(p.radio)}</h5><div class="card-details"><span><i class="bx bx-time-five"></i> ${time(p.heure)}</span><strong>${freq(p.frequence)}</strong></div></article>`,
      )
      .join("");
    $("programGrid")
      .querySelectorAll("[data-fav]")
      .forEach((b) =>
        b.addEventListener("click", () => {
          window.TantaraFavorites.toggle(b.dataset.fav);
          render();
        }),
      );
    $("emptyState").classList.toggle("d-none", list.length !== 0);
    $("programGrid")
      .querySelectorAll(".copy-btn")
      .forEach((b) =>
        b.addEventListener("click", async () => {
          const p = items.find((x) => x.id === b.dataset.id);
          if (!p) return;
          const str = `${p.jour} — ${p.radio} — ${time(p.heure)} — ${freq(p.frequence)}`;
          try {
            await navigator.clipboard.writeText(str);
            if (window.bootstrap) new bootstrap.Toast($("copyToast")).show();
            else alert("Informations copiées.");
          } catch {
            window.prompt("Copiez ces informations :", str);
          }
        }),
      );
  }
  function full() {
    let last = "";
    $("fullSchedule").innerHTML = items
      .filter((p) => p.jour === selected)
      .map((p) => {
        const show = p.jour !== last;
        last = p.jour;
        return `<tr><td>${show ? `<strong>${esc(p.jour)}</strong>` : ""}</td><td>${time(p.heure)}</td><td>${esc(p.radio)}</td><td class="freq">${freq(p.frequence)}</td></tr>`;
      })
      .join("");
  }
  function upcoming() {
    const n = getNow();
    let next = null,
      best = Infinity;
    for (const p of items) {
      let days = (ORDER.indexOf(p.jour) - n.dayIndex + 7) % 7;
      let delta = days * 86400 + mins(p.heure) * 60 - n.seconds;
      if (delta <= 0) delta += 7 * 86400;
      if (delta < best) {
        best = delta;
        next = p;
      }
    }
    if (!next) return;
    $("nextStation").textContent = next.radio;
    $("nextDetails").textContent =
      `${next.jour} · ${time(next.heure)} · ${freq(next.frequence)}`;
    const d = Math.floor(best / 86400),
      h = Math.floor((best % 86400) / 3600),
      m = Math.floor((best % 3600) / 60),
      s = best % 60;
    $("countdown").textContent =
      (d ? d + "j " : "") +
      [h, m, s].map((x) => String(x).padStart(2, "0")).join(":");
  }
  function clock() {
    const n = getNow();
    const date = new Intl.DateTimeFormat("fr-FR", {
      timeZone: "Indian/Antananarivo",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
    const hour = [n.hour, n.minute, n.second]
      .map((x) => String(x).padStart(2, "0"))
      .join(":");
    $("topClock").textContent = "Antananarivo · " + hour;
    $("madagascarClock").textContent = hour + " · Madagascar";
    $("todayDate").textContent = date;
    upcoming();
  }
  $("searchInput").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });
  $("statusFilter").addEventListener("change", (e) => {
    filter = e.target.value;
    if (filter !== "all") {
      selected = ORDER[getNow().dayIndex];
      tabs();
      full();
    }
    render();
  });
  $("printButton").addEventListener("click", () => window.print());
  tabs();
  render();
  full();
  clock();
  setInterval(clock, 1000);
  setInterval(() => {
    if (filter !== "all") render();
  }, 60000);
})();
