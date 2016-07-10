// .mobile-menu проблема при ресайзе
// .button-accent проблема после нажатия


$(document).ready(function(){

  $(".mouse-icon").click(function(){
    $("html, body").animate({
      scrollTop : $(".s-adv").offset().top
    }, 800);
  });

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".mnu-mobile").slideToggle();
    return false;
  });

});
