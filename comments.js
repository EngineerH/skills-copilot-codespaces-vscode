//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create database
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/comments.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the comments database.');
});

//Create table
db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, comment TEXT)');

//Set up template engine
app.set('view engine', 'ejs');

//Set up static files
app.use(express.static('./public'));

//Fire up server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Fire up routes
const commentsRouter = require('./routes/comments');
app.use('/comments', commentsRouter);

//Home route
app.get('/', (req, res) => {
    res.render('index');
});

//404 route
app.use((req, res, next) => {
    res.status(404).send('404: Page not found');
});