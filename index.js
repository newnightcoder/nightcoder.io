const loading = () => {
  setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
  }, 0);
};

document.addEventListener("DOMContentLoaded", (e) => {
  loading();

  init();
});

const init = async () => {
  await loading();
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

  // ////////////////////////////////////////////////////////////////////////////////
  //   HERO ANIMATIONS
  // ////////////////////////////////////////////////////////////////////////////////

  gsap
    .timeline()

    .to(".p-stagger", {
      duration: 1,
      delay: 2,
      stagger: 0.2,
      opacity: 1,
    })
    .to(".header-line", {
      opacity: 1,
      delay: -0.5,
    })
    .to("#logo", {
      fill: "white",
      delay: -0.5,
    })
    .to(".arrow", {
      opacity: 1,
    })
    .to(".arrow", {
      duration: 0.5,
      y: 60,
      repeat: -1,
      yoyo: true,
      ease: "power4(3)",
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
    scale: 40,
    autoAlpha: 0,
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
      x: -1300,
    })
    .from(".stack", {
      x: -1300,
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
      autoAlpha: 0,
    });
  const PROJECTS = document.querySelectorAll(".project");
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
    autoAlpha: 0,
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

  const animateTransition = (project) => {
    // console.log(project);
    let clone = project.cloneNode();
    clone.classList.add("clone");
    project.appendChild(clone);

    const finish = () => {
      gsap.set(clone, {
        opacity: 0,
      });
    };
    gsap.to(clone, {
      width: "100vw",
      height: "100vh",
      onComplete: finish,
    });

    setTimeout(() => {
      project.removeChild(clone);
      body.style.overflow = "hidden";
    }, 1000);
  };

  PROJECTS.forEach((project) => {
    project.addEventListener("click", () => {
      animateTransition(project);
    });
  });

  const fullpage = document.querySelector(".project-enlarged");
  fullpage.addEventListener("click", () => {
    fullpage.style.display = "none";
  });
};

//to get the path length for each svg letter
const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector(".link-wrapper");
const flags = document.querySelector(".flags-container");
const brand = document.querySelector(".brand-name");

// if (document.querySelector(".project-enlarged").style.display !== "none") {
//   document.body.style.overflow = "hidden";
// } else null;
