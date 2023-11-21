document.addEventListener("DOMContentLoaded", function() {
    const bodyDiv = document.querySelector(".body");
    
    // Utilizamos setTimeout para retrasar la animación inicial
    setTimeout(function() {
        // Aplicamos estilos para que caiga desde arriba
        bodyDiv.style.top = "0";
        bodyDiv.style.opacity = "1";
    }, 1000); // Cambia este valor según tus preferencias de retraso
});