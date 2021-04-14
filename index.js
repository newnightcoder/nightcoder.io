const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector(".link-wrapper");
const flags = document.querySelector(".flags-container");
const brand = document.querySelector(".brand-name");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 4) {
    (navbar.style.background =
      "linear-gradient(to left, deeppink 0%, orange 100%)"),
      (flags.style.opacity = "1"),
      (navbarLinks.style.transform = "translateY(0)");
  } else {
    (navbar.style.background = "transparent"),
      (flags.style.opacity = "0"),
      (navbarLinks.style.transform = "translateY(1.75vh)");
  }
  if (window.scrollY >= window.innerHeight / 0.9) {
    brand.style.opacity = "1";
  } else {
    brand.style.opacity = "0";
  }
});
