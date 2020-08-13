const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logCalculation = require('./controllers/logCalculation');

const app = express();

//APP CONFIG
app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//SET PUBLIC FOLDER PATH
publicPath = __dirname + '/public';


//API ROUTES
app.post('/save', (req, res) => { logCalculation.handleLogCalculation(req, res, publicPath) })


//LOCAL SERVER
app.listen(3001, () => {
    console.log('app is running 3001');
})

