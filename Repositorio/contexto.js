const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:DanDatabase@localhost:3306/delilahdb');

class contexto {
    constructor(){
        this.contextoBD = sequelize;
    }
}

module.exports = contexto;