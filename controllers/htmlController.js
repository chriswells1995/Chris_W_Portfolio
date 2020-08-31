const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contact.html'))
  });


  app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/portfolio.html'))
  });

  app.get('/bio', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bio.html'))
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });
}