const addLinks = (result, req, res, next) => {
    const links = {
        _links: {
            'index': '/'
        }
    };

    next(Object.assign({}, links, result))
};

export {addLinks};