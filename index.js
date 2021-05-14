////////////////////////////////////////////////////////////////////////////////
//  to get the path length for each svg letter:
// const logo = document.querySelectorAll("#logo path");
// console.log(logo);
// logo.forEach((log, i) => console.log(`${i + 1}: ${log.getTotalLength()}`));
/////////////////////////////////////////////////////////////////////////////////

const NAVBAR = document.querySelector("nav");
// const FLAGS = document.querySelector(".flags-container");
const NAVBARLINKS = document.querySelector(".link-wrapper");
const BRAND = document.querySelector(".brand");
const hamburger = document.querySelector(".fa-bars");
const PROJECTS = document.querySelectorAll(".project");
const fullpage = document.querySelector(".fullpage");

//////////////////////////////////////////////////////////////////////////////////
//                              NAVBAR
//////////////////////////////////////////////////////////////////////////////////

const navbarAnim = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight / 7) {
      (NAVBAR.style.background =
        "linear-gradient(to left, deeppink 0%, orange 100%)"),
        // (FLAGS.style.opacity = "1"),
        (NAVBARLINKS.style.transform = "translateY(0)"),
        (document.querySelector(".fa-bars").style.opacity = "1");
    } else {
      (NAVBAR.style.background = "transparent"),
        // (FLAGS.style.opacity = "0"),
        (NAVBARLINKS.style.transform = "translateY(1.75vh)"),
        (document.querySelector(".fa-bars").style.opacity = "0");
    }
    if (window.scrollY >= window.innerHeight / 1.16) {
      (BRAND.style.transform = "translateY(0)"), (BRAND.style.opacity = "1");
    } else {
      (BRAND.style.transform = "translateY(100%)"), (BRAND.style.opacity = "0");
    }
  });
};

const openHamburger = () => {
  hamburger.addEventListener("click", () => {
    document.querySelector(".hamburger__content").style.transform =
      "translateX(0)";
    document.querySelector(".hamburger__content").style.zIndex = "100";
    document.querySelector("*").style.overflow = "hidden";
  });
};

const closeHamburger = () => {
  document.querySelector(".fa-times").addEventListener("click", () => {
    console.log("hey hey");
    document.querySelector(".hamburger__content").style.transform =
      "translateX(100%)";
    document.querySelector("*").style.overflow = "scroll";
  });
};

const menuLinks = () => {
  document.querySelectorAll(".hamburger__content a").forEach((a) => {
    a.addEventListener("click", () => {
      document.querySelector(".hamburger__content").style.transform =
        "translateX(100%)";
      document.querySelector("*").style.overflow = "scroll";
    });
  });
};
//////////////////////////////////////////////////////////////////////////////////
//                            HERO ANIMATIONS
//////////////////////////////////////////////////////////////////////////////////

const heroAnim = () => {
  gsap
    .timeline()
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
};

////////////////////////////////////////////////////////////////////////////////
//                          SCROLLTRIGGER TIMELINE
////////////////////////////////////////////////////////////////////////////////

// gsap.registerPlugin(ScrollTrigger);

// const scrollEffect = () => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#intro",
//       start: "top 90%",
//       end: "bottom bottom",
//       scrub: true,
//     },
//   });
//   tl.to("#logo", {
//     scrollTrigger: {
//       trigger: "#intro",
//       start: "top bottom",
//       scrub: true,
//     },
//     scale: 30,
//     autoAlpha: 0,
//   })
//     .to(".header-line", {
//       scrollTrigger: {
//         trigger: "#intro",
//         start: "top bottom",
//         end: "top 80%",
//         scrub: true,
//       },
//       scale: 0,
//     })
//     .to(".p-stagger", {
//       scrollTrigger: {
//         trigger: "#intro",
//         start: "top 95%",
//         end: "top 90%",
//         scrub: true,
//       },
//       scale: 0,
//       stagger: 0.2,
//     })
//     .to(".arrow", {
//       scrollTrigger: {
//         trigger: "#intro",
//         start: "top bottom",
//         end: "top 95%",
//         scrub: true,
//         id: "intro",
//         // markers: true,
//       },
//       scale: 0,
//     })
//     .from(".upper-title", {
//       x: -1 * window.innerWidth,
//     })
//     .from(".lower-title", {
//       x: window.innerWidth,
//     })
//     .from(".line", {
//       x: -1 * window.innerWidth,
//     })
//     .from(".gif", {
//       scrollTrigger: {
//         trigger: ".gif",
//         start: "top 90%",
//         end: "bottom 80%",
//         id: "gif",
//         // markers: true,
//       },
//       scale: 0,
//     })
//     .from("#about", {
//       opacity: 0,
//     })
//     .from("#stack", {
//       opacity: 0,
//     })

//     .from(".cta-btn-download", {
//       scrollTrigger: {
//         trigger: ".cta-download",
//         start: "top bottom",
//         end: "bottom 70%",
//         scrub: true,
//       },
//       autoAlpha: 0,
//     });

//   PROJECTS.forEach((project, i) => {
//     tl.from(project, {
//       scrollTrigger: {
//         trigger: project,
//         start: "top 85%",
//         end: "top 80%",
//         scrub: true,
//       },
//       x: 100,
//       opacity: 0,
//     });
//   });
//   tl.from(".cta-btn-contact", {
//     scrollTrigger: {
//       trigger: ".cta-contact",
//       start: "top 80%",
//       end: "bottom 70%",
//       scrub: true,
//     },
//     autoAlpha: 0,
//   })
//     .from(".more-container", {
//       scrollTrigger: {
//         trigger: "#more",
//         start: "top 80%",
//         end: "bottom 70%",
//         scrub: true,
//       },
//       scale: 0,
//     })
//     .from("#contact", {
//       scrollTrigger: {
//         trigger: "#more",
//         start: "top 33%",
//         end: "bottom top",
//         scrub: true,
//       },
//       y: 200,
//     });
// };

//////////////////////////////////////////////////////////////////////////////////
//                                ABOUT TABS
//////////////////////////////////////////////////////////////////////////////////

const TABS = document.querySelectorAll("[data-target]");
const TABCONTENTS = document.querySelectorAll(".tab__content");
let line = document.querySelector(".tabs__line");

const tabEffect = () => {
  TABS.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      TABCONTENTS.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      TABS.forEach((tab) => {
        tab.classList.remove("active");
      });
      let tabTarget = document.querySelector(tab.dataset.target);
      tabTarget.classList.add("active");
      tab.classList.add("active");
      let index = i;
      switch (index) {
        case 0:
          line.style.left = "0";
          break;
        case 1:
          line.style.left = "calc(100% / 3)";
          break;
        case 2:
          line.style.left = "calc(100% / 1.5)";
          break;
      }
    });
  });
};

////////////////////////////////////////////////////////////////////////////////
//                            EXPAND ANIMATION
////////////////////////////////////////////////////////////////////////////////

const expandedProject = document.querySelector(".fullpage");
const expandButtons = document.querySelectorAll(".fa-expand-alt");

const calculatePosition = (element) => {
  const rect = element.getBoundingClientRect();

  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  const scrollLeft =
    window.scrollX ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0;

  const clientTop =
    document.documentElement.clientTop || document.body.clientTop || 0;

  const clientLeft =
    document.documentElement.clientLeft || document.body.clientLeft || 0;

  const position = {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  };
  return position;
};

const animateTransition = (project, fullpage) => {
  let clone = project.cloneNode(true);
  clone.classList.add("clone");
  project.appendChild(clone);

  let from = calculatePosition(project);
  let to = calculatePosition(fullpage);
  console.log("to", to);

  const finish = () => {
    // gsap.set(clone, {
    //   opacity: 0,
    // });
    project.removeChild(clone);
  };

  const cloneEndPosition = {
    x: from.left - to.left,
    y: to.top - from.top,
    height: "100vh",
    width: "100vw",
    margin: 0,
    onComplete: finish,
    duration: 1,
    autoRound: false,
    ease: Power3.easeOut,
  };

  // console.log("cloneEnd position:", cloneEndPosition.x, cloneEndPosition.y);

  gsap.timeline().to(clone, cloneEndPosition).set(fullpage, {
    visibility: "visible",
  });

  // setTimeout(() => {
  document.querySelector("html").style.overflow = "hidden";
  // document.body.style.overflow = "hidden";

  //   }, 100);
};

const closeFullpage = () => {
  fullpage.addEventListener("click", () => {
    console.log("yes fullpage");
    fullpage.style.visibility = "hidden";
    fullpage.innerHTML = "";
    document.querySelector("html").style.overflowY = "scroll";
  });
};

////////////////////////////////////////////////////////////////////////////////
//                              EXPAND PAGE
////////////////////////////////////////////////////////////////////////////////
// let ProjectPage.img;

// let ProjectPage = {
//   img: "",
//   title: "",
//   pitch: "",
//   technologies: "",
// };

const carousel = () => {
  // document.querySelector(".fullpage__img").src = imgP1[count];

  document
    .querySelector(".fa-angle-double-right")
    .addEventListener("click", () => {
      let imgP1 = [
        "img/p1-1.jpg",
        "img/p1-2.jpg",
        "img/p1-3.jpg",
        "img/p1-4.jpg",
      ];
      let imgP2 = [
        "img/p2-1.jpg",
        "img/p2-2.jpg",
        "img/p2-3.jpg",
        "img/p2-4.jpg",
      ];
      let imgP3 = [
        "img/p3-1.jpg",
        "img/p3-2.jpg",
        "img/p3-3.jpg",
        "img/p3-4.jpg",
      ];
      let imgP4 = [
        "img/p4-1.jpg",
        "img/p4-2.jpg",
        "img/p4-3.jpg",
        "img/p4-4.jpg",
      ];
      let count = 0;
      let slides = 4;
      if (count < 3) {
        count++;
      } else count = 0;
      console.log(count);
    });
};

const displayContent = (project) => {
  fullpage.style.visibility = "visible";
  document.querySelector("html").style.overflow = "hidden";
  const title = project.children[2].children[0].textContent;
  const pitch = project.children[2].children[1].textContent;
  const technologies = project.children[2].children[2].textContent;
  ProjectPage = {
    img: "",
    title,
    pitch,
    technologies,
  };

  let className = project.classList;
  // const nextImgBtn = document.querySelector(".fa-angle-double-right");

  switch ((className, true)) {
    case className.contains("project-1"):
      ProjectPage.img = "img/p1-1.jpg";
      break;
    case className.contains("project-2"):
      ProjectPage.img = "img/fullpage-project2.jpg";
      break;
    case className.contains("project-3"):
      ProjectPage.img = "img/fullpage-project3.jpg";
      break;
    case className.contains("project-4"):
      ProjectPage.img = "img/fullpage-project4.jpg";
      break;
  }
  //   <img
  //   src="${ProjectPage.img}"
  //   alt=""
  //   class="fullpage__img"
  //   height="300px"
  //   width="500px"
  // />
  const fullpageContainer = `
  <div class="fullpage__container">
    <div class="img__container"><img src="${ProjectPage.img}" class="fullpage__img fullpage__img--active")/></div>
    <div class="player__wrapper">
      <i class="fas fa-angle-double-left" ></i>
      <i class="fas fa-angle-double-right"></i>
    </div>

    <div class="fullpage__pitch--container">
      <h3 class="fullpage__title">${ProjectPage.title}</h3>
      <p class="fullpage__pitch">${ProjectPage.pitch}</p>
      <p class="fullpage__stack">${ProjectPage.technologies}</p>
      <div class="fullpage__links">
        <a href="#" class="fullpage__github"
          ><i class="fab fa-github-alt"></i
        ></a>
        <a href="#" class="fullpage__live"
          ><i class="fas fa-external-link-alt"></i
        ></a>
      </div>
    </div>
  </div>
  <script>carousel()</script>
  `;
  expandedProject.insertAdjacentHTML("afterbegin", fullpageContainer);
};

//////////////////////////////////////////////////////////////////////////
//                           THE STARZ
//////////////////////////////////////////////////////////////////////////

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const canvasWidth = 1000;
const canvasHeight = 150;
const focalLength = canvasWidth;
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;

function Star() {
  (this.x = Math.random() * canvasWidth),
    (this.y = Math.random() * canvasHeight),
    (this.z = Math.random() * canvasWidth),
    (this.size = 0.75),
    (this.speed = 2),
    (this.display = function () {
      let x, y, r;
      x = (this.x - centerX) * (focalLength / this.z);
      x += centerX;
      y = (this.y - centerY) * (focalLength / this.z);
      y += centerY;
      r = this.size * (focalLength / this.z);

      context.beginPath();
      context.arc(x, y, r, 0, 2 * Math.PI);
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
  context.fillStyle = "rgb(0 0 0)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].fly();
  }
}

//PAUSE
let paused = true;

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

const init = () => {
  removeLoader();
  navbarAnim();
  openHamburger();
  menuLinks();
  closeHamburger();
  heroAnim();
  tabEffect();
  // scrollEffect();
  PROJECTS.forEach((project) => {
    project.children[0].addEventListener("click", () => {
      // animateTransition(project, fullpage);
      displayContent(project);
      // closeFullpage();
    });
  });
  loop();
};

window.addEventListener("load", (e) => {
  init();
});
const removeLoader = () => {
  document.querySelector(".loader__container").style.display = "none";
};
