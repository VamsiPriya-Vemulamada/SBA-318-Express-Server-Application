import express from "express";
import morgan from 'morgan';
import characterRouter from "./routes/charcters.js"

const app = express();
const PORT = 4500;

// Set up the Pug template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use Morgan as a logger for HTTP requests
app.use(morgan('dev'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Data structure to store heroes and heroines
let characters = [];

// Route to display the list of heroes and heroines
app.get('/', (req, res) => {
  res.render('characters', { characters });
});

// Use the character router for handling character-related routes
app.use(characterRouter);
// Route to add a new hero or heroine
app.get('/add-character', (req, res) => {
  const { name, role } = req.body;
  characters.push({ name, role });
  res.redirect('/');
});

// Error middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

