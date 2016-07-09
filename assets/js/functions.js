// .mobile-menu проблеьа рпи ресайзе


$(document).ready(function(){

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".mnu-mobile").slideToggle();
    return false;
  });

});
