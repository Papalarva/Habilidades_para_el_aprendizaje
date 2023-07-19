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

const menu__mostrar = document.querySelector(".menu__boton");
var menu = document.querySelector(".menu");

function mostrarMenu() {menu.classList.toggle("toggle__menu");}
menu__mostrar.addEventListener("click", mostrarMenu);

function cerrarMenu() {menu.classList.remove("toggle__menu");}
menu.addEventListener("click", cerrarMenu);


var mostrarArticulo = document.querySelector(".articulos__enlace");
var articulos = document.querySelector(".articulos__enlace").nextElementSibling;

function abrirArticulo(){articulos.classList.toggle("toggle__articulo")}
mostrarArticulo.addEventListener("click", abrirArticulo);

function cerrarArticulo(){
    articulos.classList.remove("toggle__articulo")
    var mostrarArticulo = document.querySelector(".articulos__enlace");
}
articulos.addEventListener("click", cerrarArticulo)




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
