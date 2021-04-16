//to get the path length for each svg letter
const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector(".link-wrapper");
const flags = document.querySelector(".flags-container");
const brand = document.querySelector(".brand-name");
const PROJECTS = document.querySelectorAll(".project");

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
    (brand.style.transform = "translateY(0)"), (brand.style.opacity = "1");
  } else {
    (brand.style.transform = "translateY(100%)"), (brand.style.opacity = "0");
  }
});

gsap.to(".arrow", {
  duration: 0.6,
  visibility: "visible",
  y: 80,
  repeat: -1,
  yoyo: true,
  ease: "power1(3)",
});
// ////////////////////////////////////////////////////////////////////////////////
//   SCROLLTRIGGER TIMELINE
// ////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro",
    start: "top 90%",
    end: "bottom bottom",
    scrub: true,
    id: "intro",
    // markers: true,
  },
});

gsap.to(".logo-container", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top bottom",
    // end: "bottom bottom",
    scrub: true,
    id: "intro",
    // markers: true,
  },
  scale: 60,
});

gsap.to(".arrow", {
  scrollTrigger: {
    trigger: "#intro",
    start: "top bottom",
    end: "top 95%",
    scrub: true,
    id: "intro",
    // markers: true,
  },
  scale: 0,
});

tl.from(".upper-title", {
  x: -800,
})
  .from(".lower-title", {
    x: 800,
  })

  .from(".line", {
    x: -1500,
    // scrub: 4,
  })
  .from(".gif", {
    scrollTrigger: {
      trigger: ".gif",
      start: "top 90%",
      end: "bottom 80%",
      id: "gif",
      // markers: true,
    },
    scale: 0,
  })
  .from(".about", {
    x: -1000,
  })
  .from(".stack", {
    x: -1000,
  })

  .from(".cta-download", {
    scrollTrigger: {
      trigger: ".cta-download",
      start: "top bottom",
      end: "bottom 70%",
      scrub: true,
      id: "CTA",
      // markers: true,
    },
    scale: 0,
  });
PROJECTS.forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top 90%",
      end: "bottom 90%",
      scrub: true,
      id: `project${i}`,
      // markers: true,
    },
    x: 1300,
    opacity: 0,
  });
});

tl.from(".cta-contact", {
  scrollTrigger: {
    trigger: ".cta-contact",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    id: "CTA",
    // markers: true,
  },
  scale: 0,
})
  .from(".more-container", {
    scrollTrigger: {
      trigger: "#more",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
      id: "more",
      // markers: true,
    },
    scale: 0,
  })
  .from("#contact", {
    scrollTrigger: {
      trigger: "#more",
      start: "top 33%",
      end: "bottom top",
      scrub: true,
      id: "contactcontactcontact",
      // markers: true,
    },
    y: 800,
  });
