const User = require('../../models/User'),
    {ValidationError} = require('../../errors'),
    config = require('../../config/app'),
    // bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    Contact = require("../../models/Contact")


exports.register = async req => {
    const {body} = req;
    // if (await Contact.query().where('email', body.email).select('id').first()) {
    //     throw new ValidationError("It seems someone has already take this email address.");
    // }
    // const user = await User.query().insert({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: await bcrypt.hash(req.body.password, 10)
    // });

    const contact = await Contact.query().insert(body);
    // const token = jwt.sign({iat: (new Date).getTime(), sub: user.id}, config.key);
    return  contact;
};
