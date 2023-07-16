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

// var menu__mostrar = document.querySelector(".menu__boton");
// var menu = document.querySelector(".menu");

// function menu__movil() {
//     contenedor__menu.classList.toggle("toggle__contenedor__menu");
//     menu.classList.toggle("toggle__menu");
//     document.querySelector(".body").style.overflowY = "hidden";
// }
// menu__mostrar.addEventListener("click", menu__movil);

// function close__menu__movil() {
//     contenedor__menu.classList.remove("toggle__contenedor__menu");
//     menu.classList.remove("toggle__menu");
//     document.querySelector(".body").style.overflowY = "scroll";
// }
// contenedor__menu.addEventListener("click", close__menu__movil);


const menu__mostrar = document.querySelector(".menu__boton");
var menu = document.querySelector(".menu");

function mostrarMenu() {
    menu.classList.toggle("toggle__menu");
}

menu__mostrar.addEventListener("click", mostrarMenu);

function cerrarMenu() {
    menu.classList.remove("toggle__menu");
}
menu.addEventListener("click", cerrarMenu);


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