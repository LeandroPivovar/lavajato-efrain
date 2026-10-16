(function () {
  "use strict";

  var WA = "559294925953";

  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".ph").className = open ? "ph ph-x" : "ph ph-list";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector(".ph").className = "ph ph-list";
      }
    });
  }

  var form = document.getElementById("waForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = (document.getElementById("nome").value || "").trim();
      var cidade = (document.getElementById("cidade").value || "").trim();
      var servico = document.getElementById("servico").value || "";
      var msg = (document.getElementById("msg").value || "").trim();
      var texto = "Olá! Meu nome é " + nome + "." +
        (cidade ? "\nVeículo: " + cidade : "") +
        "\nServiço: " + servico +
        (msg ? "\n" + msg : "");
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });
  }

  // FAQ: uma pergunta aberta por vez
  var faqs = document.querySelectorAll(".faq details");
  faqs.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Galeria: filtros, "ver mais" e lightbox (foto ou vídeo)
  var grid = document.getElementById("galGrid");
  if (grid) {
    var items = Array.prototype.slice.call(grid.querySelectorAll(".gal-item"));
    var more = document.getElementById("galMore");
    var chips = document.querySelectorAll(".gal-filters .chip");
    var LIMIT = 12, expanded = false, filter = "all";

    var visible = function () {
      return items.filter(function (it) { return !it.classList.contains("is-hidden") && !it.classList.contains("is-extra"); });
    };
    var apply = function () {
      var n = 0;
      items.forEach(function (it) {
        var match = filter === "all" || it.getAttribute("data-cat").split(" ").indexOf(filter) > -1;
        it.classList.toggle("is-hidden", !match);
        if (match) n++;
        it.classList.toggle("is-extra", match && !expanded && n > LIMIT);
      });
      more.hidden = expanded || n <= LIMIT;
    };
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        filter = c.getAttribute("data-filter");
        chips.forEach(function (o) { o.classList.toggle("is-on", o === c); o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
        apply();
      });
    });
    more.addEventListener("click", function () { expanded = true; apply(); });
    apply();

    var lb = document.getElementById("lightbox");
    var media = document.getElementById("lbMedia");
    var cap = document.getElementById("lbCap");
    var current = null;
    var show = function (it) {
      current = it;
      var src = it.getAttribute("data-src");
      var alt = it.querySelector("img").alt;
      media.innerHTML = "";
      var el;
      if (it.classList.contains("is-video")) {
        el = document.createElement("video");
        el.controls = true; el.playsInline = true; el.autoplay = true;
        el.poster = it.querySelector("img").getAttribute("src");
        el.src = src;
      } else {
        el = document.createElement("img");
        el.src = src; el.alt = alt;
      }
      media.appendChild(el);
      cap.textContent = alt;
    };
    var step = function (d) {
      var list = visible();
      var i = list.indexOf(current);
      if (list.length) show(list[(i + d + list.length) % list.length]);
    };
    var close = function () { media.innerHTML = ""; if (lb.open) lb.close(); };
    grid.addEventListener("click", function (e) {
      var it = e.target.closest(".gal-item");
      if (!it) return;
      show(it);
      if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
    });
    lb.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lb]");
      if (b) {
        var a = b.getAttribute("data-lb");
        if (a === "close") close(); else step(a === "next" ? 1 : -1);
      } else if (e.target === lb) close();
    });
    lb.addEventListener("close", function () { media.innerHTML = ""; });
    document.addEventListener("keydown", function (e) {
      if (!lb.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }
})();
