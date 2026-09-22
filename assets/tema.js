/* Tema claro/oscuro de las guías (misma lógica que index.html) */
(function(){
  var root = document.documentElement, btn = document.getElementById("theme-btn");
  if (!btn) return;
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function current(){ return root.getAttribute("data-theme") || (mq && mq.matches ? "dark" : "light"); }
  function sync(){
    var t = current();
    btn.setAttribute("aria-label", t === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    btn.setAttribute("title", btn.getAttribute("aria-label"));
    if (root.getAttribute("data-theme")) for (var i = 0; i < metas.length; i++) metas[i].setAttribute("content", t === "dark" ? "#0C1614" : "#F2F5F4");
  }
  btn.addEventListener("click", function(){
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("sinhueco-theme", next); } catch(e){}
    sync();
  });
  if (mq && mq.addEventListener) mq.addEventListener("change", sync);
  sync();
})();
