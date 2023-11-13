// button
let btn = document.querySelector(".show-butt");
let btnClose = document.querySelector(".btn-close");

// page
let Pone = document.querySelector(".show");
let Ptow = document.querySelector(".show2");

btn.addEventListener("click", () => {
  Pone.classList.toggle("visisb");
  Ptow.classList.toggle("invi");
  document.body.classList.remove("blurred"); // Remove blur if it was applied
});

btnClose.addEventListener("click", () => {
  Pone.classList.toggle("visisb");
  Ptow.classList.toggle("invi");
  document.body.classList.add("blurred"); // Remove blur if it was applied
});
