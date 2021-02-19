const { Router } = require("express"),
    bodyParser = require("body-parser"),
    authMiddleware = require("../middlewares/authentication");
const controller = require("../controllers");
const upload = require("./../middlewares/imageUpload");
const userController = controller("userController"),
    loginController = controller("auth/loginController"),
    registerController = controller("auth/registerController"),
    uploadController = controller("/uploadController");
directoryController = controller("/directoryController");
const paymentController = require("./../controllers/paymentController");

const route = Router();
route.use(bodyParser.json());
route.post("/login", loginController.login);
route.post(
    "/register",
    upload.fields([
        { name: "photo", maxCount: 1 },
        { name: "birth", maxCount: 1 },
    ]),
    registerController.register
);
route.get("/users", userController.index);
route.get("/contacts", userController.index);
route.get("/directory", directoryController.fetchDirectory);
route.post("/payment", paymentController.createOrder);
route.post("/success", paymentController.payOrder);
route.use(authMiddleware());

module.exports = route;
