const addLinks = (result, req, res, next) => {
    const links = {
        _links: {
            'index'  : '/',
            'clients': '/clients'
        }
    };

    next(Object.assign({}, links, result))
};

export {addLinks};