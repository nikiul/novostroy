// Открытие-закрытие мобильной навигации
var openNavBtnHeader = document.querySelector(".mobile-nav__open-btn-header");
var openNavBtnFooter = document.querySelector(".mobile-nav__open-btn-footer");
var closeNavBtn = document.querySelector(".mobile-nav__close-btn");
var mobileNavWrap = document.querySelector(".mobile__nav-wrap");
var mobileNav = document.querySelector(".mobile__nav");

if(openNavBtnHeader) {
    openNavBtnHeader.addEventListener("click", function(){
        mobileNavWrap.classList.add('mobile__nav-wrap--active');
        mobileNav.classList.add('mobile__nav--active');
    })
}

if(openNavBtnFooter) {
    openNavBtnFooter.addEventListener("click", function(){
        mobileNavWrap.classList.add('mobile__nav-wrap--active');
        mobileNav.classList.add('mobile__nav--active');
    })
}

if(closeNavBtn) {
    closeNavBtn.addEventListener("click", function(){
        mobileNavWrap.classList.remove('mobile__nav-wrap--active');
        mobileNav.classList.remove('mobile__nav--active');
    })
}

// Отрытие баннера c формой при нажатии в блоке hero
var btnPopupFormHero = document.querySelector(".btn__main-hero");
var btnPopupFormHot = document.querySelector(".btn__main-hot");
var btnClosePopupFormHero = document.querySelector(".modal__form-close-btn");
var popupForm = document.querySelector(".modal__form-wrap");

if(btnPopupFormHero) {
    btnPopupFormHero.addEventListener("click", function(){
        popupForm.classList.add("modal__form-wrap--active");
    })
}

if(btnPopupFormHot) {
    btnPopupFormHot.addEventListener("click", function(){
        popupForm.classList.add("modal__form-wrap--active");
    })
}

if(btnClosePopupFormHero) {
    btnClosePopupFormHero.addEventListener("click", function(){
        popupForm.classList.remove("modal__form-wrap--active");
    })
}
// 


// Открытие баннера с благодарностью в блоке selection
var btnOpenPopupSelection = document.querySelector(".btn__main-selection")
var btnClosePopupThanks = document.querySelector(".modal__thanks-close-btn")
var btnOpenPopThanksCompelx = document.querySelector(".btn__complex-call")
var btnOpenPopThanksCompelx2 = document.querySelector(".btn__complex-call2")
var btnOpenPopThanksCompelxMortgage = document.querySelector(".btn-mortgage")
var popupThanks = document.querySelector(".modal__thanks-wrap")

if(btnOpenPopupSelection) {
    btnOpenPopupSelection.addEventListener("click", function(){
        popupThanks.classList.add("modal__thanks-wrap--active");
    })
}

if(btnOpenPopThanksCompelx) {
    btnOpenPopThanksCompelx.addEventListener("click", function(){
        popupThanks.classList.add("modal__thanks-wrap--active");
    })
}

if(btnOpenPopThanksCompelx2) {
    btnOpenPopThanksCompelx2.addEventListener("click", function(){
        popupThanks.classList.add("modal__thanks-wrap--active");
    })
}

if(btnOpenPopThanksCompelxMortgage) {
    btnOpenPopThanksCompelxMortgage.addEventListener("click", function(){
        popupThanks.classList.add("modal__thanks-wrap--active");
    })
}

if(btnClosePopupThanks) {
    btnClosePopupThanks.addEventListener("click", function(){
        popupThanks.classList.remove("modal__thanks-wrap--active");
    })
}
// 


// Открытие баннера с благодарностью в блоке call
var btnOpenPopupCall = document.querySelector(".btn__main-call")
var btnClosePopupThanks = document.querySelector(".modal__thanks-close-btn")
var popupThanks = document.querySelector(".modal__thanks-wrap")

if(btnOpenPopupCall) {
    btnOpenPopupCall.addEventListener("click", function(){
        popupThanks.classList.add("modal__thanks-wrap--active");
    })
}

if(btnClosePopupThanks) {
    btnClosePopupThanks.addEventListener("click", function(){
        popupThanks.classList.remove("modal__thanks-wrap--active");
    })
}
// 


// 
(function($) {
    $(document).ready(function(){
        var hotCarouselMain = $("#hot__items-wrap-main");
        var hotCarouselComplex = $("#hot__items-wrap-complex")
        var schemeCarouselComplex = $(".scheme__card-wrap-visible")

        function hotMainCarouselInit() {
            if($('body').children(hotCarouselMain) && $(window).width() < 1200){
                hotCarouselMain.owlCarousel({
                    loop:true,
                    margin:10,
                    nav:false,
                    dots: true,
                    dotsEach: true,
                    responsive:{
                        0:{
                            center: false,
                            items:1.22
                        },
                        570: {
                            center: true,
                            items:1
                        }
                    }
                });
            }else{
                hotCarouselMain.trigger('destroy.owl.carousel')
            }; 
        };

        function hotComplexCarouselInit() {
            if($('body').children(hotCarouselComplex) && $(window).width() < 1200){
                hotCarouselComplex.owlCarousel({
                    loop:true,
                    margin:10,
                    nav:false,
                    dots: true,
                    dotsEach: true,
                    responsive:{
                        0:{
                            center: false,
                            items:1.22
                        },
                        570: {
                            center: true,
                            items:1
                        }
                    }
                });
            }else{
                hotCarouselComplex.trigger('destroy.owl.carousel')
            }; 
        };

        function schemeComplexCarouselInit() {
            if($('body').children(schemeCarouselComplex) && $(window).width() < 768){
                schemeCarouselComplex.owlCarousel({
                    loop:true,
                    margin:10,
                    nav:false,
                    dots: true,
                    dotsEach: true,
                    responsive:{
                        0:{
                            items:1.2
                        },
                        550: {
                            items: 2
                        }
                    }
                });
            }else{
                schemeCarouselComplex.trigger('destroy.owl.carousel')
            }; 
        };

        hotMainCarouselInit();
        hotComplexCarouselInit();
        schemeComplexCarouselInit();
        $(window).resize(function(){
            hotMainCarouselInit();
            hotComplexCarouselInit();
            schemeComplexCarouselInit();
        });
    }); 
})( jQuery );
// 


// карусель с видео
(function($) {
    $('.reviews__items-wrap').owlCarousel({
        loop:true,
        margin:20,
        center: true,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1.2
            },
            500: {
                items:1.5
            },
            768: {
                items: 2
            },
            1000: {
                items: 3.2
            }
        }
    });
})( jQuery );

// 

// 
(function($) {
    $('#about-complex__items-wrap').owlCarousel({
        loop:true,
        margin:20,
        center: true,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1.2
            },
            500: {
                items:1.5
            },
            768: {
                items: 2
            },
            1000: {
                items: 3.2
            }
        }
    });
})( jQuery );
// 


// Карусели c руководством на странице about
(function($) {
    $('.team__leaders').owlCarousel({
        loop:true,
        margin:20,
        center: true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:2,
                center: false
            },
            750:{
                items: 3
            }
        }
    });
})( jQuery );
// 


// 
(function($) {
    $('.team__managers').owlCarousel({
        loop:true,
        margin:20,
        center: true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:2,
                center: false
            },
            750:{
                items: 3
            }
        }
    });
})( jQuery );
// 


// Аккордеон в списке всех ЖК
const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach(function (item) {
    item.addEventListener('click', showAccordeon);
});

function showAccordeon() {
    let loock = this.previousElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    this.textContent = this.textContent === 'Ещё ЖК' ? 'Скрыть' : 'Ещё ЖК';
} else {
        this.textContent = this.textContent === 'Ещё ЖК' ? 'Скрыть' : 'Ещё ЖК';
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}
// 


// Аккордеон в планировке квартир
const accordeonComplexTitle = document.querySelectorAll('[data-name="accordeon-complex-title"]');

accordeonComplexTitle.forEach(function (item) {
    item.addEventListener('click', showComplexAccordeon);
});

function showComplexAccordeon() {
    let loock = this.previousElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    this.textContent = this.textContent === 'Показать ещё' ? 'Скрыть' : 'Показать ещё';
} else {
        this.textContent = this.textContent === 'Показать ещё' ? 'Скрыть' : 'Показать ещё';
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}
// 


// 
// Выпадающий список количества комнат
(function($) {
    var room = $(".selected-form__list-room");
    var roomList = $('.room__list');
    var roomBtn = $('.room-btn');
    var roomCurrent = $('.room-current__elem');
    
    roomBtn.click(function(e){
        roomList.fadeToggle();
        $(this).toggleClass('isactive')
    });
    
    roomList.on('click', '.room__elem', function(){
        var th = $(this);
        var thText = th.text();
        roomCurrent
        .text(thText)
        .attr('href', 'selected-form__list-room:'+thText+'');
        roomList.fadeOut();
        roomBtn.removeClass('isactive');
    });
    
    $(document).mouseup(function (e){
        if (!room.is(e.target)
        && room.has(e.target).length === 0) {
            roomList.fadeOut();
            roomBtn.removeClass('isactive');
        }
    });
})( jQuery );


// Выпадающий список районов
(function($) {
    var area = $(".selected-form__list-area");
    var areaList = $('.area__list');
    var areaBtn = $('.area-btn');
    var areaCurrent = $('.area-current__elem');
    
    areaBtn.click(function(e){
        areaList.fadeToggle();
        $(this).toggleClass('isactive')
    });
    
    areaList.on('click', '.area__elem', function(){
        var th = $(this);
        var thText = th.text();
        areaCurrent
        .text(thText)
        .attr('href', 'selected-form__list-area:'+thText+'');
        areaList.fadeOut();
        areaBtn.removeClass('isactive');
    });
    
    $(document).mouseup(function (e){
        if (!area.is(e.target)
        && area.has(e.target).length === 0) {
            areaList.fadeOut();
            areaBtn.removeClass('isactive');
        }
    });
})( jQuery );


// Выпадающий список способов оплаты
(function($) {
    var payment = $(".selected-form__list-payment");
    var paymentList = $('.payment__list');
    var paymentBtn = $('.payment-btn');
    var paymentCurrent = $('.payment-current__elem');
    
    paymentBtn.click(function(e){
        paymentList.fadeToggle();
        $(this).toggleClass('isactive')
    });
    
    paymentList.on('click', '.payment__elem', function(){
        var th = $(this);
        var thText = th.text();
        paymentCurrent
        .text(thText)
        .attr('href', 'selected-form__list-payment:'+thText+'');
        paymentList.fadeOut();
        paymentBtn.removeClass('isactive');
    });
    
    $(document).mouseup(function (e){
        if (!payment.is(e.target)
        && payment.has(e.target).length === 0) {
            paymentList.fadeOut();
            paymentBtn.removeClass('isactive');
        }
    });
})( jQuery );


// Выпадающий список стадии строительства
(function($) { 
    var stage = $(".selected-form__list-stage");
    var stageList = $('.stage__list');
    var stageBtn = $('.stage-btn');
    var stageCurrent = $('.stage-current__elem');

    stageBtn.click(function(e){
        stageList.fadeToggle();
        $(this).toggleClass('isactive')
    });

    stageList.on('click', '.stage__elem', function(){
        var th = $(this);
        var thText = th.text();
        stageCurrent
        .text(thText)
        .attr('href', 'selected-form__list-stage:'+thText+'');
        stageList.fadeOut();
        stageBtn.removeClass('isactive');
    });

    $(document).mouseup(function (e){
        if (!stage.is(e.target)
        && stage.has(e.target).length === 0) {
            stageList.fadeOut();
            stageBtn.removeClass('isactive');
        }
    });
})( jQuery );

// Выпадающий список первый взнос
(function($) {
    var contribution = $(".selected-form__list-contribution");
    var contributionList = $('.contribution__list');
    var contributionBtn = $('.contribution-btn');
    var contributionCurrent = $('.contribution-current__elem');
    
    contributionBtn.click(function(e){
        contributionList.fadeToggle();
        $(this).toggleClass('isactive')
    });
    
    contributionList.on('click', '.contribution__elem', function(){
        var th = $(this);
        var thText = th.text();
        contributionCurrent
        .text(thText)
        .attr('href', 'selected-form__list-contribution:'+thText+'');
        contributionList.fadeOut();
        contributionBtn.removeClass('isactive');
    });
    
    $(document).mouseup(function (e){
        if (!contribution.is(e.target)
        && contribution.has(e.target).length === 0) {
            contributionList.fadeOut();
            contributionBtn.removeClass('isactive');
        }
    });
})( jQuery );


// Переключение табами
function openRoom(evt, buildingNumber) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(buildingNumber).style.display = "block";
    evt.currentTarget.className += " active";
};
// 

// ползунок
$('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
    
    $(e.target).css({
      'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');
// 