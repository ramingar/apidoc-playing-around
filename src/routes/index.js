import {Router} from 'express'
import {indexController} from "../controllers/indexController";
import {addLinks} from "../utils/addLinks";
import {sendOkResponse} from "../utils/responses";

export default (config) => {
    const routes = Router();

    routes.get('/',
        indexController,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    return routes;
}