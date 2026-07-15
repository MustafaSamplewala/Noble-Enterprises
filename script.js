// Sticky Header Effect
window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.height="70px";

        navbar.style.background=
        "rgba(255,255,255,.9)";

        navbar.style.boxShadow=
        "0 10px 30px rgba(0,0,0,.18)";
    }
    else{

        navbar.style.height="80px";

        navbar.style.background=
        "rgba(255,255,255,.75)";
    }

});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){
            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);
        }
        else{
            counter.innerText = target;
        }
    };

    updateCounter();
});

// Contact Form Demo
const form = document.querySelector("#contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const phone =
        form.querySelector('input[name="phone"]').value;

        if(phone.length !== 10){

            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert(
            "Thank you! Your inquiry has been submitted successfully."
        );

        form.reset();
    });
}

const track = document.querySelector(".brand-track");

let position = 0;

function slideBrands(){

    position--;

    if(position <= -(track.scrollWidth / 2)){
        position = 0;
    }

    track.style.transform =
    `translateX(${position}px)`;

    requestAnimationFrame(slideBrands);
}

slideBrands();

const modal =
document.getElementById("imageModal");

const modalImg =
document.getElementById("modalImg");

const images =
document.querySelectorAll(".product-image");

images.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;
    });

});

document
.querySelector(".close-btn")
.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";
    }

});

window.addEventListener("load",()=>{

    const preloader =
    document.getElementById("preloader");

    preloader.style.opacity="0";

    setTimeout(()=>{
        preloader.style.display="none";
    },500);

});

/* MOBILE MENU */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".product-slider").forEach(slider => {

        const slides = slider.querySelectorAll(".slide");
        const prev = slider.querySelector(".prev");
        const next = slider.querySelector(".next");

        let current = 0;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.display = "none";
            });

            slides[index].style.display = "block";
        }

        showSlide(current);

        next.addEventListener("click", () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        prev.addEventListener("click", () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 3000);

    });

});