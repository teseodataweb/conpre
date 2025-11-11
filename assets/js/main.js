// Preloader functionality
window.addEventListener('load', function() {
    // Add 'loaded' class to body to trigger CSS animations
    document.body.classList.add('loaded');

    // Remove loader from DOM after animation completes
    setTimeout(function() {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        if (loaderWrapper) {
            loaderWrapper.remove();
        }
    }, 1300); // Wait for CSS transition to complete (0.3s + 1s from CSS)
});

// Fallback: Remove loader after max 3 seconds even if load event doesn't fire
setTimeout(function() {
    if (!document.body.classList.contains('loaded')) {
        document.body.classList.add('loaded');
        setTimeout(function() {
            const loaderWrapper = document.querySelector('.loader-wrapper');
            if (loaderWrapper) {
                loaderWrapper.remove();
            }
        }, 1300);
    }
}, 3000);
