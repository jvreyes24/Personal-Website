/* Digital Design page — portfolio grid behavior.
   This runs against the .project-card class, so any new card added by
   copying the template in uxui.html is picked up automatically; nothing
   here needs to change when a project is added or removed. */

document.documentElement.classList.remove('no-js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const projectCards = document.querySelectorAll('.project-card');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    /* Skip the animation and just show every card. */
    projectCards.forEach((card) => card.classList.add('in-view'));
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

    projectCards.forEach((card, idx) => {
        /* Small stagger so cards in the same row don't all pop in at once. */
        card.style.transitionDelay = `${(idx % 2) * 0.12}s`;
        revealObserver.observe(card);
    });
}
