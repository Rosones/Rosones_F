document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show"); // Agrega la clase para hacer visible la imagen
        }, index * 2000); // 2000ms = 2 segundos entre cada imagen
    });
});