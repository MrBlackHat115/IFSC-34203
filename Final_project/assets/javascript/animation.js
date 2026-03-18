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
