// section-1

// slideShow

const slideShowDivs = () => {
  for (i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(assets/images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    document.querySelector(".slideshow").appendChild(div);
  }
};
slideShowDivs();

const divs = document.querySelectorAll(".slideshow div");
let a = 1;
const slide = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 0;
    }
  }, 4000);
};
slide();

// End of slideShow

// 3D cube

let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;
const cube = document.querySelector(".cube");

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotatey(${y++}deg) rotatez(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotatey(${y}deg) rotatez(${z}deg)`;
});
document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotatey(${y}deg) rotatez(${z}deg)`;
});
document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotatey(${(y -= 20)}deg) rotatez(${z}deg)`;
});
document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotatey(${(y += 20)}deg) rotatez(${z}deg)`;
});
document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotatey(${y}deg) rotatez(${(z -= 20)}deg)`;
});
document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotatey(${y}deg) rotatez(${(z += 20)}deg)`;
});

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});
document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});

// End of 3D cube

// End of section-1

// Section 3
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2) {
    section3Content.classList.add("change");
  }
});
// End of Section 3
