// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('act');
});


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); 

     menuIcon.classList.remove('bx-x')
    navbar.classList.remove('act')
};



// Js Animation
ScrollReveal({
    //  reset: true,
     distance: "80px",
     duration: 1000,
     delay: 200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.social-media', { origin: 'right' });
ScrollReveal().reveal('.btn', { origin: 'bottom' });

// autotyping js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Writer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// form validation
const form = document.getElementById('contact-form');
const celebrationElement = document.getElementById('celebration');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation checks
    if (name === '' || email === '' || number === '' || subject === '' || message === '') {
        alert('Please fill in all fields.');
        return; // Prevent form submission if any field is empty
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; // Prevent form submission for an invalid email
    }

    // Mobile number validation (you can add more specific checks if needed)
    if (isNaN(number) || number.length !== 11) {
        alert('Please enter a valid 11-digit mobile number.');
        return; // Prevent form submission for an invalid number
    }

    // If all validations pass, you can proceed with form submission
    const formData = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message
    };


       // Send form data to Formspree endpoint using fetch
       fetch('https://formspree.io/f/xyyrylkd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            celebrationElement.style.display = 'block';
            celebrationElement.classList.add('celebrate');
            setTimeout(() => {
                celebrationElement.style.display = 'none';
            }, 20000); 
            form.reset();
        } else {
            throw new Error('Form submission failed.');
        }
    })
    .catch(error => {
        window.alert('Form submission failed.');
        console.error('Error:', error);
    });

    });


// day/night toggle
var sun = document.getElementById("sun");

sun.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        sun.src="./Assets/icons8-moon-50.png";
    } else {
        sun.src="./Assets/icons8-sun-50.png";
    }
}
