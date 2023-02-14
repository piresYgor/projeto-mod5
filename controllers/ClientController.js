const Client = require('../models/Client')
const User = require('../models/User')

const {Op} = require('sequelize')

module.exports = class ClientController{
    static async showClients(req, res){

        let search = ''

        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old') {
            order =  'ASC'
        }else{
            order = 'DESC'
        }

        const clientsData = await Client.findAll({
            include: User,
            where: {
                name: {[Op.like]: `%${search}%`},
            },
            order: [['createdAt', order]],
        })

        const clients = clientsData.map((result) => result.get({plain: true}))

        let clientsQty = clients.length

        if(clientsQty === 0) {
            clientsQty = false
        }

        res.render('auth/login', {clients, search, clientsQty})
    }

    static async dashboard(req, res) {
        const userId = req.session.userid

        const user = await User.findOne({
            where:{
                id: userId,
            },
            include: Client,
            plain: true,
        })

        // check if user exists
        if(!user){
            res.redirect('/login')
        }

        const clients = user.Clients.map((result) => result.dataValues)

        let emptyClients = false

        if(clients.lenght === 0){
            emptyClients = true
        }

        res.render('clients/dashboard', {clients, emptyClients})
    }
    static createagendamentos (req,res ){
        res.render('clients/create')
    }

    static async createClientSave(req,res){

        const client = {
            name: req.body.name,
            date: req.body.date,
            type_of_cut: req.body.type_of_cut,
            UserId: req.session.userid
        }

       try{
        await Client.create(client)
        req.flash ('message', 'agendamento criado com sucesso ')
        req.session.save(()=>{
            res.redirect('/clients/dashboard')
        })
       }  catch (error){
        console.log(error)
       }


    }

    static async removeClient(req, res){

        const id = req.body.id
        const UserId = req.session.userid

        try {
            await Client.destroy({where: {id: id, UserId: UserId}})

            req.flash ('message', 'Cliente removido com sucesso ')
            req.session.save(()=>{
                res.redirect('/clients/dashboard')
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async updateClient(req, res){

        const id = req.params.id

        const client = await Client.findOne({where: {id: id}, raw: true})

        res.render('clients/edit', {client})

    }

    static async updateClientSave(req, res) {

        const id = req.body.id

        const client = {
            name: req.body.name,
            date: req.body.date,
            type_of_cut: req.body.type_of_cut
        }

    try {
            await Client.update(client, {where: {id: id}})
            req.flash ('message', 'Cliente atualizado com sucesso ')
            req.session.save(()=>{
                res.redirect('/clients/dashboard')
            })
    } catch (error) {
        console.log(error)
    }
        
    }
    
}