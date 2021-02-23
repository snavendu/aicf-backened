const { Model } = require("objection");

class Transaction extends Model {
    static get tableName() {
        return "orders";
    }
    static get relationMappings() {
        const contacts = require("./Contact");
        return {
            trasaction: {
                relation: Model.BelongsToOneRelation,
                modelClass: contacts,
                join: {
                    from: "orders.contact_id",
                    to: "contacts.id",
                },
            },
        };
    }
    $formatJson(json) {
        return json;
    }
}

module.exports = Transaction;
