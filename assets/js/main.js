/* =====================================================
   AG MEDICA — main.js
   ===================================================== */

/* ── Mobile menu ─────────────────────────────────────── */
(function () {
  const btn  = document.querySelector(".burger");
  const menu = document.getElementById("nav-links");
  if (!btn || !menu) return;
  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
})();

/* ── Active nav link ─────────────────────────────────── */
(function () {
  const path  = window.location.pathname.replace(/\/$/, "") || "/";
  const links = document.querySelectorAll(".nav-link");
  links.forEach(function (a) {
    const href = a.getAttribute("href");
    if (!href) return;
    const abs = new URL(href, window.location.href).pathname.replace(/\/$/, "") || "/";
    if (abs === path) a.classList.add("active");
  });
})();

/* ── Scroll reveal ───────────────────────────────────── */
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
})();

/* ── Animated counters (data-count="N") ──────────────── */
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var target = parseInt(e.target.getAttribute("data-count"), 10);
      var dur    = 1400;
      var start  = null;
      function tick(now) {
        if (!start) start = now;
        var p = Math.min((now - start) / dur, 1);
        e.target.textContent = Math.round(p * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(function (el) { io.observe(el); });
})();

/* ── Contact form (mailto fallback) ──────────────────── */
(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name    = (form.querySelector("[name='name']")    || {}).value || "";
    var email   = (form.querySelector("[name='email']")   || {}).value || "";
    var message = (form.querySelector("[name='message']") || {}).value || "";
    var subject = encodeURIComponent("Richiesta informazioni - " + name);
    var body    = encodeURIComponent("Nome: " + name + "\nEmail: " + email + "\n\n" + message);
    window.location.href = "mailto:info@agmedica.it?subject=" + subject + "&body=" + body;
  });
})();