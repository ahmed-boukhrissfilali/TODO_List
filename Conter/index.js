let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decriments")) {
      count--;
    } else if (styles.contains("insciments")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
