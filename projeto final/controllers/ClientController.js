const Client = require('../models/Client')
const User = require('../models/User')

module.exports = class ClientController{
    static async showClients(req, res){
        res.render('clients/home')
    }

    static async dashboard(req, res) {
        res.render('clients/dashboard')
    }
    static createagendamentos (req,res ){
        res.render('clients/create')
    }

    static async createToughtSave(req,res){

        const tought = {
            title: req.body.title,
            Userid: req.session.userid
        }

       try{
        await tought(tought)
        req.flash ('message', 'agendamento criado com sucesso ')
        req.session.save(()=>{
            res.redirect('/clients/dashboard')
        })
       }  catch (error){
        console.log(error)
       }


    }
    
}