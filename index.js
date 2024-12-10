const express = require('express');
require('dotenv').config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ received: data });
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});