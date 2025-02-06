document.addEventListener('DOMContentLoaded', function () {
    const individualRadio = document.getElementById('individual');
    const coApplicantRadio = document.getElementById('coApplicant');
    const coApplicantForm = document.getElementById('coApplicantForm');

    individualRadio.addEventListener('change', function () {
        if (individualRadio.checked) {
            coApplicantForm.style.display = 'none';
        }
    });

    coApplicantRadio.addEventListener('change', function () {
        if (coApplicantRadio.checked) {
            coApplicantForm.style.display = 'block';
        }
    });

    const mainForm = document.getElementById('mainForm');
    mainForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // alert('Form submitted successfully!');
        mainForm.reset();
        coApplicantForm.style.display = 'none';
    });

    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        formSuccess.style.display = 'block';
        contactForm.reset();
    });
});