(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  /* Header shadow on scroll */
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeNav();
    });
  }

  /* Scroll reveal (progressive enhancement) */
  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduce) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = Math.min(i * 60, 180);
            setTimeout(function () { el.classList.add("is-in"); }, delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Current year */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* Newsletter (demo handler — no backend, wires to mailto) */
  var form = document.getElementById("subscribe");
  var note = document.getElementById("subNote");
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("#email");
      var value = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      note.classList.remove("is-ok", "is-err");
      if (!valid) {
        note.textContent = "Please enter a valid email address.";
        note.classList.add("is-err");
        if (input) input.focus();
        return;
      }
      note.textContent = "Thank you — you're on the list. (Demo form: connect your provider to go live.)";
      note.classList.add("is-ok");
      form.reset();
    });
  }

  /* Smooth in-page nav offset for sticky header */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#" || id === "#top") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });
})();
