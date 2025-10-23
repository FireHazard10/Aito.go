// simple auto slider every 5s with wrap
(function () {
  const slidx = document.getElementById("slidx");
  const total = slidx.children.length;
  let idx = 0;
  function go(i) {
    slidx.style.transform = `translateX(${-i * 100}%)`;
  }
  function next() {
    idx = (idx + 1) % total;
    go(idx);
  }
  let t = setInterval(next, 4500);
  // pause on hover
  slidx.parentElement.addEventListener("mouseenter", () => clearInterval(t));
  slidx.parentElement.addEventListener(
    "mouseleave",
    () => (t = setInterval(next, 4500))
  );
})();
