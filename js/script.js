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
    const caption = container.querySelector('.slide-caption');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    let currentIndex = 0;

    if (slides.length <= 1) return; // no slideshow if only one image

    const updateSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');

      // caption text from alt attribute
      caption.textContent = slides[index].alt || '';
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    };

    const startAutoSlide = () => {
      intervalId = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    // Buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoSlide);
    container.addEventListener('mouseleave', startAutoSlide);

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


/****************
NAVBAR FOR MOBILE
****************/
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


/**********************/
/* BACK TO TOP BUTTON */
const footer = document.querySelector('.footer');
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');

  } else {
    backToTopBtn.classList.remove('visible');

  }
});

/* Above footer */
const footerObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      backToTopBtn.classList.add('above-footer');
    } else {
      backToTopBtn.classList.remove('above-footer');
    }
  },
  {
    threshold: 0.1
  }
);

if (footer) {
  footerObserver.observe(footer);
}


/* Scroll to top */
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* Modal Control for Github README on Projects Page */
const modal = document.getElementById('readme-modal');
const modalContent = document.getElementById('readme-content');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

document.querySelectorAll('.readme-link').forEach(link => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();

    const repo = link.dataset.repo;
    const url = `https://raw.githubusercontent.com/${repo}/master/README.md`;

    modal.classList.remove('hidden');
    modalContent.innerHTML = '<p>Loading README...</p>';

    try {
      const res = await fetch(url);
      const markdown = await res.text();
      modalContent.innerHTML = marked.parse(markdown);
    } catch (err) {
      modalContent.innerHTML = '<p>Unable to load README.</p>';
    }
  });
});

[closeBtn, overlay].forEach(el =>
  el.addEventListener('click', () => {
    modal.classList.add('hidden');
  })
);

})