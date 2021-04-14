const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector(".link-wrapper");
const flags = document.querySelector(".flags-container");

window.addEventListener("scroll", () => {
  window.scrollY >= window.innerHeight / 4
    ? ((navbar.style.background =
        "linear-gradient(to right, #3e3e42, #1e1e1e)"),
      (navbar.style.borderBottom = "1px solid lightgray"),
      (flags.style.opacity = "1"),
      (navbarLinks.style.transform = "translateY(0)"))
    : ((navbar.style.background = "transparent"),
      (navbar.style.borderBottom = "1px solid transparent"),
      (flags.style.opacity = "0"),
      (navbarLinks.style.transform = "translateY(1.75vh)"));
});
