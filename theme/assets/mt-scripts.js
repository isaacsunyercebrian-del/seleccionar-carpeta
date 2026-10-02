/* LUMINA — interacciones (vanilla JS, sin librerías) */
(function () {
  "use strict";

  // Animaciones de entrada al hacer scroll
  function initReveal() {
    var els = document.querySelectorAll(".mt-reveal");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("mt-in");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("mt-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  // Acordeón de preguntas frecuentes
  function initFaq() {
    var items = document.querySelectorAll(".mt-faq__item");
    items.forEach(function (item) {
      var q = item.querySelector(".mt-faq__q");
      var a = item.querySelector(".mt-faq__a");
      if (!q || !a) return;
      q.addEventListener("click", function () {
        var open = item.classList.contains("mt-open");
        if (open) {
          item.classList.remove("mt-open");
          a.style.maxHeight = null;
          q.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("mt-open");
          a.style.maxHeight = a.scrollHeight + "px";
          q.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // Marquesina infinita: duplica el contenido para un bucle sin saltos
  function initMarquee() {
    var tracks = document.querySelectorAll(".mt-marquee__track[data-loop]");
    tracks.forEach(function (track) {
      track.innerHTML = track.innerHTML + track.innerHTML;
    });
  }

  function boot() {
    initReveal();
    initFaq();
    initMarquee();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
