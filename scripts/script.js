window.onload = function() {
    document.getElementById("btn--open").addEventListener("click", openNav, false);
    function openNav() {
        document.getElementById("sidebar").style.width = "60%";
    }

    document.getElementById("btn--close").addEventListener("click", closeNav, false);
    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }
}
$(document).ready(function() {
    $(".resume__page").hide();
    $(".services__page").hide();
    $(".contact__page").hide();

    $(".tab__home").click(function(){
    /*   $(".home__page").toggleClass("main__section"); */
      $(".home__page").show();
      $(".resume__page").hide();
      $(".services__page").hide();
      $(".contact__page").hide();
    });

    $(".tab__resume").click(function(){
      /* $(".resume__page").toggleClass("main__section"); */
      $(".resume__page").show();
      $(".home__page").hide();
      $(".services__page").hide();
      $(".contact__page").hide();
    });
  $(".tab__services").click(function(){
   /*  $(".resume__page").toggleClass("main__section"); */
    $(".services__page").show();
    $(".home__page").hide();
    $(".resume__page").hide();
    $(".contact__page").hide();
  });
  $(".tab__contact").click(function(){
  /*  $(".resume__page").toggleClass("main__section"); */
    $(".contact__page").show();
    $(".home__page").hide();
    $(".resume__page").hide();
    $(".services__page").hide();
  });

  $(".carousel").carousel();


}) 

//Enable Google Maps
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}




