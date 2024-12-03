// Variables
const flags = document.querySelectorAll('.flag');
const elementsToTranslate = {
    title: { en: 'Wellness and Healing Center', da: 'Velvære og Helbredelse' },
    servicesTitle: { en: 'Our Services', da: 'Vores Tjenester' },
    aboutTitle: { en: 'About Us', da: 'Om Os' },
    aboutText: {
        en: 'We combine ancient wisdom and modern techniques to provide healing and wellness for body and soul.',
        da: 'Vi kombinerer gammel visdom og moderne teknikker for at fremme helbredelse og velvære.'
    },
    contactTitle: { en: 'Contact Us', da: 'Kontakt Os' },
    footerText: { en: 'All rights reserved.', da: 'Alle rettigheder forbeholdes.' }
};

const slides = document.querySelector('.slides');
let currentSlide = 0;

// Language Switcher
flags.forEach(flag => {
    flag.addEventListener('click', () => {
        const lang = flag.id;
        Object.keys(elementsToTranslate).forEach(id => {
            document.getElementById(id).textContent = elementsToTranslate[id][lang];
        });
    });
});

// Slider
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 3000);

// Service Blocks
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        const title = service.dataset.title;
        const description = service.dataset.description;
        alert(`${title}\n\n${description}\n\nClick "Book Now" to proceed.`);
    });
});
let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}