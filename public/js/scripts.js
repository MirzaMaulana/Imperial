// Year at the bottom
document.getElementById("year").innerHTML = new Date().getFullYear();

let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
});
