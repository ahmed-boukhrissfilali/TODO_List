let btn = document.querySelector(".menu");
let nav = document.querySelector(".list-link");

btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
