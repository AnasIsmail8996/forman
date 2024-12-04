document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.onclick = function() {
        const navBar = document.querySelector('.nav__bar');
        navBar.classList.toggle("active");
    };
});

