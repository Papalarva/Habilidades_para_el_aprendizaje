/* FUNCION PARA LOGRAR EL EFECTOS LOADER */

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

/* CONSTRUCTOR PARA EL SLIDER DE LA INTRODUCCION */

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.habilidades__splide',{
        mediaQuery: 'min',
        breakpoints: {
            1199.98: {
                perPage: 4,
            },
            991.98: {
                perPage: 3,
            },
            650: {
                perPage: 2,
            },
        },
        arrows: false,
        autoplay: "false",
        type: "loop",
        speed: 3000,
        pauseOnHover: false,
        pauseOnFocus: true,
        pagination: false,
        perMove: 1,
        interval: 2500,
        gap: 20,
    } );
    splide.mount();
} );


/* FUNCIONES PARA ABRIR LOS ARTICULOS OCULTOS */
function toggleMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach((menu) => {
      if (menu.id === menuId) {
        menu.classList.toggle('show');
      } else {
        menu.classList.remove('show');
      }
    });
  }