/**
 * Script para mostrar un placeholder cuando las imágenes no cargan
 * Agrega este script al final del index.html para manejar imágenes faltantes
 */

document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar errores de carga de imágenes
    function handleImageError(img) {
        // Crear un placeholder SVG
        const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="%23999"%3EImagen no disponible%3C/text%3E%3C/svg%3E';

        img.src = placeholder;
        img.style.opacity = '0.5';

        // Log para debugging
        console.warn('Imagen no encontrada:', img.getAttribute('data-original-src') || img.src);
    }

    // Obtener todas las imágenes
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Guardar la URL original
        const originalSrc = img.src;
        img.setAttribute('data-original-src', originalSrc);

        // Agregar event listener para errores
        img.addEventListener('error', function() {
            handleImageError(this);
        });

        // Si la imagen apunta a un archivo .html, mostrar placeholder inmediatamente
        if (originalSrc && originalSrc.endsWith('.html')) {
            console.warn('Imagen con extensión .html detectada:', originalSrc);
            handleImageError(img);
        }
    });

    console.log('Fix-images.js cargado. Total de imágenes procesadas:', images.length);
});
