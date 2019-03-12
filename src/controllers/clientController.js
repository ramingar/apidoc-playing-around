const getClients = (req, res, next) => {
    const result = {
        _data: {
            clients: [
                {id: 1, name: 'Antonio García', phone: '666 222 333'},
                {id: 2, name: 'José Martínez', phone: '666 123 543'},
                {id: 3, name: 'Perico Gimeno', phone: '622 987 456'}
            ]
        }
    };

    next(result);
};

const postClient = (req, res, next) => {
    const {name, phone} = req.body;

    const result = {
        _data: {client: {id: 4, name, phone}}
    };

    next(result);
};

export {getClients, postClient};