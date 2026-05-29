/* ============================================================
   CLOCK.JS — Scroll-Driven Non-Linear Digital Countdown Clock
   ============================================================ */

const CosmicClock = (function () {
    'use strict';

    let clockDisplay;
    let clockH, clockM, clockS;
    let clockEventsContainer;
    let eventCards = [];

    // Dynamically build Phase 3 Event Cards
    function buildClockEvents() {
        clockEventsContainer = document.getElementById('clock-events');
        if (!clockEventsContainer) return;

        clockEventsContainer.innerHTML = '';

        TIMELINE_DATA.phase3.forEach((event, i) => {
            const card = document.createElement('div');
            card.className = `clock-event-card ${event.isLastSecond ? 'last-second' : ''} ${event.image ? 'has-image' : ''}`;
            card.setAttribute('data-seconds', event.seconds);

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

            const imageHtml = event.image 
                ? `<div class="event-image-wrapper"><img src="${event.image}" alt="${event.title}" class="event-card-img"></div>` 
                : '';

            card.innerHTML = `
                ${imageHtml}
                <div class="clock-event-card-inner">
                    <div class="event-time">${event.time}</div>
                    <div class="event-icon">${event.icon}</div>
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-year">${event.realYear}</p>
                    <p class="event-desc">${event.description}</p>
                    ${subEventsHtml}
                </div>
            `;

            clockEventsContainer.appendChild(card);
            eventCards.push(card);
        });
    }

    // Format numbers with padded leading zero
    function padZero(num) {
        return num.toString().padStart(2, '0');
    }

    // Map scroll progress non-linearly to total seconds in the day (0 to 86399)
    function getSecondsFromProgress(progress) {
        let seconds = 0;

        if (progress <= 0.2) {
            // 0% - 20% scroll maps to 00:00:00 -> 21:00:00 (0 -> 75600s)
            const segmentProgress = progress / 0.2;
            seconds = segmentProgress * 75600;
        } else if (progress <= 0.4) {
            // 20% - 40% scroll maps to 21:00:00 -> 23:50:00 (75600 -> 85800s)
            const segmentProgress = (progress - 0.2) / 0.2;
            seconds = 75600 + segmentProgress * (85800 - 75600);
        } else if (progress <= 0.6) {
            // 40% - 60% scroll maps to 23:50:00 -> 23:59:00 (85800 -> 86340s)
            const segmentProgress = (progress - 0.4) / 0.2;
            seconds = 85800 + segmentProgress * (86340 - 85800);
        } else if (progress <= 0.8) {
            // 60% - 80% scroll maps to 23:59:00 -> 23:59:55 (86340 -> 86395s)
            const segmentProgress = (progress - 0.6) / 0.2;
            seconds = 86340 + segmentProgress * (86395 - 86340);
        } else {
            // 80% - 100% scroll maps to 23:59:55 -> 23:59:59 (86395 -> 86399s)
            const segmentProgress = (progress - 0.8) / 0.2;
            seconds = 86395 + segmentProgress * (86399 - 86395);
        }

        return Math.floor(seconds);
    }

    // Update Clock and show matching event card
    function updateClock(progress) {
        const totalSeconds = getSecondsFromProgress(progress);

        // Derive HH:MM:SS
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Render digits
        if (clockH) clockH.textContent = padZero(hours);
        if (clockM) clockM.textContent = padZero(minutes);
        if (clockS) clockS.textContent = padZero(seconds);

        // Find appropriate active card based on time
        let activeCard = null;
        let maxTime = -1;

        eventCards.forEach(card => {
            const cardTime = parseInt(card.getAttribute('data-seconds'), 10);
            if (cardTime <= totalSeconds && cardTime > maxTime) {
                maxTime = cardTime;
                activeCard = card;
            }
        });

        // Toggle active states smoothly
        eventCards.forEach(card => {
            if (card === activeCard) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function initClockTimeline() {
        clockDisplay = document.getElementById('clock-display');
        clockH = document.getElementById('clock-h');
        clockM = document.getElementById('clock-m');
        clockS = document.getElementById('clock-s');

        buildClockEvents();

        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            // Fallback rendering standard midnight
            updateClock(0);
            return;
        }

        // Pinned ScrollTrigger for the Clock Section
        ScrollTrigger.create({
            trigger: '#phase3',
            start: 'top top',
            end: '+=4500', // Pin duration length
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                updateClock(self.progress);
            }
        });
    }

    function init() {
        initClockTimeline();
    }

    return {
        init
    };
})();

window.CosmicClock = CosmicClock;
