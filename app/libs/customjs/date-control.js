"use strict"; // этот код работает в современном строгом режиме

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