/* ============================================================
   TIMELINE.JS — GSAP ScrollTrigger Timeline (Full Screen Slides)
   Phase 1: Full Screen Vertical Slides (Tháng 1–8)
   Phase 2: Full Screen Vertical Slides (Tháng 9–12)
   Phase 3: Full Screen Vertical Slides (Ngày 31 Tháng 12)
   ============================================================ */

const Timeline = (function () {
    'use strict';

    // ---- Helper to animate full screen slides ---- //
    function animateSlides(containerSelector, slideSelector) {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const slides = document.querySelectorAll(`${containerSelector} ${slideSelector}`);
        
        slides.forEach((slide) => {
            const img = slide.querySelector('.event-slide-img');
            const meta = slide.querySelector('.event-meta');
            const title = slide.querySelector('.event-slide-title');
            const year = slide.querySelector('.event-slide-year');
            const desc = slide.querySelector('.event-slide-desc');
            const sublist = slide.querySelector('.sub-events-list');

            // Collect text elements to animate with a stagger
            const animTargets = [];
            if (meta) animTargets.push(meta);
            if (title) animTargets.push(title);
            if (year) animTargets.push(year);
            if (desc) animTargets.push(desc);
            if (sublist) animTargets.push(sublist);

            // Animate content elements sequentially
            if (animTargets.length > 0) {
                gsap.from(animTargets, {
                    opacity: 0,
                    y: 35,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: slide,
                        start: 'top 65%',
                        toggleActions: 'play none none reverse',
                    }
                });
            }

            // Parallax zoom effect on the image
            if (img) {
                gsap.fromTo(img, 
                    { scale: 1.15 },
                    {
                        scale: 1.0,
                        scrollTrigger: {
                            trigger: slide,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        }
                    }
                );
            }
        });
    }

    // ---- PHASE 1: Full Screen Slides (Tháng 1 - 8) ---- //

    function buildPhase1Cards() {
        const container = document.getElementById('vertical-timeline-phase1');
        if (!container) return;

        container.innerHTML = '';

        TIMELINE_DATA.phase1.forEach((event, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            const eventEl = document.createElement('div');
            eventEl.className = `event-slide ${side}`;
            eventEl.style.setProperty('--accent-color', event.color || '#f59e0b');

            const dateLabel = `${MONTH_NAMES[event.month - 1]}, Ngày ${event.day}`;

            eventEl.innerHTML = `
                <div class="event-slide-image">
                    <img src="${event.image}" alt="${event.title}" class="event-slide-img">
                    <div class="image-overlay"></div>
                </div>
                <div class="event-slide-content">
                    <div class="event-slide-content-inner">
                        <div class="event-meta">
                            <div class="event-icon-badge">${event.icon}</div>
                            <div class="event-date-badge">${dateLabel}</div>
                        </div>
                        <h3 class="event-slide-title">${event.title}</h3>
                        <div class="event-slide-year">${event.realYear}</div>
                        <p class="event-slide-desc">${event.description}</p>
                    </div>
                </div>
            `;
            container.appendChild(eventEl);
        });
    }

    function initPhase1() {
        buildPhase1Cards();

        // Background gradient transition for phase 1
        if (typeof gsap !== 'undefined') {
            gsap.to('#phase1', {
                background: 'linear-gradient(180deg, #050a18 0%, #0a1628 50%, #0f1f3d 100%)',
                scrollTrigger: {
                    trigger: '#phase1',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }

        animateSlides('#vertical-timeline-phase1', '.event-slide');
    }

    // ---- PHASE 2: Full Screen Slides (Tháng 9 - 12) ---- //

    function buildPhase2Cards() {
        const container = document.getElementById('vertical-timeline');
        if (!container) return;

        container.innerHTML = '';

        TIMELINE_DATA.phase2.forEach((event, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            const eventEl = document.createElement('div');
            eventEl.className = `event-slide ${side}`;
            eventEl.style.setProperty('--accent-color', event.color || '#3b82f6');

            const dateLabel = `${MONTH_NAMES[event.month - 1]}, Ngày ${event.day}`;

            eventEl.innerHTML = `
                <div class="event-slide-image">
                    <img src="${event.image}" alt="${event.title}" class="event-slide-img">
                    <div class="image-overlay"></div>
                </div>
                <div class="event-slide-content">
                    <div class="event-slide-content-inner">
                        <div class="event-meta">
                            <div class="event-icon-badge">${event.icon}</div>
                            <div class="event-date-badge">${dateLabel}</div>
                        </div>
                        <h3 class="event-slide-title">${event.title}</h3>
                        <div class="event-slide-year">${event.realYear}</div>
                        <p class="event-slide-desc">${event.description}</p>
                    </div>
                </div>
            `;
            container.appendChild(eventEl);
        });
    }

    function initPhase2() {
        buildPhase2Cards();

        // Background gradient transition for phase 2
        if (typeof gsap !== 'undefined') {
            gsap.to('#phase2', {
                background: 'linear-gradient(180deg, #0f1f3d 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
                scrollTrigger: {
                    trigger: '#phase2',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }

        animateSlides('#vertical-timeline', '.event-slide');
    }

    // ---- PHASE 3: Full Screen Slides (Ngày 31 Tháng 12) ---- //

    function buildPhase3Cards() {
        const container = document.getElementById('vertical-timeline-phase3');
        if (!container) return;

        container.innerHTML = '';

        TIMELINE_DATA.phase3.forEach((event, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            const eventEl = document.createElement('div');
            eventEl.className = `event-slide ${side} ${event.isLastSecond ? 'last-second' : ''}`;
            eventEl.style.setProperty('--accent-color', event.color || '#ff6b35');

            let subEventsHtml = '';
            if (event.isLastSecond && event.subEvents) {
                subEventsHtml = `
                    <div class="sub-events-list">
                        ${event.subEvents.map(se => `
                            <div class="sub-event-item">
                                <strong>${se.label}</strong>
                                <span>${se.year}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            eventEl.innerHTML = `
                <div class="event-slide-image">
                    <img src="${event.image}" alt="${event.title}" class="event-slide-img">
                    <div class="image-overlay"></div>
                </div>
                <div class="event-slide-content">
                    <div class="event-slide-content-inner">
                        <div class="event-meta">
                            <div class="event-icon-badge">${event.icon}</div>
                            <div class="event-date-badge" style="color: var(--accent-orange); border-color: rgba(255, 107, 53, 0.2); background: rgba(255, 107, 53, 0.08);">Ngày 31 Tháng 12 — ${event.time}</div>
                        </div>
                        <h3 class="event-slide-title">${event.title}</h3>
                        <div class="event-slide-year">${event.realYear}</div>
                        <p class="event-slide-desc">${event.description}</p>
                        ${subEventsHtml}
                    </div>
                </div>
            `;
            container.appendChild(eventEl);
        });
    }

    function initPhase3() {
        buildPhase3Cards();

        // Background gradient transition for phase 3
        if (typeof gsap !== 'undefined') {
            gsap.to('#phase3', {
                background: 'linear-gradient(180deg, #0f3460 0%, #08111e 40%, #000000 100%)',
                scrollTrigger: {
                    trigger: '#phase3',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        }

        animateSlides('#vertical-timeline-phase3', '.event-slide');
    }

    // ---- PUBLIC API ---- //

    function init() {
        initPhase1();
        initPhase2();
        initPhase3();
    }

    return { init };
})();

window.Timeline = Timeline;
