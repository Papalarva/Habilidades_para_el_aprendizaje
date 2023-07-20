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

/* FUNCIONES PARA ABRIR Y CERRAR EL MENU MOVIL */

const menu__mostrar = document.querySelector(".menu__boton");
var menu = document.querySelector(".menu");

function mostrarMenu() {menu.classList.toggle("toggle__menu");}
menu__mostrar.addEventListener("click", mostrarMenu);

function cerrarMenu() {menu.classList.remove("toggle__menu");}
menu.addEventListener("click", cerrarMenu);

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

var articulo = document.querySelectorAll(".enlace__articulo");

function abrirArticulo(event) {
    var articuloContenido = event.target.nextElementSibling;
    articuloContenido.classList.toggle("toggle__articulo");
    document.querySelector(".body").style.overflowY = "hidden";
}

function cerrarArticulo(event) {
    var articuloContenido = event.currentTarget;
    articuloContenido.classList.remove("toggle__articulo");
    document.querySelector(".body").style.overflowY = "scroll";
}

articulo.forEach(function(articulo) {
    articulo.addEventListener("click", abrirArticulo);
    articulo.nextElementSibling.addEventListener("click", cerrarArticulo);
});



