"use strict"; // этот код работает в современном строгом режиме

//Scroll to form
var scroll_btn = document.querySelector('.scroll-to-form-btn');
const form_profile= document.getElementById('form-profile');
const y_coordinate_form_profile = form_profile.getBoundingClientRect().top + window.pageYOffset;
const yOffset = -120;
function handleButtonClick() {
    window.scrollTo({
        top: y_coordinate_form_profile + yOffset,
        behavior: 'smooth'
    });
}
scroll_btn.addEventListener('click', handleButtonClick);

var focusMethod = function() {
    document.getElementById("form-name").focus();
}

//Scroll to contact
var scroll_btn2 = document.querySelector('.scroll-to-contacts-btn');
const form_contacts = document.getElementById('contacts');
const y_coordinate_contacts = form_contacts.getBoundingClientRect().top + window.pageYOffset;
const yOffset2 = -200;
function handleButtonClick2() {
    window.scrollTo({
        top: y_coordinate_contacts + yOffset2,
        behavior: 'smooth'
    });
}
scroll_btn2.addEventListener('click', handleButtonClick2);

//Scroll to contact
var scroll_btn3 = document.querySelector('.scroll-to-conditions-btn');
const form_conditions = document.getElementById('conditions');
const y_coordinate_conditions = form_conditions.getBoundingClientRect().top + window.pageYOffset;
const yOffset3 = -200;
function handleButtonClick3() {
    window.scrollTo({
        top: y_coordinate_conditions + yOffset3,
        behavior: 'smooth'
    });
}
scroll_btn3.addEventListener('click', handleButtonClick3);

//Scroll to services
var scroll_btn4 = document.querySelector('.scroll-to-services-btn');
const form_services = document.getElementById('services');
const y_coordinate_services = form_services.getBoundingClientRect().top + window.pageYOffset;
const yOffset4 = -50;
function handleButtonClick4() {
    window.scrollTo({
        top: y_coordinate_services + yOffset4,
        behavior: 'smooth'
    });
}
scroll_btn4.addEventListener('click', handleButtonClick4);