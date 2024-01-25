function enviarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera estándar
    
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // Aquí podrías realizar acciones adicionales, como enviar los datos a un servidor

    // Mostrar una alerta con el mensaje enviado
    alert('Mensaje enviado:\n\nNombre: ' + nombre + '\nCorreo: ' + correo + '\nMensaje: ' + mensaje);
}