import {Router} from 'express'
import {indexController} from "../controllers/indexController";
import {addLinks} from "../utils/addLinks";
import {sendCreatedResponse, sendOkResponse} from "../utils/responses";
import {getClients, postClient} from "../controllers/clientController";

export default (config) => {
    const routes = Router();

    routes.get('/',
        indexController,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    routes.get('/clients',
        getClients,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    routes.post('/clients',
        postClient,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendCreatedResponse(result, req, res)
    );

    return routes;
}