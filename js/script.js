const heroImage = document.getElementById("hero-image");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");

let stage = 0;

const stages = [
  {
    image: "assets/stage-0-building.png",
    title: "Foundations",
    text: "My background is rooted in structured thinking, design principles, and understanding constraints."
  },
  {
    image: "assets/stage-1-crumble.png",
    title: "Conversion",
    text: "I pursued a H. Dip in Software Development conversion course to build systems."
  },
  {
    image: "assets/stage-2-structure.png",
    title: "Core Skills",
    text: "Learning the fundamentals and rebuilding from the ground up through hands-on development."
  },
  {
    image: "assets/stage-3-code.png",
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


// Slideshow for Projects Page
document.addEventListener('DOMContentLoaded', () => {

  // Loop through each project media container
  const projectContainers = document.querySelectorAll('.project-media');

  projectContainers.forEach(container => {
    const slides = container.querySelectorAll('.slide');
    let currentIndex = 0;

    if (slides.length <= 1) return; // no slideshow if only one image

    // Function to show the next slide
    const showNextSlide = () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length; // loop back
      slides[currentIndex].classList.add('active');
    };

    // Change slide every 5 seconds (5000ms)
    setInterval(showNextSlide, 5000);
  });

});
