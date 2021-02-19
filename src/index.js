require("dotenv").config();
Promise = require("bluebird");
require("./extensions/response-handler");

const express = require("express"),
    config = require("./config"),
    cors = require("cors"),
    debug = require("debug")("app:server"),
    { web, api } = require("./routes");

const app = express();

app.use(cors());

app.use(web);
app.use("/api", api);

require("./models/connection");
app.listen(process.env.PORT || 3001, () => {
    debug("> Server started http://%s:%s");
});
