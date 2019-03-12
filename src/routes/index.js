import {Router} from 'express'
import {indexController} from "../controllers/indexController";
import {addLinks} from "../utils/addLinks";
import {sendCreatedResponse, sendOkResponse} from "../utils/responses";
import {getClients, postClient} from "../controllers/clientController";

export default (config) => {
    const routes = Router();

    /**
     * @api {get} / Get message from server if it is up
     * @apiName Index
     * @apiGroup Index
     *
     * @apiSuccess {String} message Server up!
     * @apiSuccessExample {String} Success-Response:
     *     HTTP/1.1 200 OK
     *     message: "Server up!"
     */
    routes.get('/',
        indexController,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    /**
     * @api {get} /clients GET - Get the clients' list
     * @apiName GetClients
     * @apiGroup Clients
     *
     * @apiSuccess {Array} clients List of clients
     * @apiSuccessExample {Object} Success-Response:
     *     HTTP/1.1 200 OK
     *     clients: [
     *       {
     *         "name": "John Snow",
     *         "phone": "666 111 222"
     *       },
     *       {
     *         "name": "Tony Stark",
     *         "phone": "664 232 988"
     *       },
     *     ]
     */
    routes.get('/clients',
        getClients,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendOkResponse(result, req, res)
    );

    /**
     * @api {post} /clients POST - Create a new client
     * @apiName PostClient
     * @apiGroup Clients
     *
     * @apiParam {String} [name] Client's name
     * @apiParam {String} [phone] Client's phone number
     *
     * @apiSuccess (Success 201) {Object} client Info related with the new client
     * @apiSuccessExample {Object} Success-Response:
     *     HTTP/1.1 201 Created
     *     client: {
     *       "name": "John Snow",
     *       "phone": "666 111 222"
     *     }
     */
    routes.post('/clients',
        postClient,
        (result, req, res, next) => addLinks(result, req, res, next),
        (result, req, res, next) => sendCreatedResponse(result, req, res)
    );

    return routes;
}