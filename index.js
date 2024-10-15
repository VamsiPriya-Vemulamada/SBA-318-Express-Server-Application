import express from "express";
import morgan from 'morgan';

const app = express();
const PORT = 4500;

// Set up the Pug template engine
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.get('/add-character', (req, res) => {
    const { name, role } = req.body;
    characters.push({ name, role });
    res.redirect('/');
  });

// routes
// app.get("/", (req, res) => {
//     res.send("Work in progress!");
//   });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}.`);
    
});