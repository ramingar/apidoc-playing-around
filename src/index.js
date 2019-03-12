import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'
import https from 'https'
import configuration from './config'
import routes from './routes'
import {error404, errorHandler} from "./utils/errors";

const app = express();

// CONFIGURATION -------------------------------------------------------------------------
const config = configuration(app);

// MIDDLEWARE ----------------------------------------------------------------------------
app.use(bodyParser.json({
    limit: process.env.APP_BODY_LIMIT || config.bodyLimit
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Client-Version');
    next();
});

// ROUTES --------------------------------------------------------------------------------
app.use('/', routes(config));

// APPLICATION LAUNCHER ------------------------------------------------------------------
// 404 - Not found
app.use(function (req, res) {
    const err = error404();
    res.status(err.status || 404).json(errorHandler(err, config.environment));
});


// SERVER START
const httpsOptions = {
    key : fs.readFileSync(__dirname + '/../key.pem'),
    cert: fs.readFileSync(__dirname + '/../cert.pem')
};

const server = https.createServer(httpsOptions, app).listen(process.env.port || config.port, () => {
    console.log(`Server listening on port ${process.env.port || config.port}`);
});


export {app, server};