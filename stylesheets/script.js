document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-menu');


    let currentIndex = 0;

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

	
	document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 2,
                behavior: 'smooth'
            });
            navMenu.classList.remove('show');
        });
    });
});
