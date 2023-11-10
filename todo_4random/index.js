const datas = [
  {
    id: 1,
    img: "/img/one.jpg",
    name: "mohmaed amine",
    job: "devloppeur web",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/img/tow.jpg",
    name: "anas momni",
    job: "Game devlopper",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/img/tree.jpg",
    name: "laTIFA AMINB",
    job: "RH",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// declaraton du variable

let counter = 0;

//button
let btns = document.querySelectorAll(".btn");
let pre = document.querySelector(".pre");
let ag = document.querySelector(".ag");
let rand = document.querySelector(".rand");
// instanats
let imge = document.querySelector(".imge");
let nom = document.querySelector(".nom");
let job = document.querySelector(".job");
let desc = document.querySelector(".desc");

function getfun() {
  return Math.floor(Math.random() * datas.length);
}

function Persone(counter) {
  let style = datas[counter];
  imge.src = style.img; // Correction ici
  nom.textContent = style.name;
  job.textContent = style.job;
  desc.textContent = style.desc;
}

// eveemenet


// laodn
window.addEventListener("DOMContentLoaded", () => {
  Persone(getfun());
});

//less and ag
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let cont = e.currentTarget.classList;
    if (cont.contains("pre")) {
      counter--;

      if (counter < 0) {
        counter = 3;
      }
    }

    if (cont.contains("ag")) {
      counter++;

      if (counter > datas.length) {
        counter = 0;
      }
    }
    Persone(counter);
  });
});

// random button 
rand.addEventListener("click", () => {
  Persone(getfun());
});
