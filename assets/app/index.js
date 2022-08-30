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
  Array.from(periodMonths).map((item)=>item.classList.toggle('period__transform'))
});


// AOS */ 

