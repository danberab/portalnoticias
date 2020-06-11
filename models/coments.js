const path = require('path');

const coments = (app, mysql)=> 
{
    app.post('/addComent', (request, response)=> {
        const {id} = request.body;
        mysql.query(`select * from notas where id=${id}`, (error, resNotes)=>{
            if(error){
                response.status('500').send(JSON.stringify(error));
            }
            else{
                response.json({resNotes});               
            }
        })
    })

    app.post('/showComents', (request, response)=> {
        const {id} = request.body;
        mysql.query(`select * from comentarios where nota_id=${id}`, (error, resComents)=>{
            if(error){
                response.status('500').send(JSON.stringify(error));
            }
            else{
                response.json({resComents});               
            }
        })
    })

    app.post('/registerComent', (request, response)=> {
        const {comentario,nota_id,usuario_id} = request.body;
        mysql.query(`insert comentarios (comentario,nota_id,usuario_id) values('${comentario}', '${nota_id}','${usuario_id}')`, (error, resComents)=>{
            if(error){
                response.status('500').send(JSON.stringify(error));
            }
            else{
                response.json({resComents});               
            }
        })
    })
}

module.exports = coments;