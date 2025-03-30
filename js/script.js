document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.d-md-none.ms-auto');
    const mobileNav = document.getElementById('mobile-navigation');
    
    menuButton.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });
});