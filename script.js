// const navbarToggler = document.querySelector('.navbar-toggler');
// const collapse = document.querySelector('.collapse');

// navbarToggler.addEventListener('click', () =>{
// navbarToggler.classList.toggle('active');
// collapse.classList.toggle('active');
// })


const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });