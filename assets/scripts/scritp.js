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

var articulos = document.querySelectorAll(".articulos__enlace");
var articulo = articulos__enlace.nextElementSibling;
console.log(articulo);
console.log(articulos);

function abrirArticulo(){
    articulo.classList.toggle("toggle__articulo");
}
articulos.addEventListener("click", abrirArticulo);

// var articuloUno = document.getElementById("articuloUno");
// console.log(articuloUno);
// var articulo1 = document.getElementById("articuloUno").nextElementSibling;
// console.log(articulo1);
var articuloUno = document.querySelector(".articuloUno");
var articulos = document.querySelector(".articuloUno").nextElementSibling;

function abrirArticulo(){articulo1.classList.toggle("toggle__articulo")}
articuloUno.addEventListener("click", abrirArticulo);

function cerrarArticulo(){
    articulo1.classList.remove("toggle__articulo")
}
articulo1.addEventListener("click", cerrarArticulo)

// var articulos = document.querySelectorAll(".articulos__enlace");
// var articulo = articulos__enlace.nextElementSibling;
// console.log(articulo);
// console.log(articulos);

// function abrirArticulo(){
//     articulo.classList.toggle("toggle__articulo");
// }
// articulos.addEventListener("click", abrirArticulo);

// // var articuloUno = document.getElementById("articuloUno");
// // console.log(articuloUno);
// // var articulo1 = document.getElementById("articuloUno").nextElementSibling;
// // console.log(articulo1);
// var articuloUno = document.querySelector(".articuloUno");
// var articulos = document.querySelector(".articuloUno").nextElementSibling;

// function abrirArticulo(){articulo1.classList.toggle("toggle__articulo")}
// articuloUno.addEventListener("click", abrirArticulo);

// function cerrarArticulo(){
//     articulo1.classList.remove("toggle__articulo")
// }
// articulo1.addEventListener("click", cerrarArticulo)




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
