document.addEventListener('DOMContentLoaded', () => {

  /*********************
  HOME PAGE HERO LOGIC
  *********************/

  const heroImage = document.getElementById("hero-image");
  const heroTitle = document.getElementById("hero-title");
  const heroDescription = document.getElementById("hero-description");

  if (heroImage && heroTitle && heroDescription) {

    let stage = 0;

    const stages = [
      {
        image: "assets/images/stage_0_building.png",
        title: "Foundations",
        text: "My background is rooted in structured thinking, design principles, and understanding constraints."
      },
      {
        image: "assets/images/stage_1_building.png",
        title: "Conversion",
        text: "I pursued a H. Dip in Software Development conversion course to build systems."
      },
      {
        image: "assets/images/stage_2_building.png",
        title: "Core Skills",
        text: "Learning the fundamentals and rebuilding from the ground up through hands-on development."
      },
      {
        image: "assets/images/stage_3_building.png",
        title: "Now Building in Code",
        text: "Applying structured thinking to software systems and real-world problems."
      }
    ];

    heroImage.addEventListener("click", () => {
      stage = (stage + 1) % stages.length;

      heroImage.style.opacity = 0;

      setTimeout(() => {
        heroImage.src = stages[stage].image;
        heroTitle.textContent = stages[stage].title;
        heroDescription.textContent = stages[stage].text;

        if (stage === 3) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }

        heroImage.style.opacity = 1;
      }, 300);
    });

  }

  /**************************
  SLIDESHOW FOR PROJECTS PAGE
  **************************/

  // Loop through each project media container
  const projectContainers = document.querySelectorAll('.project-media');

  projectContainers.forEach(container => {
    const slides = container.querySelectorAll('.slide');
    let currentIndex = 0;

    if (slides.length <= 1) return; // no slideshow if only one image

    const showNextSlide = () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length; // loop back
      slides[currentIndex].classList.add('active');
    };

    // Change slide every 5 seconds (5000ms)
    setInterval(showNextSlide, 5000);
  });

});

/*************************
NAVBAR SHADOW ON SCROLLING
*************************/

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});