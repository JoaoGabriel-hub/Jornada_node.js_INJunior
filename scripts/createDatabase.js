const sequelize = require("../config/database")


async function createDatabase() {
    try {
        await sequelize.sync({ force: true });
        console.log('Banco de dados criado com sucesso.');
    } catch(error) {
        console.log('Erro na criação do banco de dados.', error);
    }
}

module.exports = createDatabase;