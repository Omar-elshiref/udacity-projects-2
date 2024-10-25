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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const uList = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


sections.forEach(section => {
    const navItem = document.createElement("li");
    const navText = section.getAttribute("data-nav");
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${navText}</a>`;
    uList.appendChild(navItem);
});

// Add class 'active' to section when near top of viewport

function makeActive() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
}

// Call the function on scroll event
document.addEventListener("scroll", makeActive);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

document.querySelectorAll(".menu__link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionID = this.getAttribute("href");
        document.querySelector(sectionID).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Set sections as active

const navLinks = document.querySelectorAll(".menu__link");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(link => link.classList.remove("active-link"));
        
        this.classList.add("active-link");
    });
});




