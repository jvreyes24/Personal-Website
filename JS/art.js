/* Art Portfolio page — click-to-enlarge lightbox.
   Works against .art-tile generically, so any new tile added to
   art.html (see the template comment in that file) is wired up
   automatically; nothing here needs to change when art is added. */

document.documentElement.classList.remove('no-js');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const artTiles = document.querySelectorAll('.art-tile');

function openLightbox(src, alt, caption) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImage.src = '';
}

artTiles.forEach((tile) => {
    const image = tile.querySelector('.art-image');
    const caption = tile.querySelector('.art-caption');

    image.addEventListener('click', () => {
        openLightbox(image.src, image.alt, caption ? caption.textContent : '');
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
    }
});
