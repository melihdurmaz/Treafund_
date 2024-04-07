const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const expphbs = require('express-handlebars')
const router = express.Router()
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')

app.use(express.static('public'))
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://127.0.0.1/Treafund_db')
  .then(() => console.log('Connected!'))


app.use(expressSession({
  secret: 'testotaylan',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/nodeblog_db' })
}))

app.use((req, res, next) => {
  const { userId } = req.session
  if (userId) {
    res.locals = {
      displayLink: true
    }
  }
  else {
    res.locals = {
      displayLink: false
    }
  }
  next()
}
)



app.engine('handlebars', expphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


//routers klasorünü kullanmak için klasörü dahil ettik
const main = require('./routers/main')
const users = require('./routers/users')

app.use('/', main)
app.use('/users', users)

/**burada ise serverimi görmek için app.listen komutunu kullandım */
app.listen(port, hostname, () => {
  console.log(`server çalışıyor,http://${hostname}:${port}`)
})