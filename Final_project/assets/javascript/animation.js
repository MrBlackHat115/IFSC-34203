document.addEventListener("DOMContentLoaded", () => {
  const toys = document.querySelectorAll(".toy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% visible

  toys.forEach(toy => observer.observe(toy));

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});

/* Filter functionality for toys */
const filterButtons = document.querySelectorAll('.filter-btn');
const toys = document.querySelectorAll('.toy');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    toys.forEach(toy => {
      if (filter === 'all' || toy.getAttribute('data-category') === filter) {
        toy.style.display = 'flex'; // or 'block' depending on your layout
      } else {
        toy.style.display = 'none';
      }
    });
  });
});