<?php include 'header.php'; ?>

<style>
    .loader {
        position: fixed;
        inset: 0;
        background: #000;
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .waves {
        display: flex;
        gap: 6px;
        align-items: flex-end;
    }

    .waves span {
        width: 6px;
        height: 20px;
        background: #111;
        border-radius: 10px;
        transform-origin: bottom;
    }

    .loader-percent {
        position: absolute;
        right: 40px;
        bottom: 40px;
        font-size: 70px;
        font-weight: 700;
        color: #111;
    }
</style>


<div class="loader">
    <div class="waves">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
    </div>

    <div class="loader-percent">0%</div>
</div>

<script>
    function hideLoader() {

        const loader = document.querySelector(".loader");
        if (!loader) return gsap.timeline();

        document.body.style.overflow = "hidden";

        const counter = {
            value: 0
        };

        // Wave animation (infinite smooth motion)
        gsap.to(".waves span", {
            scaleY: 3,
            yoyo: true,
            repeat: -1,
            stagger: 0.1,
            duration: 0.6,
            ease: "sine.inOut"
        });

        const tl = gsap.timeline();

        tl.to(counter, {
                value: 100,
                duration: 3.5,
                ease: "power2.out",
                onUpdate() {
                    document.querySelector(".loader-percent").innerHTML =
                        Math.floor(counter.value) + "%";
                }
            })

            .to(".waves", {
                scale: 1.5,
                opacity: 0,
                duration: 1,
                ease: "power4.inOut"
            })

            .to(".loader", {
                clipPath: "circle(0% at 50% 50%)",
                duration: 1,
                ease: "expo.inOut"
            })

            .to(".loader", {
                opacity: 0,
                duration: 0.3,
                onComplete() {
                    loader.remove();
                    document.body.style.overflow = "";
                }
            });

        return tl;
    }
</script>
<?php include 'footer.php'; ?>