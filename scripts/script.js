window.onload = function() {

    /* Hamburger sidebar */
    document.getElementById("btn--open").addEventListener("click", openNav, false);
    function openNav() {
        document.getElementById("sidebar").style.width = "60%";
    }

    document.getElementById("btn--close").addEventListener("click", closeNav, false);
    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }
    let a;
    let tabs = document.getElementsByClassName("tab");
    for (a=0;a<tabs.length;a++){
      tabs[a].addEventListener("click", closeNav, false);
    }

    /* Add intro to each service */
     let serviceIntro = document.createElement("div");
     let serviceSr = "Perform radiography for specific area.";
     let serviceMri = "Perform imaging services in high resolution using magnetic field and radio waves.";
     let serviceBmd = "Uses dual energy X-ray to detail bone health and density.";
     let serviceOpd = "Perform diagnostic x-ray examination especially for lower face, teeth and jaws.";

     let serviceBlocks;
     serviceBlocks = document.getElementsByClassName('service__block');
      for (let i =0;i<serviceBlocks.length;i++) {
        serviceBlocks[i].addEventListener("mouseover", showDescription, false);
        function showDescription() {
          switch (serviceBlocks[i]) {
            case serviceBlocks[0]:
              serviceIntro.innerHTML= serviceSr;
              serviceBlocks[0].appendChild(serviceIntro);
              break;
            case serviceBlocks[1]: 
              serviceIntro.innerHTML=serviceMri;
              serviceBlocks[1].appendChild(serviceIntro);
              break;
            case serviceBlocks[2]:
              serviceIntro.innerHTML=serviceBmd;
              serviceBlocks[2].appendChild(serviceIntro);
              break;
            case serviceBlocks[3]:
              serviceIntro.innerHTML=serviceOpd;
              serviceBlocks[3].appendChild(serviceIntro);
              break;
          }
          serviceIntro.style.fontSize="1.4rem";
        }
        
        let hideDescription = () =>{
            switch (serviceBlocks[i]) {
              case serviceBlocks[0]:
                serviceBlocks[0].removeChild(serviceIntro);
                break;
              case serviceBlocks[1]:
                serviceBlocks[1].removeChild(serviceIntro);
                break;
              case serviceBlocks[2]:
                serviceBlocks[2].removeChild(serviceIntro);
                break;
              case serviceBlocks[3]:
                serviceBlocks[3].removeChild(serviceIntro);
                break;
            }
        
        }
        serviceBlocks[i].addEventListener('mouseout',hideDescription, false);
      }
    
}
$(document).ready(function() {
    $(".resume__page").hide();
    $(".services__page").hide();
    $(".contact__page").hide();

    $(".tab__home").click(function(){
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
    $(".services__page").show();
    $(".home__page").hide();
    $(".resume__page").hide();
    $(".contact__page").hide();
  });
  $(".tab__contact").click(function(){
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




