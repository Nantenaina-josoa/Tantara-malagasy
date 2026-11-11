(() => {
  "use strict";
  const KEY = "tantara-favorites-v1";
  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    } catch {
      return [];
    }
  }
  function save(v) {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch {}
    window.dispatchEvent(new Event("tantara:favorites"));
  }
  function has(id) {
    return read().includes(id);
  }
  function toggle(id) {
    const set = new Set(read());
    set.has(id) ? set.delete(id) : set.add(id);
    save([...set]);
    return set.has(id);
  }
  function updateCount() {
    document.querySelectorAll(".favorites-nav-count").forEach((el) => {
      const n = read().length;
      el.textContent = n ? "(" + n + ")" : "";
    });
  }
  window.TantaraFavorites = { read, has, toggle };
  window.addEventListener("tantara:favorites", updateCount);
  document.addEventListener("DOMContentLoaded", updateCount);
})();
