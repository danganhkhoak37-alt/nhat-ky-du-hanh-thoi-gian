/* ============================================================
   NAVIGATION.JS — Quick Jump Sidebar Dot Navigation Logic
   ============================================================ */

const QuickNav = (function () {
    'use strict';

    function initNavigation() {
        const quickNavContainer = document.getElementById('quick-nav');
        const dots = document.querySelectorAll('.nav-dot');

        if (!quickNavContainer || dots.length === 0) return;

        // 1. Hide/Show Nav based on Scroll position
        if (typeof ScrollTrigger !== 'undefined') {
            // Show nav after leaving hero section
            ScrollTrigger.create({
                trigger: '#hero',
                start: 'bottom 80%',
                end: 'bottom top',
                onEnter: () => quickNavContainer.classList.add('visible'),
                onLeaveBack: () => quickNavContainer.classList.remove('visible')
            });

            // Handle Scroll Indicators / Active state mapping
            const sections = ['hero', 'scale', 'phase1', 'phase2', 'phase3', 'footer'];
            sections.forEach(secId => {
                const sectionEl = document.getElementById(secId);
                if (!sectionEl) return;

                ScrollTrigger.create({
                    trigger: sectionEl,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => updateActiveDot(secId),
                    onEnterBack: () => updateActiveDot(secId)
                });
            });
        } else {
            // Simple window fallback if ScrollTrigger isn't loaded
            quickNavContainer.classList.add('visible');
            window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY;
                if (scrollPos > window.innerHeight * 0.5) {
                    quickNavContainer.classList.add('visible');
                } else {
                    quickNavContainer.classList.remove('visible');
                }
            });
        }

        // 2. Active Indicator State Switch
        function updateActiveDot(targetId) {
            dots.forEach(dot => {
                const target = dot.getAttribute('data-target');
                if (target === targetId) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // 3. Smooth Click Scrolling
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = dot.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);

                if (!targetSection) return;

                // Scroll with GSAP if available
                if (typeof gsap !== 'undefined') {
                    // Let's use simple smooth scrolling helper
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: targetSection,
                            autoKill: false
                        },
                        ease: 'power3.inOut'
                    });
                } else {
                    // Fallback to native smooth scroll
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    function init() {
        initNavigation();
    }

    return {
        init
    };
})();

window.QuickNav = QuickNav;
