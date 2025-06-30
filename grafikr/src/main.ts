// Imports
import './tailwind.css';
import Splide from "@splidejs/splide";


// Variabler
const hamburger = document.querySelector('.hamburger-btn') as HTMLButtonElement | null;
const navMenu = document.querySelector('.navmenu') as HTMLElement | null;

// Splide configuration
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "4rem",
      pagination : true,
      breakpoints: {
        768: {
          perPage: 1,
        },
        1024: {
          perPage: 2,
        },
      },
    }).mount();
  });


  // Hamburgermenu
hamburger?.addEventListener('click', () => {
  hamburger?.classList.toggle('active');
  navMenu?.classList.toggle('active');
});

document.querySelectorAll('.navlink').forEach((n) => {
  (n as HTMLElement).addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
  });
});

// Sticky Header animation
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.remove('bg-grafikGrey');
      header.classList.add('bg-white/70', 'backdrop-blur-md');
    } else {
      header.classList.remove('bg-white/70', 'backdrop-blur-md');
      header.classList.add('bg-grafikGrey');
    }
  });
});

// Hover effekt kollegaer
document.addEventListener("DOMContentLoaded", function () {
  const imageArray: {[key: string]: string} = {
    "Kiranan": "/img/kiranan.png",
    "Erik": "/img/Erik.png",
    "Anders": "/img/Erik.png",
    "Lasse": "/img/Erik.png",
    "Pernille": "/img/Erik.png",
    "Magnus": "/img/Erik.png",
    "Rasmus": "/img/Erik.png",
    "Christian": "/img/Erik.png",
    "Tobias": "/img/Erik.png",
    "Tor": "/img/Erik.png",
    "Thomas": "/img/Erik.png"
  };

  const names = document.querySelectorAll<HTMLElement>('[data-name]');
  const hoverImage = document.getElementById('hoverImage') as HTMLImageElement;

  names.forEach(nameEl => {
    const name = nameEl.dataset.name!;
    nameEl.addEventListener('mouseenter', () => {
      const imgSrc = imageArray[name];
      if (!imgSrc) return;

      hoverImage.src = imgSrc;
      hoverImage.classList.remove('hidden');

      requestAnimationFrame(()=>{
        hoverImage.classList.add('opacity-100');
      });

      const rect = nameEl.getBoundingClientRect();
      hoverImage.style.top = `${rect.top + window.scrollY - 30}px`;
      hoverImage.style.left = `${rect.left + rect.width / 2 - 74}px`; 
    });

    nameEl.addEventListener('mouseleave', () => {
      hoverImage.classList.remove('opacity-100');

      setTimeout(() => {
        hoverImage.classList.add('hidden')
      }, 300);
    });
  });
});

