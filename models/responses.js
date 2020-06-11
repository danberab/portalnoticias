
const responses = (app, mysql)=> 
{
    
    app.post('/showResponses', (request, response)=> {
        const {comentId} = request.body;
        mysql.query(`select * from respuestas where comentario_id=${comentId}`, (error, resResponses)=>{
            if(error){
                response.status('500').send(JSON.stringify(error));
            }
            else{
                response.json({resResponses});               
            }
        })
    })

    app.post('/registerResponse', (request, response)=> {
        const {respuesta,comentario_id} = request.body;
        mysql.query(`insert respuestas (respuesta, comentario_id) values('${respuesta}', '${comentario_id}')`, (error, resResponses)=>{
            if(error){
                response.status('500').send(JSON.stringify(error));
            }
            else{
                response.json({resResponses});               
            }
        })
    })

}

module.exports = responses;