// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is working!");

    // Example: Dynamic content loading (real-time alerts)
    fetch('/api/alerts')
        .then(response => response.json())
        .then(data => {
            const alertContainer = document.getElementById('alert-container');
            data.alerts.forEach(alert => {
                const alertElement = document.createElement('div');
                alertElement.className = 'alert alert-warning';
                alertElement.textContent = alert.message;
                alertContainer.appendChild(alertElement);
            });
        })
        .catch(error => console.error('Error fetching alerts:', error));
});
