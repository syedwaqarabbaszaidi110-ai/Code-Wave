// ======================
// GLOBAL INIT
// ======================
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

// ======================
// COUNTER ANIMATION (GSAP - jQuery removed)
// ======================
function initCounter() {
    ScrollTrigger.create({
        trigger: ".trusted",        // apna counter section yahan
        start: "top 80%",
        once: true,
        onEnter: () => {
            document.querySelectorAll('.count-numb').forEach(el => {
                const target = parseFloat(el.getAttribute('data-target') || el.textContent.trim());
                const suffix = el.getAttribute('data-suffix') || '';
                const isDecimal = el.getAttribute('data-decimal') === 'true';
                const obj = { val: 0 };

                gsap.to(obj, {
                    val: target,
                    duration: 2.5,
                    ease: "power2.out",
                    onUpdate() {
                        el.textContent = (isDecimal
                            ? obj.val.toFixed(1)
                            : Math.ceil(obj.val)
                        ) + suffix;
                    },
                    onComplete() {
                        el.textContent = target + suffix;
                    }
                });
            });
        }
    });
}

// ======================
// CURSOR SHADE EFFECT
// ======================
function initCursorShade() {
    document.querySelectorAll('.cursor-shade').forEach(shade => {
        const section = shade.closest('section') || shade.parentElement;

        if (!section) return;

        gsap.set(shade, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 1
        });

        section.addEventListener('mouseenter', () => {
            gsap.to(shade, {
                opacity: 1,
                duration: 0.3,
                overwrite: true
            });
        });

        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();

            gsap.to(shade, {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: true
            });
        });

        section.addEventListener('mouseleave', () => {
            gsap.to(shade, {
                opacity: 0,
                duration: 0.3,
                overwrite: true
            });
        });
    });
}

// ======================
// CUSTOM CURSOR
// ======================
let cursorX = 0;
let cursorY = 0;

gsap.set([".cursor1", ".cursor2"], { xPercent: -50, yPercent: -50 });

document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

gsap.ticker.add(() => {
    gsap.to(".cursor1", { x: cursorX, y: cursorY, duration: 0.2, ease: "power3.out" });
    gsap.to(".cursor2", { x: cursorX, y: cursorY, duration: 0.35, ease: "power2.out" });
});

// ======================
// MENU HOVER EFFECT
// ======================
function initMenuHover() {
    document.querySelectorAll('.menu_hover').forEach(link => {
        const text = link.textContent.trim().toLowerCase().replace(/^./, c => c.toUpperCase());
        link.innerHTML = '';

        const wrapper = document.createElement('span');
        wrapper.className = 'menu-hover-wrapper';

        const top = document.createElement('span');
        top.className = 'menu-hover-top';
        const bottom = document.createElement('span');
        bottom.className = 'menu-hover-bottom';

        text.split('').forEach((char, index) => {
            const makeSpan = () => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.setProperty('--i', index);
                return span;
            };
            top.appendChild(makeSpan());
            bottom.appendChild(makeSpan());
        });

        wrapper.appendChild(top);
        wrapper.appendChild(bottom);
        link.appendChild(wrapper);
    });
}

// ======================
// LOADER / PRELOADER
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
// BANNER ANIMATION
// ======================
function initPreloaderAndMain() {
    hideLoader();

    gsap.to(".wrapper", { opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 });

    gsap.timeline()
        .from(".banner-img img", { scale: 1.3, opacity: 0, duration: 1.4, ease: "power4.out" })
        .from(".banner-content-inner h1", { y: 120, opacity: 0, duration: 1, stagger: 0.2, ease: "back.out(1.2)" }, "-=0.8")
        .from(".banner-btn", { y: 50, opacity: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" }, "-=0.5")
        .from(".banner-content-text", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".banner-content-box-2", { x: -60, opacity: 0, rotation: -10, duration: 0.9, ease: "back.out(1.5)" }, "-=0.6")
        .from(".wiew-project", { x: 80, opacity: 0, rotation: 15, duration: 0.9, ease: "power4.out" }, "-=0.7")
        .from(".design-code-anim", { x: -80, opacity: 0, rotation: 0, duration: 0.9, ease: "power4.out" }, "-=0.5");
}

// ======================
// SCROLL ANIMATIONS
// ======================
function initAllAnimations() {

    // TRUSTED
    gsap.from(".trusted-content h2", {
        scrollTrigger: { trigger: ".trusted", start: "top 80%", toggleActions: "play none none reset" },
        y: 80, opacity: 0, duration: 1, ease: "power4.out"
    });
    gsap.from(".trusted-content p", {
        scrollTrigger: { trigger: ".trusted", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out"
    });

    // ABOUT
    gsap.from(".about-content h2", {
        scrollTrigger: { trigger: ".about", start: "top 75%" },
        x: -80, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".about-content p", {
        scrollTrigger: { trigger: ".about", start: "top 75%" },
        x: 60, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".about-image", {
        scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        scale: 0.9, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)"
    });
    gsap.from(".about-image a.icon", {
        scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        scale: 0, rotation: 180, duration: 0.8, delay: 0.3, ease: "back.out(2)"
    });

    // TEAMS
    document.querySelectorAll(".teams-content .web-title").forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 60%", scrub: 0.5 },
            x: (i) => (i % 2 === 0 ? -200 : 200), opacity: 0, duration: 1.5
        });
    });
    gsap.from(".team-img.one", {
        scrollTrigger: { trigger: ".teams", start: "top 70%" },
        x: 150, opacity: 0, rotation: 10, duration: 1.2, ease: "power4.out"
    });
    gsap.from(".team-img.two", {
        scrollTrigger: { trigger: ".teams", start: "top 70%" },
        x: -150, opacity: 0, rotation: -8, duration: 1.2, ease: "power4.out"
    });

    // FINISH
    gsap.from(".finish-content", {
        scrollTrigger: { trigger: ".finish", start: "top 75%" },
        y: 50, opacity: 0, duration: 0.8
    });

    // DIFFERENT
    gsap.from(".different-box", {
        scrollTrigger: { trigger: ".different", start: "top 70%" },
        y: 70, opacity: 0, stagger: 0.15, duration: 0.9, ease: "back.out(1.2)"
    });

    // BLOG
    gsap.from(".blog-head h2, .blog-head p", {
        scrollTrigger: { trigger: ".blog", start: "top 80%" },
        y: 40, opacity: 0, stagger: 0.2, duration: 0.8
    });
    gsap.from(".blog .blog-main", {
        scrollTrigger: { trigger: ".blog", start: "top 80%", toggleActions: "play none none reverse" },
        y: 80, opacity: 0, scale: 0.95, stagger: 0.2, duration: 1, ease: "power3.out"
    });

    // FORM
    gsap.timeline({
        scrollTrigger: { trigger: ".form", start: "top 70%", toggleActions: "play none none reverse" }
    })
        .from(".contact-form-wrapper h2", { y: 60, opacity: 0, duration: 0.8, ease: "power4.out" })
        .from(".contact-form-wrapper .form-group", { y: 40, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .from(".interest-item", { scale: 0.9, opacity: 0, stagger: 0.08, duration: 0.5, ease: "back.out(1.7)" }, "-=0.5")
        .from(".submit-btn", { y: 20, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3");

    // FOOTER
    if (document.querySelector(".footer")) {
        gsap.from(".footer .idea, .footer .info-item, .footer-bottom", {
            y: 30, opacity: 0, stagger: 0.1, duration: 0.8
        });
    }
}

// ======================
// MARQUEE
// ======================
function initMarqueeDirectionControl() {
    const textMarquee = document.querySelector(".marquee:not(.image-marquee) .marquee--inner");
    const imageMarquee = document.querySelector(".image-marquee .marquee--inner");
    if (!textMarquee || !imageMarquee) return;

    const textAnim = gsap.to(textMarquee, { xPercent: -50, repeat: -1, ease: "none", duration: 25 });
    const imgAnim = gsap.to(imageMarquee, { xPercent: -50, repeat: -1, ease: "none", duration: 35 });

    let lastScrollY = window.scrollY;
    ScrollTrigger.create({
        start: 0, end: "max",
        onUpdate: (self) => {
            const cur = self.scroll();
            const ts = cur > lastScrollY ? 1.2 : 0.8;
            gsap.to([textAnim, imgAnim], { timeScale: ts, duration: 0.4, ease: "power2.out" });
            lastScrollY = cur;
        }
    });
}

// ======================
// BACK TO TOP
// ======================
function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;
    const circle = document.querySelector(".progress-circle");
    const circ = 2 * Math.PI * 26;
    if (circle) { circle.style.strokeDasharray = circ; circle.style.strokeDashoffset = circ; }

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (circle) circle.style.strokeDashoffset = circ - (scrollTop / docHeight) * circ;
        gsap.to(btn, scrollTop > 400
            ? { opacity: 1, visibility: "visible", duration: 0.3 }
            : { opacity: 0, visibility: "hidden", duration: 0.3 });
    });

    btn.addEventListener("click", () => gsap.to(window, { scrollTo: { y: 0 }, duration: 0.8, ease: "power2.inOut" }));
    gsap.to(btn, { y: -6, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
}

// ======================
// PARALLAX
// ======================
function initParallaxEffects() {
    gsap.utils.toArray("[style*='background-image']").forEach(section => {
        gsap.to(section, {
            backgroundPosition: `50% ${window.innerHeight * 0.2}px`,
            ease: "none",
            scrollTrigger: { trigger: section, scrub: 1, start: "top bottom", end: "bottom top" }
        });
    });
}

// ======================
// TEXT SPLITTING
// ======================
function initTextSplitting() {
    document.querySelectorAll(
        ".trusted-content h2, .about-content h2, .finish-content h2, .different-heading h2, .blog-head h2"
    ).forEach(title => {
        title.innerHTML = title.innerText
            .split(" ")
            .map(w => `<span class="split-word" style="display:inline-block;overflow:hidden">${w}</span>`)
            .join(" ");
        gsap.from(title.querySelectorAll(".split-word"), {
            scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none reset" },
            y: 60, opacity: 0, stagger: 0.08, duration: 0.8, ease: "power3.out"
        });
    });
}

// ======================
// SERVICES HUD
// ======================
function initServiceHUD() {
    const viewport = document.getElementById("viewport");
    const world = document.getElementById("world");
    const velReadout = document.getElementById("vel-readout");
    const coordSpan = document.getElementById("coord");
    if (!viewport || !world) return;

    for (let i = 0; i < 35; i++) {
        const dot = document.createElement("div");
        Object.assign(dot.style, {
            position: "absolute", width: "3px", height: "3px",
            background: "rgba(100,150,255,0.6)", borderRadius: "50%",
            left: Math.random() * 100 + "%", top: Math.random() * 100 + "%",
            opacity: Math.random() * 0.7
        });
        world.appendChild(dot);
    }
    ScrollTrigger.create({
        trigger: ".services", start: "top center", end: "bottom center",
        onUpdate: (self) => {
            if (velReadout) velReadout.innerText = Math.abs(self.getVelocity()).toFixed(0);
            if (coordSpan) coordSpan.innerText = `${(self.progress * 1000).toFixed(0)}.${Math.floor(Math.random() * 999)}`;
            gsap.to(world, { rotation: self.progress * 15, scale: 1 + self.progress * 0.3, duration: 0.1, overwrite: true });
        }
    });
}

// ======================
// CURSOR GLOW
// ======================
function initCursorGlow() {
    document.addEventListener("mousemove", (e) => {
        let glow = document.querySelector(".cursor-glow");
        if (!glow) {
            glow = document.createElement("div");
            glow.className = "cursor-glow";
            Object.assign(glow.style, {
                position: "fixed", width: "400px", height: "400px",
                background: "radial-gradient(circle,rgba(73,98,172,0.25) 0%,rgba(3,6,22,0) 70%)",
                borderRadius: "50%", pointerEvents: "none", zIndex: "9998",
                transform: "translate(-50%,-50%)"
            });
            document.body.appendChild(glow);
        }
        gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    });
}

// ======================
// SMOOTH ANCHORS
// ======================
function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const id = this.getAttribute("href").substring(1);
            const target = id && document.getElementById(id);
            if (target) { e.preventDefault(); gsap.to(window, { scrollTo: target, duration: 0.8, ease: "power2.inOut" }); }
        });
    });
}

// ======================
// MOUSE PARALLAX
// ======================
class MouseParallax {
    constructor(selector, strength = 30) {
        this.elements = document.querySelectorAll(selector);
        this.strength = strength;
        this.cx = window.innerWidth / 2;
        this.cy = window.innerHeight / 2;
        window.addEventListener("mousemove", (e) => {
            const mx = ((e.clientX - this.cx) / this.cx) * this.strength;
            const my = ((e.clientY - this.cy) / this.cy) * this.strength;
            this.elements.forEach(el => gsap.to(el, { x: mx, y: my, duration: 0.8, overwrite: true, ease: "power3.out" }));
        });
        window.addEventListener("resize", () => {
            this.cx = window.innerWidth / 2;
            this.cy = window.innerHeight / 2;
        });
    }
}

function initCursorFollowFinishImages() {
    new MouseParallax(".teams img", 40);
    new MouseParallax(".wiew-project .icon", 40);
    new MouseParallax(".banner-content-box.design-code-anim", 40);
}

// ======================
// SWIPER CARD ANIMATION
// ======================
function animateCards() {
    gsap.fromTo(
        ".swiper-slide-active .svc-card, .swiper-slide-next .svc-card",
        { y: 80, opacity: 0, scale: 0.9, filter: "blur(12px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power4.out" }
    );
}

// ======================
// APP INIT
// ======================
window.addEventListener("load", () => {
    initMenuHover();
    initPreloaderAndMain();
    initAllAnimations();
    initCounter();
    initBackToTop();
    initMarqueeDirectionControl();
    initParallaxEffects();
    initTextSplitting();
    animateCards();
    initCursorGlow();
    initSmoothAnchors();
    initCursorFollowFinishImages();
    initCursorShade();          // ← cursor shade (har section ke liye kaam karta hai)
    ScrollTrigger.refresh();
});

// ======================
// SWIPER
// ======================
const serviceSlider = new Swiper(".svc-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: { nextEl: ".svc-next", prevEl: ".svc-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});

/* ============================================================
   MOBILE NAV
============================================================ */
(function () {
    'use strict';
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('mobileNavClose');
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    if (!hamburger || !mobileNav) return;

    const openNav = () => {
        mobileNav.classList.add('is-open');
        mobileOverlay.classList.add('active');
        hamburger.classList.add('is-active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('nav-open');
        mobileNav.focus({ preventScroll: true });
    };
    const closeNav = () => {
        mobileNav.classList.remove('is-open');
        mobileOverlay.classList.remove('active');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
    };

    hamburger.addEventListener('click', () => mobileNav.classList.contains('is-open') ? closeNav() : openNav());
    mobileOverlay.addEventListener('click', closeNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            setTimeout(closeNav, 300);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
    });
    window.addEventListener('resize', () => { if (window.innerWidth >= 992) closeNav(); });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href !== 'javascript:void(0);' && href !== 'javascript:;' && window.location.pathname.endsWith(href)) {
            link.classList.add('active');
        }
    });
})();