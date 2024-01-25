var canciones = [
    { id: 'btnCancion1', ruta: '/assets/Media/Skyefall.mp3', imagen: '/assets/Media/adele.jpg', reproduciendo: false },
    { id: 'btnCancion2', ruta: '/assets/Media/Tu Falta de Querer.mp3', imagen: '/assets/Media/mon.jpg', reproduciendo: false },
    { id: 'btnCancion3', ruta: '/assets/Media/Enamorado Tuyo.mp3', imagen: '/assets/Media/4.jpg', reproduciendo: false }
];

function cargarCancion(cancion) {
    var audio = new Audio(cancion.ruta);

    audio.addEventListener('ended', function () {
        ocultarAlerta();
        cancion.reproduciendo = false;
        alert('Canción detenida: ' + obtenerNombreCancion(cancion));
    });

    return audio;
}

function obtenerNombreCancion(cancion) {
    return cancion.ruta.split('/').pop().split('.')[0];
}

function toggleReproduccion(cancion) {
    if (!cancion.audio) {
        cancion.audio = cargarCancion(cancion);
    }

    if (cancion.reproduciendo) {
        cancion.audio.pause();
        cancion.reproduciendo = false;
        ocultarAlerta();
        alert('Canción detenida: ' + obtenerNombreCancion(cancion));
    } else {
        cancion.audio.play();
        cancion.reproduciendo = true;
        mostrarAlerta('Reproduciendo: ' + obtenerNombreCancion(cancion));
    }
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}

function ocultarAlerta() {
}

canciones.forEach(function (cancion) {
    document.getElementById(cancion.id).addEventListener('click', function () {
        toggleReproduccion(cancion);
    });
});
