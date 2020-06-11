const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    database:'portalnoticias',
    user:'root',
    password:''
});

conexion.connect((error)=>{
    if(error){
        console.log('Conexion fallida');
    }else{
        console.log('Conexion exitosa');

    }
});

module.exports = conexion;