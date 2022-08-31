// for toogleDropDown on mobile nav

const listItem = document.getElementById("has-child");
const listItemSecond = document.getElementById("has-child2");
const dropdownListFirst = document.querySelector(".dropdown-ul1");
const dropdownListSecond = document.querySelector(".dropdown-ul2");

const mobileBarBtn = document.querySelector(".mobile-bar");
const mobileMenu = document.querySelector(".mobile__menu");
const closeMenuBtn = document.querySelector(".mobile__menu-closeBtn");

const periodToggle = document.querySelector(".period-toggle");
const priceChilds = document.querySelectorAll(".price__child");
const periodMonths = document.querySelectorAll(".period__month");

const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider__line");
const carouselItem = document.querySelectorAll(".item__box");

const prevBtn = document.querySelector(".nav__prev");
const nextBtn = document.querySelector(".nav__next");
/* dropdown */
listItem.addEventListener("click", (e) => {
  if (e.target.id === "has-child2" || e.target.localName == "a") return;
  dropdownListFirst.classList.toggle("showDropdownList");
});

listItemSecond.addEventListener("click", () => {
  dropdownListSecond.classList.toggle("showDropdownList");
});

/* mobile menu open and close */
const openMobileMenu = () => {
  mobileMenu.classList.add("mobile__menu-show");
};

const closeMobilMenu = () => {
  mobileMenu.classList.remove("mobile__menu-show");
};

mobileBarBtn.addEventListener("click", openMobileMenu);
closeMenuBtn.addEventListener("click", closeMobilMenu);

document.body.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("mobile__menu") ||
    e.target.localName === "li" ||
    e.target.localName === "a" ||
    e.target.classList.contains("mobile-bar") ||
    e.target.classList.contains("fa-solid")
  ) {
  } else {
    closeMenuBtn.addEventListener("click", closeMobilMenu);
    closeMobilMenu();
  }
});

/* period toogle */

periodToggle.addEventListener("click", (e) => {
  e.preventDefault();
  periodToggle.classList.toggle("period-toggle-active");
  Array.from(priceChilds).map((item) =>
    item.classList.toggle("price__transform")
  );
  Array.from(periodMonths).map((item) =>
    item.classList.toggle("period__transform")
  );
});

/* carousel js */ 

let count = 0;
let width;

function init() {
  console.log("resize");
  width = slider.offsetWidth;
  sliderLine.style.width = width * carouselItem.length + "px";
  Array.from(carouselItem).forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider()
  console.log(width);
}

window.addEventListener("resize", init);
init();

nextBtn.addEventListener("click", () => {
  count++;
  if (count > carouselItem.length - 1) {
    count = 0;
  }
  rollSlider();
});

prevBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = carouselItem.length-1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
