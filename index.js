const loading = () => {
  setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
  }, 0);
};

document.addEventListener("DOMContentLoaded", (e) => {
  loading();
  init();
});

//to get the path length for each svg letter
const logo = document.querySelectorAll("#logo path");
console.log(logo);
logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));

const navbar = document.querySelector("nav");
const navbarLinks = document.querySelector(".link-wrapper");
const flags = document.querySelector(".flags-container");
const brand = document.querySelector(".brand-name");
const PROJECTS = document.querySelectorAll(".project");

const init = async () => {
  await loading();
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight / 7) {
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
      delay: 0.5,
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
    },
  });

  tl.to(".logo-container", {
    scrollTrigger: {
      trigger: "#intro",
      start: "top bottom",
      scrub: true,
    },
    // scale: 17,
    autoAlpha: 0,
  })
    .to(".header-line", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top bottom",
        end: "top 80%",
        scrub: true,
      },
      scale: 0,
    })
    .to(".p-stagger", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top 95%",
        end: "top 90%",
        scrub: true,
      },
      scale: 0,
      stagger: 0.2,
    })
    .to(".arrow", {
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
    x: -1 * window.innerWidth,
  })
    .from(".lower-title", {
      x: window.innerWidth,
    })
    .from(".line", {
      x: -1 * window.innerWidth,
    })
    // .from(".gif", {
    //   scrollTrigger: {
    //     trigger: ".gif",
    //     start: "top 90%",
    //     end: "bottom 80%",
    //     id: "gif",
    //     // markers: true,
    //   },
    //   scale: 0,
    // })
    .from(".about", {
      x: -1 * window.innerWidth,
    })
    .from(".stack", {
      x: -1 * window.innerWidth,
    })

    .from(".cta-download", {
      scrollTrigger: {
        trigger: ".cta-download",
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      },
      autoAlpha: 0,
    });

  // tl.to(
  PROJECTS.forEach((project, i) => {
    tl.from(project, {
      scrollTrigger: {
        trigger: project,
        start: "top 85%",
        end: "top 80%",
        scrub: true,
      },
      x: 100,
      opacity: 0,
    });
  });
  // );
  tl.from(".cta-contact", {
    scrollTrigger: {
      trigger: ".cta-contact",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
    autoAlpha: 0,
  })
    .from(".more-container", {
      scrollTrigger: {
        trigger: "#more",
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
      scale: 0,
    })
    .from("#contact", {
      scrollTrigger: {
        trigger: "#more",
        start: "top 33%",
        end: "bottom top",
        scrub: true,
      },
      y: 200,
    });

  // ////////////////////////////////////////////////////////////////////////////////
  //   CARDS FLIP
  // ////////////////////////////////////////////////////////////////////////////////

  const cards = document.querySelectorAll(".project__card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // ////////////////////////////////////////////////////////////////////////////////
  //   EXPAND ANIMATION
  // ////////////////////////////////////////////////////////////////////////////////
  const fullpage = document.querySelector(".fullpage");
  const expandedProject = document.querySelector(".expand-container");
  const projectBack = document.querySelectorAll(".project__back");
  const expandButtons = document.querySelectorAll(".fa-expand-alt");

  const animateTransition = (project) => {
    let clone = project.cloneNode();
    clone.classList.add("clone");
    document.body.appendChild(clone);
    console.log(clone);

    const finish = () => {
      gsap.set(clone, {
        opacity: 0,
      });
      document.body.removeChild(clone);
    };
    gsap.to(clone, {
      width: "100vw",
      height: "100vh",
      onComplete: finish,
    });
    gsap.set(fullpage, {
      visibility: "visible",
    });

    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 100);
  };

  fullpage.addEventListener("click", () => {
    fullpage.style.visibility = "hidden";
    document.body.style.overflowY = "scroll";
  });

  const displayContent = (project) => {
    if (project.classList.contains("project-1")) {
      expandedProject.innerHTML = `project 1`;
    }
    if (project.classList.contains("project-2")) {
      expandedProject.innerHTML = `project 2`;
    }
    if (project.classList.contains("project-3")) {
      expandedProject.innerHTML = `project 3`;
    }
    if (project.classList.contains("project-4")) {
      expandedProject.innerHTML = `project 4`;
    }
    if (project.classList.contains("project-5")) {
      expandedProject.innerHTML = `project 5`;
    }
  };

  PROJECTS.forEach((project) => {
    project.children[0].children[1].children[0].children[0].addEventListener(
      "click",
      () => {
        project.children[0].classList.remove("flipped");
        animateTransition(project);
        displayContent(project);
      }
    );
  });
  //------------------------------------------------------------------------------
  //                      THE STARZ
  //------------------------------------------------------------------------------
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const canvasWidth = 1250;
  const canvasHeight = 150;
  const focalLength = canvasWidth;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  function Star() {
    (this.x = Math.random() * canvasWidth),
      (this.y = Math.random() * canvasHeight),
      (this.z = Math.random() * canvasWidth),
      (this.size = 0.75),
      (this.speed = 3),
      (this.display = function () {
        let x, y, r;
        x = (this.x - centerX) * (focalLength / this.z);
        x += centerX;
        y = (this.y - centerY) * (focalLength / this.z);
        y += centerY;
        r = this.size * (focalLength / this.z);

        context.beginPath();
        // context.arc(x, y, r, 0, 2 * Math.PI);
        context.rect(x, y, 2, 2);
        context.fillStyle = "white";
        context.fill();
      }),
      (this.fly = function () {
        this.z = this.z - this.speed;
        if (this.z <= 0) {
          this.z = canvasWidth;
        }
      });
  }

  const stars = new Array(1000);
  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }

  //DRAWING THE STARZ
  function draw() {
    context.fillStyle = "rgb(30 30 30)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    for (let i = 0; i < stars.length; i++) {
      stars[i].display();
      stars[i].fly();
    }
  }

  //PAUSE
  let paused = false;

  function pauseKey(event) {
    if (event.keyCode === 32) {
      paused = !paused;
      paused === true ? draw() : loop();
    }
  }
  function pauseClick() {
    paused = !paused;
    paused === true ? draw() : loop();
  }
  canvas.addEventListener("click", pauseClick);
  window.addEventListener("keydown", pauseKey);

  //LOOP
  function loop() {
    if (paused === true) return;
    else {
      requestAnimationFrame(loop);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      draw();
    }
  }
  // loop();
};
