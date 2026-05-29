/* ============================================================
   MAIN.JS — Entry Point & Module Initializer
   Nhật Ký Du Hành Thời Gian
   ============================================================ */

(function () {
    'use strict';

    // ---- Register GSAP Plugins ---- //
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ---- State ---- //
    let isExploded = false;
    let isMobile = window.innerWidth < 768;

    // ---- Hero Interaction ---- //
    function setupHero() {
        const cta = document.getElementById('hero-cta');
        const singularity = document.getElementById('singularity');

        function triggerBigBang() {
            if (isExploded) return;
            isExploded = true;

            // Add body class
            document.body.classList.add('hero-exploded');

            // Trigger BigBang canvas explosion
            if (window.BigBang && window.BigBang.explode) {
                window.BigBang.explode();
            }

            // Animate title appearing
            const title = document.getElementById('hero-title');
            const ctaBtn = document.getElementById('hero-cta');
            const scrollInd = document.getElementById('scroll-indicator');

            if (typeof gsap !== 'undefined') {
                const tl = gsap.timeline({ delay: 1.2 });

                // Hide singularity
                if (singularity) {
                    gsap.to(singularity, {
                        scale: 20,
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out'
                    });
                }

                // Show title lines
                tl.to('.title-line-1', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                })
                .to('.title-line-2', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.4')
                .to('.title-sub', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.3')
                .to(ctaBtn, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.2')
                .to(scrollInd, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out'
                }, '-=0.1');
            } else {
                // Fallback without GSAP
                document.querySelectorAll('.title-line, .title-sub').forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
                if (ctaBtn) { ctaBtn.style.opacity = '1'; ctaBtn.style.transform = 'translateY(0)'; }
                if (scrollInd) scrollInd.style.opacity = '1';
            }
        }

        // CTA button click
        if (cta) {
            cta.addEventListener('click', (e) => {
                e.preventDefault();
                if (!isExploded) {
                    triggerBigBang();
                } else {
                    // If already exploded, scroll to scale section
                    const scale = document.getElementById('scale');
                    if (scale) {
                        scale.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }

        // First scroll triggers BigBang
        let scrollTriggered = false;
        function onFirstScroll() {
            if (!scrollTriggered && !isExploded) {
                scrollTriggered = true;
                triggerBigBang();
            }
        }

        window.addEventListener('wheel', onFirstScroll, { once: true, passive: true });
        window.addEventListener('touchstart', onFirstScroll, { once: true, passive: true });

        // Keyboard support
        window.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') && !isExploded) {
                triggerBigBang();
            }
        }, { once: true });
    }

    // ---- Scroll-based Background ---- //
    function setupBackgroundTransitions() {
        if (typeof gsap === 'undefined') return;

        // Hero to Scale transition
        gsap.to('body', {
            backgroundColor: '#050a18',
            scrollTrigger: {
                trigger: '#scale',
                start: 'top bottom',
                end: 'top center',
                scrub: true,
            }
        });
    }

    // ---- Footer Stars (CSS-based) ---- //
    function setupFooterStars() {
        const starfield = document.getElementById('footer-starfield');
        if (!starfield) return;

        // Create star layers with CSS
        for (let layer = 0; layer < 3; layer++) {
            const starLayer = document.createElement('div');
            starLayer.className = `star-layer star-layer-${layer}`;

            let shadows = [];
            const count = 80 + layer * 40;
            for (let i = 0; i < count; i++) {
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const size = Math.random() * (1.5 - layer * 0.3) + 0.5;
                const opacity = Math.random() * 0.7 + 0.3;
                shadows.push(`${x}vw ${y}vh 0 ${size}px rgba(255,255,255,${opacity})`);
            }

            starLayer.style.cssText = `
                position: absolute;
                inset: 0;
                box-shadow: ${shadows.join(',')};
                animation: starDrift${layer} ${60 + layer * 30}s linear infinite;
            `;
            starfield.appendChild(starLayer);
        }

        // Add star drift animation
        if (!document.getElementById('star-drift-styles')) {
            const style = document.createElement('style');
            style.id = 'star-drift-styles';
            style.textContent = `
                @keyframes starDrift0 {
                    from { transform: translateY(0); }
                    to { transform: translateY(-20px); }
                }
                @keyframes starDrift1 {
                    from { transform: translate(0, 0); }
                    to { transform: translate(10px, -15px); }
                }
                @keyframes starDrift2 {
                    from { transform: translate(0, 0); }
                    to { transform: translate(-10px, -10px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ---- Mobile Detection & Adjustments ---- //
    function handleMobile() {
        if (isMobile) {
            document.body.classList.add('is-mobile');
        }

        window.addEventListener('resize', () => {
            const wasM = isMobile;
            isMobile = window.innerWidth < 768;
            if (wasM !== isMobile) {
                document.body.classList.toggle('is-mobile', isMobile);
            }
        });
    }

    // ---- Initialize Everything ---- //
    function init() {
        handleMobile();
        setupHero();
        setupBackgroundTransitions();
        setupFooterStars();

        // Initialize modules (order matters — data.js loaded first)
        if (window.BigBang && window.BigBang.init) {
            window.BigBang.init();
        }

        if (window.ScaleSection && window.ScaleSection.init) {
            window.ScaleSection.init();
        }

        if (window.Timeline && window.Timeline.init) {
            window.Timeline.init();
        }

        if (window.CosmicClock && window.CosmicClock.init) {
            window.CosmicClock.init();
        }

        if (window.QuickNav && window.QuickNav.init) {
            window.QuickNav.init();
        }

        // Refresh ScrollTrigger after all content is built
        setTimeout(() => {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 500);
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
