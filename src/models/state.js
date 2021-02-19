const { Model } = require("objection");

class State extends Model {
    static get tableName() {
        return "directory";
    }
    $formatJson(json) {
        return json;
    }
}

module.exports = State;
