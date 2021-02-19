const multer = require("multer");
const path = require("path");
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Please upload only images.", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dirPath = path.join(__dirname, "../../assets/uploads/");
        cb(null, dirPath);
    },
    filename: (req, file, cb) => {
        file.originalname = `${Date.now()}-bezkoder-${file.originalname}`;
        if (req.file) {
            const file1 = req.file;
            req.file = [...file1, file];
        } else {
            req.file = [file];
        }

        cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
