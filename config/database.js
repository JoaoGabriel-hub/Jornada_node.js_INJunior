const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    'dialect': 'sqlite',
    'storage': './data/database.sqlite',
});

async function testConnectionDatabase() {
    try {
        await sequelize.authenticate()
    } catch (error) {
        console.log('Não foi possível se concetar ao banco de dados');
    }
}

testConnectionDatabase();

module.exports = sequelize;