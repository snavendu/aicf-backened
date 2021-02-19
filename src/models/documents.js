const { Model } = require("objection");

class Documents extends Model {
    static get tableName() {
        return "documents";
    }
    $formatJson(json) {
        return json;
    }
}

module.exports = Documents;
