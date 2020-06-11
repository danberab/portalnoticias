
const login = (app, mysql)=> 
{
    
    app.post('/login', (request, response)=> {
        const {usuario, contrasenia} = request.body;

        mysql.query(`select * from usuarios where usuario ='${usuario}' and contrasenia = '${contrasenia}'`, (error, usuario)=>{
            if(error)
                response.status('500').send('algo salio mal');
            else
                response.json(usuario);
                


        })
    })

}

module.exports = login;