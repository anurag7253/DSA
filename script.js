// document.addEventListener('DOMContentLoaded', () => {
//     const mobileNav = document.querySelector('.hamburger');
//     const navbar = document.querySelector('.menubar');

//     const toggleNav = () => {
//         navbar.classList.toggle('active');
//         mobileNav.classList.toggle('hamburger-active');
//     };

//     mobileNav.addEventListener('click', toggleNav);
// });

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!dropdownToggle || !dropdownMenu) return; // Prevent errors

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});
// map 
function initMap() {
    var location = { lat: -25.344, lng: 131.036 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
