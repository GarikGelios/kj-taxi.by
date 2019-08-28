"use strict";

// этот код работает в современном режиме

// add here you main JavaScript code
var test = function() {
  console.log('Hellow world!')
}
// получаем сегодняшнюю дату
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
//добавлем нолики перед одноциферным значением, чтобы соблюсти формат даты
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}
//обновляем переменную today согласно формату
today = yyyy+'-'+mm+'-'+dd;
//машина не должна быть старше 10 лет
var tenYearAgo = yyyy - 10;
document.getElementById("form_caryear").setAttribute("min", tenYearAgo);
document.getElementById("form_caryear").setAttribute("max", yyyy);
document.getElementById("form_caryear").setAttribute("value", yyyy);
//водителю не должно быть менше 18 или больше 60
var eighteenYearAgo = (yyyy - 18) +'-'+mm+'-'+dd;
var sixteenYearAgo = (yyyy - 60) +'-'+mm+'-'+dd;
document.getElementById("form_birthday").setAttribute("min", sixteenYearAgo);
document.getElementById("form_birthday").setAttribute("max", eighteenYearAgo);

// Slick Slider
$(document).ready(function(){
    $('.carousel_taxi-services').slick({
        // centerMode: true,
        // centerPadding: '60px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

//Scroll to form
var scroll_btn = document.querySelector('.scroll-to-form-btn');
const form_profile= document.getElementById('form_profile');
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
    document.getElementById("form_name").focus();
}