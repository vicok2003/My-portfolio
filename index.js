// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('act');
});


// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');


// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });

//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY > 100); 

//      menuIcon.classList.remove('bx-x')
//     navbar.classList.remove('act')
// };

let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
        let sectionOffset = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollY >= sectionOffset && scrollY < sectionOffset + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close the mobile menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('act');
});








// Js Animation
ScrollReveal({
    //  reset: true,
     distance: "80px",
     duration: 2000,
     delay: 200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// autotyping js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Writer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
