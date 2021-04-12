const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const flags = document.querySelector(".flags-container");
window.addEventListener("scroll", () => {
  window.scrollY >= window.innerHeight / 3
    ? ((navbar.style.backgroundColor = "#0037ad"),
      (flags.style.opacity = ".75"))
    : ((navbar.style.backgroundColor = "transparent"),
      (flags.style.opacity = "0"));
});
