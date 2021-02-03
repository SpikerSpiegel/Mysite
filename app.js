const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
};
navSlide();
burger.addEventListener('mouseover', hover);
burger.addEventListener('mouseleave', hoverOff);
function hover(event) {
  if (!event.target.classList.contains('toggle')) {
    line1.style.marginBottom = '0.4rem';
    line3.style.marginTop = '0.4rem';
  }
}
function hoverOff() {
  if (!event.target.classList.contains('toggle')) {
    line1.style.marginBottom = '0.3rem';
    line3.style.marginTop = '0rem';
  }
}
