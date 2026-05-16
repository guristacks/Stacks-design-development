import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Script = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // animations

      ScrollTrigger.refresh();
    });

    ctx.revert();

    const tl = gsap.timeline();

    // =========================
    // DEBOUNCE
    // =========================

    const debounce = (fn, wait = 150) => {
      let t;

      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
      };
    };

    // =========================
    // LENIS
    // =========================

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

    const handleResize = debounce(() => {
      if (window.innerWidth > 1024) {
        initLenis();
      } else {
        destroyLenis();
      }
    }, 200);

    window.addEventListener("resize", handleResize);

    // =========================
    // MOBILE NAVBAR
    // =========================

    const ham = document.querySelector(".ham");
    const closeBtn = document.querySelector(".close");
    const nav = document.querySelector(".nav-links");

    const isMobile = () => window.innerWidth <= 1023;

    const openNav = () => {
      if (!isMobile()) return;

      const tl1 = gsap.timeline();

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

      if (ham) ham.style.display = "none";
      if (closeBtn) closeBtn.style.display = "flex";
    };

    const closeNav = () => {
      if (!isMobile()) return;

      const tl2 = gsap.timeline();

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

      if (ham) ham.style.display = "flex";
      if (closeBtn) closeBtn.style.display = "none";
    };

    ham?.addEventListener("click", openNav);
    closeBtn?.addEventListener("click", closeNav);

    const outsideClickHandler = (e) => {
      if (!isMobile()) return;

      const clickedInsideNav = nav?.contains(e.target);
      const clickedHam = ham?.contains(e.target);
      const clickedClose = closeBtn?.contains(e.target);

      if (!clickedInsideNav && !clickedHam && !clickedClose) {
        closeNav();
      }
    };

    document.addEventListener("click", outsideClickHandler);

    // =========================
    // TRUSTED BRANDS
    // =========================

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

    // =========================
    // BLOG SLIDER
    // =========================

    const slider = document.getElementById("blogSlider");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");

    if (slider && leftBtn && rightBtn) {
      const scrollAmount = slider.querySelector(".blog")?.offsetWidth + 15;

      let currentIndex = 0;

      const totalCards = slider.querySelectorAll(".blog").length;

      const visibleCards = 2;

      const updateArrows = () => {
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
      };

      const nextSlide = () => {
        if (currentIndex < totalCards - visibleCards) {
          currentIndex++;

          slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }

        updateArrows();
      };

      const prevSlide = () => {
        if (currentIndex > 0) {
          currentIndex--;

          slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }

        updateArrows();
      };

      rightBtn.addEventListener("click", nextSlide);
      leftBtn.addEventListener("click", prevSlide);

      updateArrows();
    }

    // =========================
    // LETS WORK
    // =========================

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

    // =========================
    // MAIN HERO
    // =========================

    tl.from("header", {
      delay: 0.5,
      scale: 0.8,
      y: -30,
      duration: 0.3,
      opacity: 0,
    });

    tl.from(".hero-content .hey", {
      y: 50,
      scale: 0.8,
      duration: 0.2,
      opacity: 0,
    });

    tl.from(".hero-content h1", {
      y: 50,
      scale: 0.8,
      duration: 0.2,
      opacity: 0,
    });

    tl.from(".hero-content .hero-des", {
      y: 50,
      scale: 0.8,
      duration: 0.2,
      opacity: 0,
    });

    tl.from(".hero-content .cta-set", {
      y: 50,
      scale: 0.8,
      duration: 0.2,
      opacity: 0,
    });

    // =========================
    // COMMON FUNCTION
    // =========================

    const fadeUpAnimation = (selector, trigger) => {
      gsap.from(selector, {
        y: 50,
        scale: 0.8,
        opacity: 0,

        scrollTrigger: {
          trigger,
          scroller: "body",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    };

    fadeUpAnimation(".who-we-are-content .title", ".who-we-are-content");

    fadeUpAnimation(".who-we-are-content h2", ".who-we-are-content");

    fadeUpAnimation(".work-title .title", ".work-title");

    fadeUpAnimation(".work-title h2", ".work-title");

    fadeUpAnimation(".work-left .work", ".work-left");

    fadeUpAnimation(".work-right", ".work-right");

    fadeUpAnimation(".our-expertise .headings .title", ".our-expertise");

    fadeUpAnimation(".our-expertise .headings h2", ".our-expertise");

    fadeUpAnimation(".our-expertise-para", ".our-expertise-para");

    fadeUpAnimation(".expertises", ".expertises");

    fadeUpAnimation("#ABOUT", "#ABOUT");

    fadeUpAnimation("#BLOG", "#BLOG");

    fadeUpAnimation(".ai-content", ".ai-content");

    // =========================
    // CLEANUP
    // =========================

    return () => {
      destroyLenis();

      window.removeEventListener("resize", handleResize);

      document.removeEventListener("click", outsideClickHandler);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default Script;
