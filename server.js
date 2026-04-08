const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Camera routes
app.get('/api/cameras', (req, res) => {
    // Logic to get all cameras
    res.send('List of cameras');
});

app.get('/api/cameras/:id', (req, res) => {
    const cameraId = req.params.id;
    // Logic to get a camera by ID
    res.send(`Camera details for ${cameraId}`);
});

app.post('/api/cameras', (req, res) => {
    const cameraData = req.body;
    // Logic to add a new camera
    res.send(`Camera added with data: ${JSON.stringify(cameraData)}`);
});

app.put('/api/cameras/:id', (req, res) => {
    const cameraId = req.params.id;
    const cameraData = req.body;
    // Logic to update a camera by ID
    res.send(`Camera ${cameraId} updated with data: ${JSON.stringify(cameraData)}`);
});

app.delete('/api/cameras/:id', (req, res) => {
    const cameraId = req.params.id;
    // Logic to delete a camera by ID
    res.send(`Camera ${cameraId} deleted`);
});

// Admin routes
app.get('/api/admin/cameras', (req, res) => {
    // Logic for admin to get all cameras
    res.send('Admin view: List of all cameras');
});

app.post('/api/admin/cameras', (req, res) => {
    const cameraData = req.body;
    // Logic for admin to add a new camera
    res.send(`Admin added camera with data: ${JSON.stringify(cameraData)}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});