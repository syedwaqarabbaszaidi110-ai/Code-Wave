

let cursorX = 0;
let cursorY = 0;

gsap.set([".cursor1", ".cursor2"], { xPercent: -50, yPercent: -50 });

document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

gsap.ticker.add(() => {
    gsap.to(".cursor1", {
        x: cursorX,
        y: cursorY,
        duration: 0.2,
        ease: "power3.out"
    });

    gsap.to(".cursor2", {
        x: cursorX,
        y: cursorY,
        duration: 0.35,
        ease: "power2.out"
    });
});
// ======================
// GLOBAL INIT
// ======================
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ======================
// MENU HOVER EFFECT
// ======================
function initMenuHover() {
    document.querySelectorAll('.menu_hover').forEach(link => {

        const text = link.textContent
            .trim()
            .toLowerCase()
            .replace(/^./, char => char.toUpperCase());

        link.innerHTML = '';

        const wrapper = document.createElement('span');
        wrapper.className = 'menu-hover-wrapper';

        const top = document.createElement('span');
        top.className = 'menu-hover-top';

        const bottom = document.createElement('span');
        bottom.className = 'menu-hover-bottom';

        text.split('').forEach((char, index) => {
            const createSpan = () => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.setProperty('--i', index);
                return span;
            };

            top.appendChild(createSpan());
            bottom.appendChild(createSpan());
        });

        wrapper.appendChild(top);
        wrapper.appendChild(bottom);

        link.appendChild(wrapper);
    });
}

// ======================
// LOADER / PRELOADER REMOVAL (FIX)
// ======================
function hideLoader() {
    const overlay = document.querySelector('.overlayS');
    if (!overlay) return;

    overlay.classList.add('hide');

    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 2000);
}

// ======================
// MAIN INITIALIZATION
// ======================
function initPreloaderAndMain() {
    hideLoader();

    gsap.to(".wrapper", {
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
    });

    const bannerTl = gsap.timeline();
    bannerTl
        .from(".banner-img img", {
            scale: 1.3,
            opacity: 0,
            duration: 1.4,
            ease: "power4.out",
        })
        .from(
            ".banner-content-inner h1",
            {
                y: 120,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.2)",
            },
            "-=0.8"
        )
        .from(
            ".banner-btn",
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
            },
            "-=0.5"
        )
        .from(
            ".banner-content-text",
            {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.4"
        )
        .from(
            ".banner-content-box-2",
            {
                x: -60,
                opacity: 0,
                rotation: -10,
                duration: 0.9,
                ease: "back.out(1.5)",
            },
            "-=0.6"
        )
        .from(
            ".wiew-project",
            {
                x: 80,
                opacity: 0,
                rotation: 15,
                duration: 0.9,
                ease: "power4.out",
            },
            "-=0.7"
        )
        .from(
            ".design-code-anim",
            {
                x: -80,
                opacity: 0,
                rotation: 0,
                duration: 0.9,
                ease: "power4.out",
            },
            "-=0.5"
        );
}

function initAllAnimations() {
    // ---- TRUSTED SECTION ----
    gsap.from(".trusted-content h2", {
        scrollTrigger: {
            trigger: ".trusted",
            start: "top 80%",
            toggleActions: "play none none reset",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
    });
    gsap.from(".trusted-content p", {
        scrollTrigger: {
            trigger: ".trusted",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
    });
    // ---- ABOUT SECTION ----
    gsap.from(".about-content h2", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });
    gsap.from(".about-content p", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 75%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
    });
    gsap.from(".about-image a.icon", {
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
        },
        scale: 0,
        rotation: 180,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(2)",
    });

    // ---- TEAMS SECTION ----
    const teamTexts = document.querySelectorAll(".teams-content .web-title");
    teamTexts.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 60%",
                scrub: 0.5,
            },
            x: (i) => (i % 2 === 0 ? -200 : 200),
            opacity: 0,
            duration: 1.5,
        });
    });
    gsap.from(".team-img.one", {
        scrollTrigger: {
            trigger: ".teams",
            start: "top 70%",
        },
        x: 150,
        opacity: 0,
        rotation: 10,
        duration: 1.2,
        ease: "power4.out",
    });
    gsap.from(".team-img.two", {
        scrollTrigger: {
            trigger: ".teams",
            start: "top 70%",
        },
        x: -150,
        opacity: 0,
        rotation: -8,
        duration: 1.2,
        ease: "power4.out",
    });

    // ---- FINISH SECTION ----
    gsap.from(".finish-content", {
        scrollTrigger: {
            trigger: ".finish",
            start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
    });

    // ---- DIFFERENT SECTION ----
    gsap.from(".different-box", {
        scrollTrigger: {
            trigger: ".different",
            start: "top 70%",
        },
        y: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "back.out(1.2)",
    });
    // ---- BLOG SECTION ----
    gsap.from(".blog-head h2, .blog-head p", {
        scrollTrigger: {
            trigger: ".blog",
            start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
    });
    gsap.from(".blog .blog-main", {
        scrollTrigger: {
            trigger: ".blog",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    });
    // ---- FORM SECTION ----
    const formTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".form",
            start: "top 70%",
            toggleActions: "play none none reverse",
        }
    });

    // Heading
    formTl.from(".contact-form-wrapper h2", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
    })

        // Form fields
        .from(".contact-form-wrapper .form-group", {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out"
        }, "-=0.4")

        // Interest buttons
        .from(".interest-item", {
            scale: 0.9,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.5")

        // Submit button
        .from(".submit-btn", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.3");

    // Contact info cards
    gsap.from(".contact-box", {
        scrollTrigger: {
            trigger: ".contact-box",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        x: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });
    // ---- FOOTER ANIMATION ----
    if (document.querySelector(".footer")) {
        gsap.from(".footer .idea, .footer .info-item, .footer-bottom", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
        });
    }
}

// ======================
// MARQUEE DIRECTION CONTROL
// ======================
function initMarqueeDirectionControl() {
    const textMarquee = document.querySelector(".marquee:not(.image-marquee) .marquee--inner");
    const imageMarquee = document.querySelector(".image-marquee .marquee--inner");
    if (!textMarquee || !imageMarquee) return;

    let textAnimation = gsap.to(textMarquee, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 25,
    });
    let imgAnimation = gsap.to(imageMarquee, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 35,
    });

    let lastScrollY = window.scrollY;
    ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
            const currentScroll = self.scroll();
            if (currentScroll > lastScrollY) {
                gsap.to([textAnimation, imgAnimation], { timeScale: 1.2, duration: 0.4, ease: "power2.out" });
            } else if (currentScroll < lastScrollY) {
                gsap.to([textAnimation, imgAnimation], { timeScale: 0.8, duration: 0.4, ease: "power2.out" });
            }
            lastScrollY = currentScroll;
        },
    });
}

// ======================
// BACK TO TOP BUTTON
// ======================
function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;
    const progressCircle = document.querySelector(".progress-circle");
    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    if (progressCircle) {
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
    }

    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollTop / docHeight;
        if (progressCircle) {
            const offset = circumference - progress * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
        if (scrollTop > 400) {
            gsap.to(btn, { opacity: 1, visibility: "visible", duration: 0.3 });
        } else {
            gsap.to(btn, { opacity: 0, visibility: "hidden", duration: 0.3 });
        }
    }
    window.addEventListener("scroll", updateProgress);
    btn.addEventListener("click", () => {
        gsap.to(window, { scrollTo: { y: 0 }, duration: 0.8, ease: "power2.inOut" });
    });
    gsap.to(btn, { y: -6, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

// ======================
// PARALLAX EFFECTS
// ======================
function initParallaxEffects() {
    gsap.utils.toArray("[style*='background-image']").forEach((section) => {
        gsap.to(section, {
            backgroundPosition: "50% " + (window.innerHeight * 0.2) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                scrub: 1,
                start: "top bottom",
                end: "bottom top",
            },
        });
    });
}

// ======================
// TEXT SPLITTING ANIMATION
// ======================
function initTextSplitting() {
    const titles = document.querySelectorAll(
        ".trusted-content h2, .about-content h2, .finish-content h2, .different-heading h2, .blog-head h2"
    );
    titles.forEach((title) => {
        const text = title.innerText;
        title.innerHTML = text
            .split(" ")
            .map((word) => `<span class="split-word" style="display:inline-block; overflow:hidden;">${word}</span>`)
            .join(" ");
        gsap.from(title.querySelectorAll(".split-word"), {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reset",
            },
            y: 60,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
        });
    });
}

// ======================
// SERVICES HUD EFFECT
// ======================
function initServiceHUD() {
    const velReadout = document.getElementById("vel-readout");
    const coordSpan = document.getElementById("coord");
    const viewport = document.getElementById("viewport");
    const world = document.getElementById("world");

    if (viewport && world) {
        for (let i = 0; i < 35; i++) {
            const dot = document.createElement("div");
            dot.className = "service-particle";
            dot.style.position = "absolute";
            dot.style.width = "3px";
            dot.style.height = "3px";
            dot.style.background = "rgba(100, 150, 255, 0.6)";
            dot.style.borderRadius = "50%";
            dot.style.left = Math.random() * 100 + "%";
            dot.style.top = Math.random() * 100 + "%";
            dot.style.opacity = Math.random() * 0.7;
            world.appendChild(dot);
        }

        ScrollTrigger.create({
            trigger: ".services",
            start: "top center",
            end: "bottom center",
            onUpdate: (self) => {
                const velocity = self.getVelocity();
                if (velReadout) velReadout.innerText = Math.abs(velocity).toFixed(0);
                if (coordSpan) {
                    const x = (self.progress * 1000).toFixed(0);
                    coordSpan.innerText = `${x}.${Math.floor(Math.random() * 999)}`;
                }
                gsap.to(world, {
                    rotation: self.progress * 15,
                    scale: 1 + self.progress * 0.3,
                    duration: 0.1,
                    overwrite: true,
                });
            },
        });
    }
}

// ======================
// CURSOR GLOW EFFECT
// ======================
function initCursorGlow() {
    document.addEventListener("mousemove", (e) => {
        let glow = document.querySelector(".cursor-glow");
        if (!glow) {
            const div = document.createElement("div");
            div.className = "cursor-glow";
            div.style.position = "fixed";
            div.style.width = "400px";
            div.style.height = "400px";
            div.style.background = "radial-gradient(circle, rgba(73,98,172,0.25) 0%, rgba(3,6,22,0) 70%)";
            div.style.borderRadius = "50%";
            div.style.pointerEvents = "none";
            div.style.zIndex = "9998";
            div.style.transform = "translate(-50%, -50%)";
            document.body.appendChild(div);
            glow = div;
        }
        gsap.to(glow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.4,
            ease: "power2.out",
        });
    });
}

// ======================
// SMOOTH ANCHOR SCROLLING
// ======================
function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            if (targetId) {
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    gsap.to(window, { scrollTo: target, duration: 0.8, ease: "power2.inOut" });
                }
            }
        });
    });
}

class MouseParallax {
    constructor(selector, strength = 30) {
        this.elements = document.querySelectorAll(selector);
        this.strength = strength;

        this.mouseX = 0;
        this.mouseY = 0;

        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight / 2;

        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener("mousemove", (e) => {
            this.mouseX =
                ((e.clientX - this.centerX) / this.centerX) * this.strength;

            this.mouseY =
                ((e.clientY - this.centerY) / this.centerY) * this.strength;

            this.update();
        });

        window.addEventListener("resize", () => {
            this.centerX = window.innerWidth / 2;
            this.centerY = window.innerHeight / 2;
        });
    }

    update() {
        this.elements.forEach((el) => {
            gsap.to(el, {
                x: this.mouseX,
                y: this.mouseY,
                duration: 0.8,
                overwrite: true,
                ease: "power3.out"
            });
        });
    }
}
function initCursorFollowFinishImages() {
    new MouseParallax(".teams img", 40);
    new MouseParallax(".wiew-project .icon", 40);
    new MouseParallax(".banner-content-box.design-code-anim", 40);
}

function animateCards() {
    gsap.fromTo(
        ".swiper-slide-active .svc-card, .swiper-slide-next .svc-card",
        {
            y: 80,
            opacity: 0,
            scale: 0.9,
            filter: "blur(12px)"
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power4.out"
        }
    );
}

// ======================
// START EVERYTHING ON LOAD
// ======================
window.addEventListener("load", () => {
    initApp();
});

function initApp() {
    initMenuHover();
    initPreloaderAndMain();
    initAllAnimations();
    initBackToTop();
    initMarqueeDirectionControl();
    initParallaxEffects();
    initTextSplitting();
    animateCards();
    initCursorGlow();
    initSmoothAnchors();
    initCursorFollowFinishImages();

    ScrollTrigger.refresh();
}

const serviceSlider = new Swiper(".svc-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".svc-next",
        prevEl: ".svc-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});



/* ============================================================
   CODEWAVE — MOBILE NAV JS
   Add this in your theme.js OR just before </body> tag
   ============================================================ */

(function () {
  'use strict';

  /* ── Element refs ─────────────────────────────────────────── */
  const hamburger      = document.getElementById('hamburger');
  const mobileNav      = document.getElementById('mobileNav');
  const mobileOverlay  = document.getElementById('mobileNavOverlay');
  const closeBtn       = document.getElementById('mobileNavClose');
  const navLinks       = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return; // safety guard

  /* ── Open ─────────────────────────────────────────────────── */
  function openNav() {
    mobileNav.classList.add('is-open');
    mobileOverlay.classList.add('active');
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');

    // Trap focus inside nav (a11y)
    mobileNav.focus({ preventScroll: true });
  }

  /* ── Close ────────────────────────────────────────────────── */
  function closeNav() {
    mobileNav.classList.remove('is-open');
    mobileOverlay.classList.remove('active');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  /* ── Toggle ───────────────────────────────────────────────── */
  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.contains('is-open');
    isOpen ? closeNav() : openNav();
  });

  /* ── Close on overlay click ───────────────────────────────── */
  mobileOverlay.addEventListener('click', closeNav);

  /* ── Close on X button ────────────────────────────────────── */
  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  /* ── Close on nav link click ──────────────────────────────── */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Mark active
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      // Close after short delay (feels natural)
      setTimeout(closeNav, 300);
    });
  });

  /* ── Close on ESC key ─────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeNav();
    }
  });

  /* ── Close if window resizes to desktop ───────────────────── */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) {
      closeNav();
    }
  });

  /* ── Active link on page load (match current URL) ─────────── */
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') !== 'javascript:void(0);' &&
        link.getAttribute('href') !== 'javascript:;' &&
        window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

})();