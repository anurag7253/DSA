const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    const isExpanded = navbar.classList.contains("active");

    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
    mobileNav.setAttribute("aria-expanded", !isExpanded); // Update aria-expanded
    if (!isExpanded) {
      navbar.querySelector('a').focus(); //focuses the first link in the menubar.
    } else {
      mobileNav.focus(); //returns focus to the hamburger.
    }
};

mobileNav.addEventListener("click", toggleNav);

// Initialize aria-expanded on page load
mobileNav.setAttribute("aria-expanded", "false");

//add keyboard accessibility
mobileNav.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Prevent default scroll behavior
        toggleNav();
    }
});