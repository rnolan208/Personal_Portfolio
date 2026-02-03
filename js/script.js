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
    title: "Transition",
    text: "I pursued a Higher Diploma in Software Development conversion course to fully commit to building systems."
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
