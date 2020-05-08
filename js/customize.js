// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });


 });


/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
$(function() {
    $('#modal1').hide();                                                                //先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>');                             //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');           //新增關閉按鈕
    $('.modal_overlay').hide();                                                         //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal1').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);

});


$(function() {
    $('#modal2').hide();//先隱藏視窗
    $('.modal2').after('<div class="modal_overlay2"></div>'); //新增透明底
    $('.modal2').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay2').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal2').click(function(e) {
        $('.modal_overlay2').fadeIn(100);
        $('.modal2').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal2').hide();
        $('.modal_overlay2').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay2').click(closeModal);
    $('.modal2 .close').click(closeModal);

});

$(function() {
    $('#modal2-1').hide();//先隱藏視窗
    $('.modal2-1').after('<div class="modal_overlay2-1"></div>'); //新增透明底
    $('.modal2-1').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay2-1').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal2-1').click(function(e) {
        $('.modal_overlay2-1').fadeIn(100);
        $('.modal2-1').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal2-1').hide();
        $('.modal_overlay2-1').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay2-1').click(closeModal);
    $('.modal2-1 .close').click(closeModal);
    $('#openModal2-1').click(function(){
        $('#modal2').hide();
    })

});

$(function() {
    $('#modal3').hide();//先隱藏視窗
    $('.modal3').after('<div class="modal_overlay3"></div>'); //新增透明底
    $('.modal3').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay3').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal3').click(function(e) {
        $('.modal_overlay3').fadeIn(100);
        $('.modal3').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal3').hide();
        $('.modal_overlay3').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay3').click(closeModal);
    $('.modal3 .close').click(closeModal);

});

$(function() {
    $('#modal4').hide();//先隱藏視窗
    $('.modal4').after('<div class="modal_overlay4"></div>'); //新增透明底
    $('.modal4').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay4').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal4').click(function(e) {
        $('.modal_overlay4').fadeIn(100);
        $('.modal4').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal4').hide();
        $('.modal_overlay4').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay4').click(closeModal);
    $('.modal4 .close').click(closeModal);

});

$(function() {
    $('#modal5').hide();//先隱藏視窗
    $('.modal5').after('<div class="modal_overlay5"></div>'); //新增透明底
    $('.modal5').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay5').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal5').click(function(e) {
        $('.modal_overlay5').fadeIn(100);
        $('.modal5').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal5').hide();
        $('.modal_overlay5').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay5').click(closeModal);
    $('.modal5 .close').click(closeModal);


});


//searchbox

$(document).ready(function(){
    $(".searchbox .btn-toggle").click(function(){
        $(".sform").slideToggle();
    });
});

$('.searchbox .btn-toggle').click(function(e) {
    $(this).parent('.container').slideToggle(function() {
        if ($(this).is(':visible')) {
            $('.searchbox .btn-toggle').html("收合/CLOSE");
            $('.searchbox .btn-toggle').attr('name', '收合選單/CLOSE');
        } else {
            $('.searchbox .btn-toggle').html("展開/OPEN");
            $('.searchbox .btn-toggle').attr('name', '展開選單/OPEN');
        }
    });
    $(this).stop(true, true).toggleClass('close');
});


//查詢收合
$(function(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
      } 
  });
  }
})
//資訊表格收合
$(function(){
    var acc = document.getElementsByClassName("accordion2");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      } 
  });
  }
})
