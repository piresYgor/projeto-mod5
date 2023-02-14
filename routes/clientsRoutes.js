const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/ClientController')
const { checkAuth } = require('../helpers/auth')

router.get('/add', checkAuth, ClientController.createagendamentos)
router.post('/add', checkAuth, ClientController.createClientSave)
router.get('/edit/:id', checkAuth, ClientController.updateClient)
router.post('/edit', checkAuth, ClientController.updateClientSave)
router.get('/dashboard', checkAuth, ClientController.dashboard)
router.post('/remove', checkAuth, ClientController.removeClient)
router.get('/', checkAuth, ClientController.showClients)

module.exports = router