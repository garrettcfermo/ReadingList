const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 3000
const app = express()

// Middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// HTML/API Routes

require('./routes/htmlroutes')(app)



app.listen(PORT, () => console.log(`http://localhost:${PORT}`))