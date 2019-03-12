const sendOkResponse = (result, req, res) => {
    res.status(200).json(result)
};

const sendCreatedResponse = (result, req, res) => {
    res.status(201).json(result)
};

const sendNoContentResponse = (req, res) => {
    res.status(204).json()
};

export {sendOkResponse, sendCreatedResponse, sendNoContentResponse}