document.addEventListener('DOMContentLoaded', function () {
    const individualRadio = document.getElementById('individual');
    const coApplicantRadio = document.getElementById('coApplicant');
    const coApplicantForm = document.getElementById('coApplicantForm');
    const mainForm = document.getElementById('mainForm');
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Handle co-applicant form toggle
    function toggleCoApplicantForm() {
        coApplicantForm.style.display = coApplicantRadio.checked ? 'block' : 'none';
    }

    individualRadio.addEventListener('change', toggleCoApplicantForm);
    coApplicantRadio.addEventListener('change', toggleCoApplicantForm);

    // Handle form submission
    mainForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        mainForm.reset();
        toggleCoApplicantForm(); // Ensures the form resets properly
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        formSuccess.style.display = 'block';
        contactForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3000);
    });

    // Hamburger menu toggle
    // hamburger.addEventListener('click', function () {
    //     navMenu.classList.toggle('active');
    //     hamburger.classList.toggle('active');
    // });
});
