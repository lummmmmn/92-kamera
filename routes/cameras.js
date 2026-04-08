const express = require('express');
const router = express.Router();

// Mock Database
let cameras = [];
let currentId = 1;

// Create a new camera
router.post('/', (req, res) => {
    const camera = { id: currentId++, ...req.body };
    cameras.push(camera);
    res.status(201).json(camera);
});

// Get all cameras
router.get('/', (req, res) => {
    res.json(cameras);
});

// Get a camera by ID
router.get('/:id', (req, res) => {
    const camera = cameras.find(cam => cam.id === parseInt(req.params.id));
    if (!camera) return res.status(404).send('Camera not found');
    res.json(camera);
});

// Update a camera
router.put('/:id', (req, res) => {
    const camera = cameras.find(cam => cam.id === parseInt(req.params.id));
    if (!camera) return res.status(404).send('Camera not found');
    Object.assign(camera, req.body);
    res.json(camera);
});

// Delete a camera
router.delete('/:id', (req, res) => {
    const index = cameras.findIndex(cam => cam.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Camera not found');
    cameras.splice(index, 1);
    res.status(204).send();
});

module.exports = router;