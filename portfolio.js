// Highlight active section in navbar
const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
