// GSAP Timeline & Scroll Trigger
let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

const onPress = (el, handler) => {
  if (!el) return;
  el.addEventListener("click", handler);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handler(e);
    }
  });
};

const debounce = (fn, wait = 150) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

const lenisAnimation = () => {
  let lenis;
  let rafFn;

  const initLenis = () => {
    if (window.innerWidth > 1024 && !lenis) {
      lenis = new Lenis();

      lenis.on("scroll", ScrollTrigger.update);

      rafFn = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(rafFn);
      gsap.ticker.lagSmoothing(0);
    }
  };

  const destroyLenis = () => {
    if (lenis) {
      gsap.ticker.remove(rafFn);
      lenis.destroy();
      lenis = null;
    }
  };

  initLenis();

  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth > 1024) {
        initLenis();
      } else {
        destroyLenis();
      }
    }, 200),
    { passive: true },
  );
};

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
      height: "480px",
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

const trustedBrandsAnimation = () => {
  if (window.innerWidth > 1024) {
    gsap.to(".track", {
      x: "-70%",
      duration: 60,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  } else if (window.innerWidth < 768) {
    gsap.to(".track", {
      x: "-180%",
      duration: 60,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }
};

const blogAnimation = () => {
  const slider = document.getElementById("blogSlider");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const scrollAmount = slider.querySelector(".blog").offsetWidth + 20;

  let currentIndex = 0;
  const totalCards = slider.querySelectorAll(".blog").length;
  const visibleCards = 2;

  function updateArrows() {
    if (currentIndex === 0) {
      leftBtn.classList.add("disabled");
    } else {
      leftBtn.classList.remove("disabled");
    }

    if (currentIndex >= totalCards - visibleCards) {
      rightBtn.classList.add("disabled");
    } else {
      rightBtn.classList.remove("disabled");
    }
  }

  rightBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    updateArrows();
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    updateArrows();
  });

  updateArrows();
};

const letsworkAnimation = () => {
  gsap.to(".marquee-top .TRACKING", {
    xPercent: 84,
    duration: 60,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });

  gsap.to(".marquee-bottom .TRACKING", {
    xPercent: -84,
    duration: 60,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });
};

lenisAnimation();

mobileNavBarAnimation();

trustedBrandsAnimation();

blogAnimation();

letsworkAnimation();

const mainAnime = () => {
  tl.from("header", {
    delay: 0.5,
    transform: "scale(0.8)",
    y: -30,
    duration: 0.3,
    opacity: 0,
  });

  tl.from(".hero-content .hey", {
    y: 50,
    transform: "scale(0.8)",
    duration: 0.2,
    opacity: 0,
  });

  tl.from(".hero-content h1", {
    y: 50,
    transform: "scale(0.8)",
    duration: 0.2,
    opacity: 0,
  });

  tl.from(".hero-content .hero-des", {
    y: 50,
    transform: "scale(0.8)",
    duration: 0.2,
    opacity: 0,
  });

  tl.from(".hero-content .cta-set", {
    y: 50,
    transform: "scale(0.8)",
    duration: 0.2,
    opacity: 0,
  });
};

const whoWeAreSecAnime = () => {
  gsap.from(".who-we-are-content .title", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".who-we-are-content",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from(".who-we-are-content h2", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".who-we-are-content",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from(".who-we-are-two-cta", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".who-we-are-content",
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });
};

const workSecAnime = () => {
  gsap.from(".work-title .title", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".work-title",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from(".work-title h2", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".work-title",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from(".work-left .work", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".work-left",
      scroller: "body",
      start: "top 50%",
      end: "top 30%",
      scrub: 1,
    },
  });

  gsap.from(".work-right", {
    opacity: 0,
    transform: "scale(0.8)",
    y: 50,
    scrollTrigger: {
      trigger: ".work-right",
      scroller: "body",
      start: "top 70%",
      end: "top 40%",
      scrub: 1,
    },
  });
};

const expertiseSecAnime = () => {
  gsap.from(".our-expertise .headings .title", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".our-expertise",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

  gsap.from(".our-expertise .headings h2", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".our-expertise",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

  gsap.from(".our-expertise-para", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".our-expertise-para",
      scrub: 1,
      start: "top 90%",
      end: "top 50%",
    },
  });

  gsap.from(".expertises", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".expertises",
      scrub: 1,
      start: "top 90%",
      end: "top 50%",
    },
  });

  gsap.from(".hear", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".hear",
      scrub: 1,
      start: "top 90%",
      end: "top 50%",
    },
  });
};

const aboutUsSecAnime = () => {
  gsap.from("#ABOUT", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: "#ABOUT",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

};

const blogSecAnime = () => {
  gsap.from("#BLOG", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: "#BLOG",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

};

const aiAnime = () => {
  gsap.from(".ai-content", {
    y: 50,
    transform: "scale(0.8)",
    opacity: 0,
    scrollTrigger: {
      scroller: "body",
      trigger: ".ai-content",
      scrub: 1,
      start: "top 70%",
      end: "top 40%",
    },
  });

};

mainAnime();

whoWeAreSecAnime();

workSecAnime();

expertiseSecAnime();

aboutUsSecAnime();

blogSecAnime();

aiAnime();
