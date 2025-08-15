// Inicialização do AOS
AOS.init();

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const cards = document.querySelectorAll('.carta');

cards.forEach(card => {
  const img = card.querySelector('.img-pizza');
  const srcDefault = img.getAttribute('src');
  const srcHover = srcDefault.replace('.png', '_color.png'); 

  card.addEventListener('mouseenter', () => {
    img.setAttribute('src', srcHover);
  });

  card.addEventListener('mouseleave', () => {
    img.setAttribute('src', srcDefault);
  });
});

const slidders = document.querySelectorAll('.slidder');

slidders.forEach(card => {
  const img = card.querySelector('.img-slidder');
  const srcDefault = img.getAttribute('src');
  const srcHover = srcDefault.replace('_pb.svg', '.svg'); 

  card.addEventListener('mouseenter', () => {
    img.setAttribute('src', srcHover);
  });

  card.addEventListener('mouseleave', () => {
    img.setAttribute('src', srcDefault);
  });
});