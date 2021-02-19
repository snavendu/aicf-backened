const Documents = require("./../models/documents");
const path = require("path");
const fs = require("fs");
const uploadController = async (req, res) => {
    console.log("upload controller");
    const dirPath = path.join(__dirname, "../../assets/uploads/");
    const dirPath2 = path.join(__dirname, "../../assets/temp/");
    const path1 = fs.readFileSync(dirPath + req.file.filename);
    console.log("path", path1);
    Documents.query().insert({ file_type: "image", file_name: path1 });
    // .then((image) => fs.writeFileSync(dirPath2 + image.data));
    res.send("uploaded succesfully");
};

module.exports = uploadController;
