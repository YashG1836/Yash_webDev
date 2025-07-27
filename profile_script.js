const backgrounds = [
  'url("profile_pics/bg_1.jpg")',
  'url("profile_pics/bg_3.jpg")',
  
];
let index = 0;

function changeBackground() {
  const hero = document.querySelector('.hero');
  hero.style.backgroundImage = backgrounds[index];
  index = (index + 1) % backgrounds.length;
}

setInterval(changeBackground, 4000); // every 4 seconds
changeBackground();

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  alert(`Thanks, ${name}! I'll get back to you soon.`);
}

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Show timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);



// Reveal contact box on scroll
function revealAnimatedBoxes() {
  const animatedBoxes = document.querySelectorAll('.animated-box');
  const triggerPoint = window.innerHeight * 0.9;

  animatedBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerPoint) {
      box.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealAnimatedBoxes);
window.addEventListener('load', revealAnimatedBoxes);


function revealTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const triggerBottom = window.innerHeight * 0.9;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealTimelineItems);
window.addEventListener('load', revealTimelineItems);

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  function handleScroll() {
    faders.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on page load
});
