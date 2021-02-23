const { Model } = require("objection");

class Contact extends Model {
    static get tableName() {
        return "contacts";
    }
    $formatJson(json) {
        return json;
    }
    static get relationMappings() {
        const transac = require("./Order");
        return {
            trasaction: {
                relation: Model.HasOneRelation,
                modelClass: transac,
                join: {
                    from: "contacts.payment_id",
                    to: "orders.id",
                },
            },
        };
    }
}

module.exports = Contact;
