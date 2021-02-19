const { Model } = require("objection");

class Contact extends Model {
    static get tableName() {
        return "contacts";
    }
    $formatJson(json) {
        return json;
    }
    static get relationMappings() {
        const transac = require("./transaction");
        return {
            trasaction: {
                relation: Model.HasOneRelation,
                modelClass: transac,
                join: {
                    from: "contacts.payment_id",
                    to: "payment_response.receipt_id",
                },
            },
        };
    }
}

module.exports = Contact;
