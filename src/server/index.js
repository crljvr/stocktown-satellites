const express = require('express');
const ig = require('instagram-scraping');

const app = express();

app.use(express.static('dist'));

app.get('/api/getPost', (req, res) => {
  ig.scrapePostCode(req.query.id).then((result) => (
    res.send({ ...result })
  ));
});

app.get('/api/getUser', (req, res) => {
  ig.scrapeUserPage('stocksat').then((result) => (
    res.send({ ...result })
  ));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
