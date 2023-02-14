const express = require('express')
const {engine} = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//models
const Client = require('./models/Client')
const User = require('./models/User')

//import routes
const clientsRoutes = require('./routes/clientsRoutes')
const authRoutes = require('./routes/authRoutes')

//import controller
const ClientController = require('./controllers/ClientController')

//template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//receber resposta do body
app.use(
    express.urlencoded({
        extende: true,
    }),
)

app.use(express.json())

//session middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie:{        
            secure: false,
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true
        } 
    }),
)

//flash messages
app.use(flash())

//public path
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }
  next()
})

//Routes
app.use('/clients', clientsRoutes)
app.use('/', authRoutes)

app.get('/', ClientController.showClients)

conn
    //.sync({force: true})
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))