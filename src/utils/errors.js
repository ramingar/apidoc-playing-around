const errorHandler = (err, environment) => {

    // no stacktraces leaked to user
    const responseJson = {
        message: err.message,
        error  : {}
    };

    // development error handler
    // will print stacktrace
    if ('development' === environment || 'test' === environment) {
        responseJson.error = err;
    }

    return responseJson;
};

const error404 = () => {
    const err  = Error('Not Found');
    err.status = 404;
    return err;
};

export {errorHandler, error404};