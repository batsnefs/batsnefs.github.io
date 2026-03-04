document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        // Initial style for transition
        hamburger.style.transition = 'transform 0.15s ease-in-out, opacity 0.15s ease-in-out';

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);

            // Simple animation: scale down and fade out
            hamburger.style.transform = 'scale(0.5)';
            hamburger.style.opacity = '0';

            setTimeout(() => {
                // Swap icon while hidden
                hamburger.innerHTML = isExpanded ? '&#10005;' : '&#9776;'; // X or Hamburger

                // Scale back up and fade in
                hamburger.style.transform = 'scale(1)';
                hamburger.style.opacity = '1';
            }, 150);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');

                // Apply animation on close as well
                hamburger.style.transform = 'scale(0.5)';
                hamburger.style.opacity = '0';

                setTimeout(() => {
                    hamburger.innerHTML = '&#9776;';
                    hamburger.style.transform = 'scale(1)';
                    hamburger.style.opacity = '1';
                }, 150);
            }
        });
    }
});
