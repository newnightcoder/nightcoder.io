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
    brand.style.opacity = "1";
  } else {
    brand.style.opacity = "0";
  }
});

gsap.to(".arrow", {
  // delay: 3.4,
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
    trigger: ".logo-container",
    start: "top 36%",
    end: "bottom top",
    scrub: true,
    // markers: true,
    id: "logo",
  },
});
tl.to(".logo-container", {
  scale: 50,
})
  .to(".scroll-down", {
    autoAlpha: 0,
    scale: 0,
  })
  .from("#title", {
    scrollTrigger: {
      trigger: "#title",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      // markers: true,
      id: "title",
    },
  })
  .from(".upper-title", {
    x: -1000,
  })
  .from(".lower-title", {
    x: 1000,
  })
  .from(".line", {
    x: -1500,
  })
  .from("#about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      // markers: true,
      id: "about",
    },
    x: -1500,
  })
  .from("#gif", {
    scrollTrigger: {
      trigger: "#gif",
      start: "top 80%",
      end: "bottom 80%",
      delay: 3,
      // markers: true,
      id: "gif",
    },
    scale: 0,
    // scrub: 3,
  })
  .from("#stack", {
    scrollTrigger: {
      trigger: "#stack",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      // markers: true,
      id: "stack",
    },
    x: -1500,
  })
  .from(".cta-download", {
    scrollTrigger: {
      trigger: ".cta-download",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
      // markers: true,
      id: "CTA",
    },
    scale: 0,
  });

PROJECTS.forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true,
      id: `project${i}`,
    },
    y: 300,
    opacity: 0,
  });
});

tl.from(".cta-contact", {
  scrollTrigger: {
    trigger: ".cta-contact",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    // markers: true,
    id: "CTA",
  },
  scale: 0,
  autoAlpha: 0,
})
  .from(".more-container", {
    scrollTrigger: {
      trigger: "#more",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
      // markers: true,
      id: "more",
    },
    scale: 0,
  })
  .from("#contact", {
    scrollTrigger: {
      trigger: "#more",
      start: "top 33%",
      end: "bottom top",
      scrub: true,
      // markers: true,
      id: "contactcontactcontact",
    },
    y: 800,
  });
