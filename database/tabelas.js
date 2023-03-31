const Sequelize = require("sequelize");
const connection = require("./database");

const Tabela = connection.define("Usuario", {

    nome: {
        type: Sequelize.STRING,
    },
    empresa: {
        type: Sequelize.STRING,
    },
    dataEmissao: {
        type: Sequelize.DATE,
    },

});

Tabela.sync({force:true}).then(() =>{});

module.exports = Tabela;