/* Homepage behavior — scroll reveal for the explore cards and a smooth
   scroll for the "Explore my work" cue. Kept separate from JR_app.js,
   which only handles the intro name animation. */

document.documentElement.classList.remove('no-js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sectionCards = document.querySelectorAll('.section-card');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    sectionCards.forEach((card) => card.classList.add('in-view'));
} else {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    sectionCards.forEach((card, idx) => {
        card.style.transitionDelay = `${(idx % 3) * 0.12}s`;
        revealObserver.observe(card);
    });
}

/* Smooth-scroll for the hero's "Explore my work" link. */
const scrollCue = document.querySelector('.scroll-cue');

if (scrollCue) {
    scrollCue.addEventListener('click', (event) => {
        const target = document.querySelector(scrollCue.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    });
}
