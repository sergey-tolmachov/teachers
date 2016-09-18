$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-50;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



$(document).ready(function() {
  $(".lesson-title").addClass("animated fadeInDown");
  $(".header").addClass("animated fadeInDown");
  $(".page-title").addClass("animated fadeInDown");
  $(".page-dsc").addClass("animated fadeInDown");
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".lesson-title").addClass("animated fadeOutUp");
        $(".page-title").addClass("animated fadeOutUp");
        $(".page-dsc").addClass("animated fadeOutUp");
        $(".header").addClass("animated fadeOutUp");
        $(".go-top-btn").addClass("animated show fadeInDown");
    }
    
    else {
        $(".lesson-title").removeClass("animated fadeOutUp");
        $(".page-title").removeClass("animated fadeOutUp");
        $(".page-dsc").removeClass("animated fadeOutUp");
        $(".header").removeClass("animated fadeOutUp");
        $(".go-top-btn").removeClass("show");
        $(".lesson-title").addClass("animated fadeInDown");
        $(".page-title").addClass("animated fadeInDown");
        $(".page-dsc").addClass("animated fadeInDown");
        $(".header").addClass("animated fadeInDown");
    }
});




$(document).ready(function(){
    $("#top-btn-box").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-50;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});