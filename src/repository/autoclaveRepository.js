var ADODB = require('node-adodb');
ADODB.debug = true;
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=d:/node-adodb.mdb;');
module.exports = {

    async coletarDados(){
        try {
            const registros = await connection.query('SELECT top 10 * FROM REGISTRO_CURA');
            console.log(JSON.stringify(registros))
            //console.log(JSON.stringify(users, null, 2));
          } catch (error) {
            console.error(error);
          }
        
    }
}