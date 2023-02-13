const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('barbearia', 'root', '0708', {
    host: 'localhost',
    dialect:'mysql',
})

try{
    sequelize.authenticate()
    console.log('Conectou, tu é brabo mesmo!')
} catch(err){
    console.log(`Não foi dessa vez: ${err}`)
}

module.exports = sequelize