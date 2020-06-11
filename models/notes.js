const path = require('path');

const notes = (app, mysql)=> 
{
    app.post('/allNotes', (request, response)=> {
        const {id}= request.body;
        mysql.query(`select * from notas where usuario_id=${id}`, (error, resNotes)=>{
            if(error)
                response.status('500').send(JSON.stringify(error));
            else
                response.json({resNotes});
    })
})

    app.post('/registerNote', (request, response)=> {
        const {id,nota,usuario_id} = request.body;
        mysql.query(`insert notas (nota, usuario_id) values('${nota}', '${usuario_id}')`, (error, resNotes)=>{
            if(error)
                response.status('500').send(JSON.stringify(error));
            else
                response.json({resNotes});

        })
    })

    app.post('/showNote', (request, response)=>{
        const id = request.body.id;
        mysql.query(`select * from users where id=(${id});`, (error, resUsers)=>{
            if(error){
                console.log('Error: ', error);
            }else{
                response.json({resUsers});
            }
    })
    })

    app.post('/editNote', (request, response)=>{
        const {id,name,lastname} = request.body;
        mysql.query(`update users set name = '${name}', lastname = '${lastname}' where id=${id}`, (error, resUsers)=>{
            if(error){
                console.log('Error: ', error);
            }else{
                response.json({resUsers});
            }
        })
    })

    app.post('/deleteNote', (request, response)=>{
        const {id} = request.body;
        mysql.query(`delete from users where id=${id}`, (error, resUsers)=>{
            if(error){
                console.log('Error: ', error);
            }else{
                response.json({resUsers});
            }
        })
    })

}

module.exports = notes;