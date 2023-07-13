window.addEventListener("load", function(){
    setTimeout(() => {
        loader = this.document.querySelector(".loader");
        loader.style.opacity = "0";
        loader.style.transition = "opacity 1s ease";
        setTimeout(() => {
            loader.style.display = "none" 
        }, 1000);
    }, 1000);
})
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type: "loop",
        autoplay: "true",
        arrow: "true",
        pagination: false,
        perPage: 2, 
        perMove: 1,
        interval: 3000,
        gap: 20,
    } );
    splide.mount();
  } );