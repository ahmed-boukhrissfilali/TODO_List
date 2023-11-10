const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getfunc()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getfunc() {
  return Math.floor(Math.random() * colors.length);
}
