(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
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
  function render() {
    const ids = window.TantaraFavorites.read();
    const list =
      typeof PROGRAMS === "undefined"
        ? []
        : PROGRAMS.filter((p) => ids.includes(p.id));
    $("favoriteCount").textContent =
      list.length +
      " diffusion" +
      (list.length > 1 ? "s" : "") +
      " enregistrée" +
      (list.length > 1 ? "s" : "");
    $("favoritesEmpty").classList.toggle("d-none", list.length > 0);
    $("favoritesGrid").innerHTML = list
      .map(
        (p) =>
          `<article class="favorite-card"><div class="favorite-card-top"><span class="station-icon"><i class="bx bx-radio"></i></span><button class="favorite-btn is-favorite" data-remove="${esc(p.id)}" aria-label="Retirer ${esc(p.radio)} des favoris" title="Retirer des favoris"><i class="bx bxs-heart"></i></button></div><h3>${esc(p.radio)}</h3><p><i class="bx bx-calendar"></i> ${esc(p.jour)} &nbsp; <i class="bx bx-time"></i> ${esc(p.heure.replace(":", "h"))}</p><strong>${Number(p.frequence).toFixed(1)} MHz</strong></article>`,
      )
      .join("");
    document
      .querySelectorAll("[data-remove]")
      .forEach((b) =>
        b.addEventListener("click", () =>
          window.TantaraFavorites.toggle(b.dataset.remove),
        ),
      );
  }
  window.addEventListener("tantara:favorites", render);
  render();
})();
