// Check if maintenance mode is enabled
if (typeof maintenanceMode !== 'undefined' && maintenanceMode === true) {
    // Redirect to maintenance page
    window.location.href = '/maintenance.html';
}
