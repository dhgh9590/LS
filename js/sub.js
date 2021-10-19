$(document).ready(function(){

    $(".aside > .menu > ul > li").click(function(){
        $(this).find(".menu-list").slideToggle();
        $(this).toggleClass("click");
    });
    $(".aside > .sub_menu > ul > li").click(function(){
        $(this).find(".sub_menu-list").slideToggle();
        $(this).toggleClass("click");
    });

});