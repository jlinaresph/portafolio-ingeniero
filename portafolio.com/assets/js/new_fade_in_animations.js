
document.addEventListener('DOMContentLoaded', (event) => {
    // Animación de desvanecimiento para el título principal
    var tituloPrincipal = document.getElementById('titulo-principal');
    if (tituloPrincipal) {
        tituloPrincipal.style.opacity = 0;
        tituloPrincipal.style.transition = 'opacity 1s';
        setTimeout(() => tituloPrincipal.style.opacity = 1, 100);
    }

    // Animación de desvanecimiento para los enlaces del menú
    var enlacesMenu = document.querySelectorAll('.enlace-menu');
    enlacesMenu.forEach((enlace, index) => {
        enlace.style.opacity = 0;
        enlace.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => enlace.style.opacity = 1, 500 * index);
    });
});
