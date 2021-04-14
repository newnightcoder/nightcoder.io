const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const flags = document.querySelector(".flags-container");

window.addEventListener("scroll", () => {
  window.scrollY >= window.innerHeight / 4
    ? ((navbar.style.backgroundColor = "#1e1e1e"),
      (navbar.style.borderBottom = "1px solid #3e3e42"),
      (flags.style.opacity = "1"))
    : ((navbar.style.backgroundColor = "transparent"),
      (navbar.style.borderBottom = "1px solid transparent"),
      (flags.style.opacity = "0"));
});
