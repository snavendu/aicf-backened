const { ResponseError } = require("../errors");
const User = require("../models/User");
const Contact = require("../models/Contact");


exports.index = async req => {
    if (!req.query.page) {
        throw new ResponseError(
            "Page is required" /** response error message */,
            422 /** Response error code */
        );
    }
    return Contact.query().page(parseInt(req.query.page) - 1, 25);
};
