const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/ClientController')
const { checkAuth } = require('../helpers/auth')

router.get('/add', checkAuth, ClientController.createagendamentos)
router.post('/add', checkAuth, ClientController.createToughtSave)
router.get('/dashboard', checkAuth, ClientController.dashboard)
router.get('/', checkAuth, ClientController.showClients)

module.exports = router