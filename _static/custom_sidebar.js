document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.primary-toggle');
    const sidebar = document.querySelector('.bd-sidebar-primary');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', (e) => {
            // Stop PyData Sphinx Theme from handling it
            e.stopPropagation();
            
            // Toggle sidebar visibility
            sidebar.classList.toggle('d-none');
            // Check if there is an overlay being shown and hide it
            const overlay = document.querySelector('.overlay-primary');
            if (overlay && overlay.classList.contains('show')) {
                overlay.classList.remove('show');
            }
        }, { capture: true }); // Capture phase to intercept early
    }
});
