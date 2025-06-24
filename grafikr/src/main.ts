import './tailwind.css'

const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".navmenu");
const header = document.querySelector("header")

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    hamburger?.classList.remove("active")
    navMenu?.classList.remove("active")
}));

window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header?.classList.remove("bg-grafikGrey")
        header.classList.add("bg-white/70", "backdrop-blur-md",);
    } else {
      header.classList.remove("bg-white/70", "backdrop-blur-md");
      header.classList.add("bg-grafikGrey");
    }
})

