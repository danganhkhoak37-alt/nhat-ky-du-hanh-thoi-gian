/* ============================================================
   SCALE.JS — Animated Time Scale Conversion Grid Counters
   ============================================================ */

const ScaleSection = (function () {
    'use strict';

    let hasAnimated = false;

    function initCounters() {
        const scaleSectionEl = document.getElementById('scale');
        const cards = document.querySelectorAll('.scale-card');
        const numbers = document.querySelectorAll('.real-number');

        if (!scaleSectionEl || numbers.length === 0) return;

        // Animate counter values
        function animateValue(obj, start, end, duration, decimals) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Ease out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                const currentValue = start + easeProgress * (end - start);
                obj.innerHTML = currentValue.toFixed(decimals);
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = end.toFixed(decimals);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Trigger animations
        function triggerAnimation() {
            if (hasAnimated) return;
            hasAnimated = true;

            // Stagger card appearances and counters
            cards.forEach((card, index) => {
                setTimeout(() => {
                    // Reveal Card
                    card.classList.add('visible');

                    // Find corresponding counter
                    const numberEl = card.querySelector('.real-number');
                    if (numberEl) {
                        const target = parseFloat(numberEl.getAttribute('data-target'));
                        const decimals = parseInt(numberEl.getAttribute('data-decimals') || '0', 10);
                        animateValue(numberEl, 0, target, 2000, decimals);
                    }
                }, index * 250); // Stagger cards by 250ms
            });
        }

        // Detect intersection using ScrollTrigger (if available) or fallback to IntersectionObserver
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
                trigger: '#scale',
                start: 'top 75%',
                onEnter: () => {
                    triggerAnimation();
                }
            });
        } else if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        triggerAnimation();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.25 });
            observer.observe(scaleSectionEl);
        } else {
            // Instant fallback if neither is supported
            triggerAnimation();
        }
    }

    function init() {
        initCounters();
    }

    return {
        init
    };
})();

window.ScaleSection = ScaleSection;
