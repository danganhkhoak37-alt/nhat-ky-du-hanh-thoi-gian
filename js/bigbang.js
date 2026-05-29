/* ============================================================
   BIGBANG.JS — Canvas Big Bang Particle Explosion
   ============================================================ */

const BigBang = (function () {
    'use strict';

    let canvas, ctx;
    let particles = [];
    let state = 'IDLE'; // 'IDLE' or 'EXPLODED'
    let animationFrameId;
    let isVisible = true;

    // Singularity dot pulsing radius for IDLE state
    let idlePulse = 0;
    let idlePulseDirection = 1;

    // Ambient floating dust particles
    let ambientParticles = [];

    // Particle Class
    class Particle {
        constructor(x, y, isExplosion = true) {
            this.x = x;
            this.y = y;
            this.isExplosion = isExplosion;

            if (isExplosion) {
                // Outward radial trajectory
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 12 + 2;
                this.vx = Math.cos(this.angle) * this.speed;
                this.vy = Math.sin(this.angle) * this.speed;
                
                this.radius = Math.random() * 3.5 + 1;
                this.alpha = 1;
                this.decay = Math.random() * 0.015 + 0.005;
                this.friction = 0.965; // Slow down over time
                
                // Color transition from white/gold to deep space orange/red
                this.hue = Math.random() * 40 + 15; // 15 to 55 (orange to yellow-orange)
                this.brightness = Math.random() * 30 + 70; // 70% to 100%
            } else {
                // Ambient floating particle
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 1.5 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.decay = 0;
                this.color = `rgba(255, 255, 255, ${this.alpha})`;
            }
        }

        update() {
            if (this.isExplosion) {
                this.vx *= this.friction;
                this.vy *= this.friction;
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
            } else {
                this.x += this.vx;
                this.y += this.vy;
                
                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
        }

        draw() {
            ctx.beginPath();
            if (this.isExplosion) {
                ctx.globalAlpha = Math.max(0, this.alpha);
                
                // Shift color as it decays: white/gold at first, red/orange at end
                let colorString;
                if (this.alpha > 0.7) {
                    colorString = `hsl(${this.hue + 15}, 100%, 95%)`; // super white/gold
                } else if (this.alpha > 0.4) {
                    colorString = `hsl(${this.hue}, 100%, 75%)`;      // golden yellow
                } else {
                    colorString = `hsl(${this.hue - 15}, 90%, 50%)`;  // deep orange-red
                }
                
                ctx.fillStyle = colorString;
                ctx.arc(this.x, this.y, this.radius * this.alpha, 0, Math.PI * 2);
            } else {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = '#ffffff';
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            }
            ctx.fill();
        }
    }

    function setupCanvas() {
        canvas = document.getElementById('bigbang-canvas');
        if (!canvas) return;

        ctx = canvas.getContext('2d');
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        // Add visibility detection via ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                onToggle: self => {
                    isVisible = self.isActive;
                    if (isVisible) {
                        loop();
                    } else {
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            });
        }
    }

    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initialize ambient particles if empty
        if (ambientParticles.length === 0) {
            for (let i = 0; i < 80; i++) {
                ambientParticles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, false));
            }
        }
    }

    function loop() {
        if (!isVisible || !ctx) return;

        // Clear with fade trail effect in exploded state, or black in idle state
        if (state === 'EXPLODED') {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; // nice long particle trails
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // 1. Draw Ambient Floating Dust Stars
        ambientParticles.forEach(p => {
            p.update();
            p.draw();
        });

        // 2. State-Specific Rendering
        if (state === 'IDLE') {
            // Animating pulsing singularity radius
            idlePulse += 0.05 * idlePulseDirection;
            if (idlePulse > 2 || idlePulse < 0) {
                idlePulseDirection *= -1;
            }

            // Draw a subtle halo around the singularity
            const gradient = ctx.createRadialGradient(
                centerX, centerY, 0,
                centerX, centerY, 35 + idlePulse * 5
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, 'rgba(245, 158, 11, 0.8)');
            gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.globalAlpha = 1;
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 40 + idlePulse * 5, 0, Math.PI * 2);
            ctx.fill();
        } else if (state === 'EXPLODED') {
            // Update and draw explosion particles
            particles = particles.filter(p => p.alpha > 0);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Stop animating once all explosion particles fade out
            if (particles.length === 0) {
                cancelAnimationFrame(animationFrameId);
                return;
            }
        }

        animationFrameId = requestAnimationFrame(loop);
    }

    // Public explosion trigger
    function explode() {
        if (state === 'EXPLODED') return;
        state = 'EXPLODED';

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Generate burst particles
        const count = isMobile() ? 250 : 500;
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(centerX, centerY, true));
        }

        // Trigger loop in case it was idle/paused
        isVisible = true;
        loop();
    }

    function isMobile() {
        return window.innerWidth < 768;
    }

    function init() {
        setupCanvas();
        loop();
    }

    return {
        init,
        explode
    };
})();

window.BigBang = BigBang;
