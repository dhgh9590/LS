$(document).ready(function(){

    $(".family").click(function(e){
        e.preventDefault();
        $(this).toggleClass("click");
        $(this).find(".sub_menu_list").slideToggle(300);
        $(this).find(".sub_menu_list li a").css({color : "#fff"})
    });

    $(".menu > ul > li").mouseenter(function(){
        $(this).find(".menu_list").stop().slideDown(400);
        $(this).addClass("active");
    })
    .mouseleave(function(){
        $(this).find(".menu_list").stop().slideUp(300);
        $(this).removeClass("active");
    });

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
            if(scrollTop != 0){
                $("#nav").addClass("active");
            }else{
                $("#nav").removeClass("active");
            }
    });

    $(".footer strong").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop : 0},600);
    });

});
