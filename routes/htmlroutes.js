

module.exports = app => {
  app.get('/', (req,res) => res.render('index'))
  app.get('/list', (req,res) => res.render('list'))
}