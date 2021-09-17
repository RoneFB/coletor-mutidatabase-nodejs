const express = require('express');
const bodyParser = require('body-parser')
require('./src/database')
var cors = require('cors')
const cron = require("node-cron");
const app =  express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const ctrInit = require('./src/controller/ControllerInit')

const autoRepo = require('./src/repository/autoclaveRepository')

cron.schedule("* * * * *", () => {autoRepo.coletarDados()});

app.use('/api', ctrInit);
app.listen(process.env.PORT || 3001);