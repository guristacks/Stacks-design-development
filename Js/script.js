// GSAP Timeline & Scroll Trigger
let tl = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);

// const onPress = (el, handler) => {
//   if (!el) return;
//   el.addEventListener("click", handler);
//   el.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       handler(e);
//     }
//   });
// };

// const debounce = (fn, wait = 150) => {
//   let t;
//   return (...args) => {
//     clearTimeout(t);
//     t = setTimeout(() => fn(...args), wait);
//   };
// };

// const lenisAnimation = () => {
//   let lenis;
//   let rafFn;

//   const initLenis = () => {
//     if (window.innerWidth > 1024 && !lenis) {
//       lenis = new Lenis({ duration: 2 });

//       lenis.on("scroll", ScrollTrigger.update);

//       rafFn = (time) => {
//         lenis.raf(time * 1000);
//       };

//       gsap.ticker.add(rafFn);
//       gsap.ticker.lagSmoothing(0);
//     }
//   };

//   const destroyLenis = () => {
//     if (lenis) {
//       gsap.ticker.remove(rafFn);
//       lenis.destroy();
//       lenis = null;
//     }
//   };

//   initLenis();

//   window.addEventListener(
//     "resize",
//     debounce(() => {
//       if (window.innerWidth > 1024) {
//         initLenis();
//       } else {
//         destroyLenis();
//       }
//     }, 200),
//     { passive: true },
//   );
// };

const mobileNavBarAnimation = () => {
  const ham = document.querySelector(".ham");
  const closeBtn = document.querySelector(".close");
  const nav = document.querySelector(".nav-links");

  function isMobile() {
    return window.innerWidth <= 1023;
  }

  function openNav() {
    if (!isMobile()) return;

    let tl1 = gsap.timeline();

    tl1.to(nav, {
      height: "450px",
      paddingBottom: "50px",
      duration: 0.1,
      ease: "none",
    });

    tl1.fromTo(
      ".look",
      {
        x: -20,
      },
      {
        delay: 0.2,
        opacity: 1,
        x: 5,
        duration: 0.3,
        ease: "none",
      },
    );

    tl1.fromTo(
      ".nav-links li a",
      {
        x: -20,
      },
      {
        opacity: 1,
        x: 5,
        duration: 0.1,
        stagger: 0.1,
        ease: "none",
      },
    );

    tl1.fromTo(
      ".nav-start",
      {
        x: -20,
      },
      {
        opacity: 1,
        x: 5,
        duration: 0.1,
        ease: "none",
      },
    );

    ham.style.display = "none";
    closeBtn.style.display = "flex";
  }

  function closeNav() {
    if (!isMobile()) return;

    let tl2 = gsap.timeline();

    tl2.to(".nav-start", {
      opacity: 0,
      x: -20,
      duration: 0.1,
      ease: "none",
    });

    tl2.to(".nav-links li a", {
      opacity: 0,
      x: -20,
      duration: 0.1,
      stagger: -0.1,
      ease: "none",
    });

    tl2.to(".look", {
      delay: 0.1,
      opacity: 0,
      x: -20,
      duration: 0.1,
      ease: "none",
    });

    tl2.to(nav, {
      height: 0,
      duration: 0.1,
      ease: "none",
      paddingBottom: "0px",
    });

    ham.style.display = "flex";
    closeBtn.style.display = "none";
  }

  ham.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  document.addEventListener("click", (e) => {
    if (!isMobile()) return;

    const clickedInsideNav = nav.contains(e.target);
    const clickedHam = ham.contains(e.target);
    const clickedClose = closeBtn.contains(e.target);

    if (!clickedInsideNav && !clickedHam && !clickedClose) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      nav.style.transform = "";
      ham.style.display = "";
      closeBtn.style.display = "";
    }
  });
};

// lenisAnimation();

mobileNavBarAnimation();
