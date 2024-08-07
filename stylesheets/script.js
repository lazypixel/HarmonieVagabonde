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

// Touch event variables
    let touchStartX = 0;
    let touchEndX = 0;

    // Detect touch start
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    // Detect touch end
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            prevSlide();
        }
    }