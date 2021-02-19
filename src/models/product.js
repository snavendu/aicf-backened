const { Model } = require("objection");

class Products extends Model {
    static get tableName() {
        return "products";
    }
    $formatJson(json) {
        return json;
    }
}

module.exports = Products;
