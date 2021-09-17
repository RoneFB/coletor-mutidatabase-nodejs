const { Model, DataTypes } = require('sequelize');

class Cura extends Model {
    static init(sequelize){
        super.init({
            teste: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'REGISTRO_CURA'
        })
    }
}

module.exports = Cura