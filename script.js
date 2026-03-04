document.addEventListener('DOMContentLoaded', () => {
    const hbBtn = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('menuOverlay');
    const toggleIcon = document.getElementById('toggleIcon');
    const menuLinks = document.querySelectorAll('.menu-link, .nav-link-simple');

    // Menu Logic
    hbBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        overlay.classList.toggle('open');
        toggleIcon.classList.toggle('bi-list');
        toggleIcon.classList.toggle('bi-x-lg');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('open');
            toggleIcon.classList.add('bi-list');
            toggleIcon.classList.remove('bi-x-lg');
        });
    });

    document.addEventListener('click', (e) => {
        if (!overlay.contains(e.target) && !hbBtn.contains(e.target)) {
            overlay.classList.remove('open');
            toggleIcon.classList.add('bi-list');
            toggleIcon.classList.remove('bi-x-lg');
        }
    });
});