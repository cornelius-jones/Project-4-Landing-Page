/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 */

let sections = document.querySelectorAll('section');
let ulNav = document.getElementById('navbar__list');

/**
 * End Global Variables
 */

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

for (let i = 0; i < sections.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "<a class = 'menu__link' href = ''>" + sections[i].getAttribute("data-nav") + "</a>";
    ulNav.appendChild(li);

};

// Sets active class to active menu item 
let sec = document.querySelectorAll(".menu__link");

function makeActive() {
    for (let i = 0; i < sec.length; i++)

        sec[i].classList.remove('active_button');
    this.classList.add('active_button');

};

// Set sections to active
for (let i = 0; i < sec.length; i++)
    sec[i].addEventListener('click', makeActive);


// Check if section is visible
function sectionInViewPort(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};

// Scroll to each section  
const secLinks = document.querySelectorAll(".menu__link");
for (let i = 0; i < secLinks.length; i++) {
    secLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
        let index = i + 1;
        let scrolled_section = document.getElementById("section" + index);
        scrolled_section.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });


    });
};