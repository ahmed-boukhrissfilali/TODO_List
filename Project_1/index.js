const colors = ["green", " red", "#f3f3f3f3"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let getNumbe = getNumber();
  document.body.style.backgroundColor = colors[getNumbe];
});

function getNumber() {
  return Math.floor(Math.random() * colors.length);
}
