const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine for Express
app.set('view engine', 'ejs');

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (for CSS, JS, etc.)
app.use(express.static('public'));

// GET route for the form
app.get('/', (req, res) => {
    // Render the form without a story
    res.render('index', { story: null });
});

// POST route to handle form submission
app.post('/', (req, res) => {
    const { noun, adjective, verb, adverb } = req.body;
    const story = `The ${adjective} ${noun} ${adverb} ${verb} over the lazy dog.`;
    // Re-render the same page with the story
    res.render('index', { story: story });
});

// Start the server
app.listen(port, () => {
    console.log(`Madlib game listening at http://localhost:${port}`);
});