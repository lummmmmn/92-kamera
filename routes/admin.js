const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Secret key for JWT
const SECRET_KEY = 'your_secret_key'; // Replace with your own secret key

// Mock statistics data
const statistics = {
    totalUsers: 100,
    totalSales: 2000,
    totalProducts: 500,
};

// Admin login authentication endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') { // Mock credentials
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
});

// Dashboard statistics endpoint
router.get('/dashboard', (req, res) => {
    // Here we would normally verify the JWT token
    // For simplicity, we will return the statistics directly
    res.json(statistics);
});

module.exports = router;
