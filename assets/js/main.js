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
