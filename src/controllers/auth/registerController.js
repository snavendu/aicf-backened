const User = require("../../models/User"),
     Order = require("../../models/Order"),
    { ValidationError } = require("../../errors"),
    config = require("../../config/app"),
    // bcrypt = require('bcrypt'),
    jwt = require("jsonwebtoken"),
    Contact = require("../../models/Contact");
const Product = require("../../models/product");
const path = require("path");
const fs = require("fs");
const Documents = require("./../../models/documents");
const moment = require("moment");

exports.register = async (req, res) => {
    const { body } = req;
    const contact = await Contact.query().insert(body);

    const order = await Order.query().insert({
      contact_id : contact.id,
      created_at : moment().format("YYYY-MM-DD hh:mm:ss"),
      amount: 500
    });

    // if(req.file){
    //     req.file.map(async (file) => {
    //         const dirPath = path.join(__dirname, "../../assets/uploads/");
    //         const path1 = dirPath + file.originalname;
    //         console.log(file);
    //         await Documents.query().insert({
    //             file_type: "image",
    //             file_name: path1,
    //             type_id: file.fieldname,
    //             contact_id: contact.id,
    //         });
    //         // .then((image) => fs.writeFileSync(dirPath2 + image.file_name));
    //     });
    // }

    // const token = jwt.sign({iat: (new Date).getTime(), sub: user.id}, config.key);
    return {contact, order};
};
