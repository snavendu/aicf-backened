const { Model } = require("objection");

class Contact extends Model {
    static get tableName() {
        return "contacts";
    }
    $formatJson(json) {
        return json;
    }
}

module.exports = Contact;
