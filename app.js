require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

// connect to mongodb & listen for requests
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?appName=${process.env.MONGO_APP}`;

mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT);
    })
    .catch((err) => console.log(err));

// register new engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})