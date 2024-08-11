// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Example API route for alerts
app.get('/api/alerts', (req, res) => {
    res.json({
        alerts: [
            { message: 'Flood warning in your area.' },
            { message: 'Heatwave expected this weekend.' }
        ]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
