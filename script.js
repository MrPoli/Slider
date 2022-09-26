let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let photo = document.querySelector("#slider");
let divDiv = document.querySelector("div+div");
let photosArray = new Array(
  "https://image.ceneostatic.pl/data/products/57402217/i-hecht-motor-zielony-54501.jpg",
  "https://mojtransportosobisty.pl/img/products/5/6.jpg",
  "https://image.ceneostatic.pl/data/products/84511615/i-motor-motocykl-kawasaki-ninja-scigacz-idealny.jpg",
  "https://auto-kids.pl/wp-content/uploads/2021/09/Duzy-motor-dla-dziecka-BMW-K1300S-Niebieski-176064.jpg",
  "https://www.demotos.pl/userdata/public/gfx/aab66b7abb17068f4443c53e4df42649.jpg"
);

// start data
let i = 0;
photo.style.backgroundImage = "url(" + photosArray[0] + ")";
divDiv.textContent = i + 1 + "/" + photosArray.length;

// mouse click on right arrow
function arrowRightClick() {
  arrowLeft.classList.remove("disabled");
  if (i + 1 < photosArray.length) {
    i++;
    photo.style.backgroundImage = "url(" + photosArray[i] + ")";
    divDiv.textContent = i + 1 + "/" + photosArray.length;
  }
  if (i + 1 == photosArray.length) {
    arrowRight.classList.add("disabled");
  }
}

// mouse click on left arrow
function arrowLeftClick() {
  arrowRight.classList.remove("disabled");
  if (i > 0) {
    i--;
    photo.style.backgroundImage = "url(" + photosArray[i] + ")";
    divDiv.textContent = i + 1 + "/" + photosArray.length;
  }
  if (i == 0) {
    arrowLeft.classList.add("disabled");
  }
}

// mouse click on arrows reaction
arrowLeft.addEventListener("click", () => arrowLeftClick());
arrowRight.addEventListener("click", () => arrowRightClick());

//keybord arrow click reaction

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "ArrowLeft":
        arrowLeftClick();
        break;
      case "ArrowRight":
        arrowRightClick();
        break;
      default:
        return;
    }

    event.preventDefault();
  },
  true
);
