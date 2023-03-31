const Sequelize = require("sequelize")
const connection = new Sequelize("projeto_pedrovitor", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;