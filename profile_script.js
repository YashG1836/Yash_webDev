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
