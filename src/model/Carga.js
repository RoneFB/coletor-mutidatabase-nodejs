const { DataTypes, Model } = require("sequelize");

class Carga extends Model{
    static init(sequelize){
        super.init({
            teste: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'Carga'
        })
    }
}

module.exports = Carga