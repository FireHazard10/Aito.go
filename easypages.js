function includeHTML() {
  // Load header
  fetch("easyheader.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  // Load rec
  fetch("easyrec.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("rec").innerHTML = data;
    });

  //Load Ai-Assist
  fetch("Ai-assist-template.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("Ai-assist").innerHTML = data;
    });

  // Load footer
  fetch("easyfooter.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

// Run on page load
window.onload = includeHTML;
