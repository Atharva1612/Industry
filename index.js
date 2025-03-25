document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.resp-nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle the nav visibility
            nav.classList.toggle('hidden');

            // Animate the burger icon
            const lines = burger.querySelectorAll('hr');

            if (burger.classList.contains('active')) {
                // Return animation
                lines[0].style.transform = 'rotate(0) translate(0, 0)';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'rotate(0) translate(0, 0)';
                burger.classList.remove('active');
            } else {
                // Open animation
                lines[0].style.transform = 'rotate(50deg) translate(7px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-50deg) translate(7px, -5px)';
                burger.classList.add('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.add('hidden');
                
                // Reset the burger animation when closing
                const lines = burger.querySelectorAll('hr');
                lines[0].style.transform = 'rotate(0) translate(0, 0)';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'rotate(0) translate(0, 0)';
                burger.classList.remove('active');
            });
        });
    }
});
