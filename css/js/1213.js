
$(document).ready(function () {
    $('.menu1').click(function (e) { 
        var menu11=$(this).attr('href');
        
        var elemenmenu11=$(menu11);
    
        $("body, html").animate({
            scrollTop:elemenmenu11.offset().top-220
        });
        e.preventDefault();
     
    });

    $('.menu1').click(function () { 

        $(".menu").removeClass("ada");
        
    });
    
});

$(document).ready(function () {
    $('.menu2').click(function (e) { 
        var menu21=$(this).attr('href');
        
        var elemenmenu21=$(menu21);
    
        $("body, html").animate({
            scrollTop:elemenmenu21.offset().top-120
        })
    
        e.preventDefault();
    });

    $('.menu2').click(function () { 

        $(".menu").removeClass("ada");
        
    });    
    
});

$(document).ready(function () {
    $('.menu3').click(function (e) { 
        var menu31=$(this).attr('href');
        
        var elemenmenu31=$(menu31);
    
        $("body, html").animate({
            scrollTop:elemenmenu31.offset().top-85
        })
    
        e.preventDefault();
    });

    $('.menu3').click(function () { 

        $(".menu").removeClass("ada");
        
    }); 
        
});


$(document).ready(function () {
    $('.menu4').click(function (e) { 
        var menu41=$(this).attr('href');
        
        var elemenmenu41=$(menu41);
    
        $("body, html").animate({
            scrollTop:elemenmenu41.offset().top-150
        })
    
        e.preventDefault();
    });

    $('.menu4').click(function () { 

        $(".menu").removeClass("ada");
        
    });     
});


$(document).ready(function () {
    $('.menu5').click(function (e) { 
        var menu51=$(this).attr('href');
        
        var elemenmenu51=$(menu51);
    
        $("body, html").animate({
            scrollTop:elemenmenu51.offset().top-120
        })
    
        e.preventDefault();
    });
    
    $('.menu5').click(function () { 

        $(".menu").removeClass("ada");
        
    }); 
});

$(document).ready(function () {
    $('.menu6').click(function (e) { 
        var menu61=$(this).attr('href');
        
        var elemenmenu61=$(menu61);
    
        $("body, html").animate({
            scrollTop:elemenmenu61.offset().top-120
        })
    
        e.preventDefault();
    }); 
    $('.menu6').click(function () { 

        $(".menu").removeClass("ada");
        
    });    
});


$(document).ready(function () {
    $('.menu7').click(function (e) { 
        var menu71=$(this).attr('href');
        
        var elemenmenu71=$(menu71);
    
        $("body, html").animate({
            scrollTop:elemenmenu71.offset().top-100
        })
    
        e.preventDefault();
    });
    $('.menu7').click(function () { 

        $(".menu").removeClass("ada");
        
    });
        
});



$(document).ready(function () {
    $('.humber').click(function () { 

        $(".menu").toggleClass("ada");
        
    });

    $('.lingkaran').click(function () { 
        $('.menu').removeClass('ada');
        
    });
});



$(window).scroll(function(){  
    var wscroll=$(this).scrollTop();
    console.log(wscroll)
    
    if (wscroll >= $('.frame2').offset().top-220) {
        $(".frame1 .header").addClass("muncul");
    } else {
        $(".frame1 .header").removeClass("muncul");
    }

    if (wscroll >= $('.frame2').offset().top-225)  {
        $(".judul1").addClass("satu");
        $(".isibaru").addClass("satu");
    } else {
        $(".judul1").removeClass("satu");
        $(".isibaru").removeClass("satu");
    }

    if (wscroll >= $('.education').offset().top-160) {
        $(".education").addClass("satu");
    } else {
        $(".education").removeClass("satu");
  
    }

    if (wscroll >= $('.organisasi').offset().top-300) {
        $(".organisasi").addClass("satu");
    } else {
        $(".organisasi").removeClass("satu");
  
    }

    if (wscroll >= $('.certif').offset().top-155) {
        $(".certif").addClass("satu");
    } else {
        $(".certif").removeClass("satu");
  
    }

    if (wscroll >= $('.frame212').offset().top-70) {
        console.log('oke')
        $(".cac").addClass("satu");
    } else {
        $(".cac").removeClass("satu");
  
    }

    if (wscroll >= $('.frame31').offset().top-150) {
        console.log('oke')
        $(".frame31").addClass("satu");
        $(".office").addClass("satu");
    } else {
        $(".frame31").removeClass("satu");
        $(".ofiice").removeClass("satu");
  
    }

    if (wscroll >= $('.kn').offset().top-150) {
        $(".kn").addClass("satu");
    } else {
        $(".kn").removeClass("satu");
  
    }
    
 
});


$(window).on('load', function(){
    $('.hai').addClass('load1');
    $('.foto').addClass('load2');
    $('.silang2').addClass('load3');
    $('.silang1').addClass('load4');
    $('.bulat1').addClass('load5');
    $('.bulat2').addClass('load6');
});



