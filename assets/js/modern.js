// Theme toggle and a couple of small conveniences for the modern layout.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // On narrow screens, start the timeline scrolled to the present.
  var tl = document.querySelector(".tl-scroll");
  if (tl) tl.scrollLeft = tl.scrollWidth;

  // Open the earlier-news list when printing so nothing is hidden on paper.
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details.more").forEach(function (d) { d.open = true; });
  });
})();
