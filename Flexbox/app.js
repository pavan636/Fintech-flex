const btn = document.querySelector("#menu");
btn.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});
