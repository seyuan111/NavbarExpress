const express = require('express');
const app = express();

const port = process.env.PORT || 2000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use((req, res, next) => {
    res.locals.navbar = 'navbar'; // Pass the navbar template to all views
    next();
});

app.get('/', (req, res) => {
    // Handle the home route
    res.render('Home');
  });
  
app.get('/about', (req, res) => {
    // Handle the about route
    res.render('About');
  });
  
app.get('/contact', (req, res) => {
    // Handle the contact route
    res.render('Contact');
  });

app.get('/signup', (req,res) => {
    res.render('Signup')
})

app.get('/sliders', (req,res) => {
    res.render('Sliders')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });