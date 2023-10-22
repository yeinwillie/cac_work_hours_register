// Asignar la clase "activo" a la etiqueta nav en HTML
const button = document.querySelector('.btn_hamburger');
const nav = document.querySelector('.head_nav');
const navItems = document.querySelectorAll('.head_nav_ul_li');

button.addEventListener('click', () => {
  nav.classList.toggle('activo');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Removemos la clase "activo" de todos los elementos
    navItems.forEach(navItem => {
      navItem.classList.remove('activo');
    });
    // Agregamos la clase "activo" solo al elemento que se hizo clic
    item.classList.add('activo');
  });
});

// Cerrar el menu hamburguesa (nav) al hacer click en uno de sus elementos

const navInicio = document.querySelector('#navInicio');
const navProyectos = document.querySelector('#navProyectos');
const navContactame = document.querySelector('#navContactame');


navInicio.addEventListener('click', cerrarMenu); 
//navProyectos.addEventListener('click', cerrarMenu); 
navContactame.addEventListener('click', cerrarMenu); 

function cerrarMenu (){ 
    nav.classList.remove("activo");
}
