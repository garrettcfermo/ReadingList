const books = require('../data/booklistdata')

module.exports = app => {
  app.get('/', (req,res) => res.render('index'))
  app.get('/list', (req, res) => res.render('list',{list: books.getBooks()}))
  app.get('/addBook', (req,res) => res.render('bookInfo'))
}


