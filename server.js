const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('./db');
const cors = require('cors');



app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./models/notes.js')(app,mysql);
require('./models/login.js')(app,mysql);
require('./models/coments.js')(app,mysql);
require('./models/responses.js')(app,mysql);


app.listen(3000, (request,response)=>{
    console.log('Server on port 3000');
});