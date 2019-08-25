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

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 3000,
    framesCount = 100;

anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function(e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

        // запускаем интервал, в котором
        let scroller = setInterval(function() {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});
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
                    slidesToShow: 3
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