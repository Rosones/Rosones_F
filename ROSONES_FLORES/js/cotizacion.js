document.getElementById("cotizacionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let pedido = document.getElementById("pedido").value.trim();

    // Validación básica
    if (!nombre || !apellido || !telefono || !correo || !pedido) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Enviar email con EmailJS
    emailjs.send("service_q2huw0r", "template_drp6ztg", {
        from_name: nombre + " " + apellido,
        telefono: telefono,
        correo: correo,
        pedido: pedido
    }, "dR1w96rT0DyEznm6R")
    .then(function(response) {
        alert("Cotización enviada correctamente.");
        document.getElementById("cotizacionForm").reset();
    })
    .catch(function(error) {
        console.error("Error al enviar:", error);
        alert("Error al enviar. Intenta nuevamente.");
    });
});