const menuButton = document.getElementById('menu-open');
const navigation = document.querySelector('nav');
const menuExitButton = document.getElementById('menu-exit');

menuButton.addEventListener('click', () => {
    navigation.classList.add('menu-button')
})

menuExitButton.addEventListener('click', () => {
    navigation.classList.remove('menu-button')
})

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const offset = element.getBoundingClientRect().top - headerHeight;
        window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
    }
}

const homeLink = document.getElementById('hero-link');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');

if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#about');
    });
}
if (projectsLink) {
    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#projects');
    });
}