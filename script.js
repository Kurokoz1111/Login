// const navAS = document.querySelector(".lower-nav");
// const navASD = document.querySelector(".dropdown");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 500) {
//     navAS.classList.add("nav-scrolled");
//     navASD.classList.add("nav-scrolled");
//   } else {
//     navAS.classList.remove("nav-scrolled");
//   }
// });

// loading

const toTop = document.querySelector(".scrolltop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    toTop.classList.add("scroll");
  } else {
    toTop.classList.remove("scroll");
  }
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.opacity = 1;
  sidebar.style.visibility = "visible";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.opacity = 0;
  sidebar.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.querySelector(".slideshow-3d");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Initialize slides
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next", "far-prev", "far-next");

      if (index === currentIndex) {
        slide.classList.add("active");
      } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
        slide.classList.add("prev");
      } else if (index === (currentIndex + 1) % totalSlides) {
        slide.classList.add("next");
      } else if (index === (currentIndex - 2 + totalSlides) % totalSlides) {
        slide.classList.add("far-prev");
      } else if (index === (currentIndex + 2) % totalSlides) {
        slide.classList.add("far-next");
      }
    });
  }

  // Next slide
  function goToNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
  }

  // Previous slide
  function goToPrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
  }

  // Button event listeners
  nextButton.addEventListener("click", goToNext);
  prevButton.addEventListener("click", goToPrev);

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "ArrowLeft") {
      goToPrev();
    }
  });

  // Initialize
  updateSlides();

  // Uncomment for auto-rotation
  //     /*
  let autoRotate = setInterval(goToNext, 5000);
  slideshow.addEventListener("mouseenter", () => clearInterval(autoRotate));
  slideshow.addEventListener("mouseleave", () => {
    autoRotate = setInterval(goToNext, 3000);
  });
});
