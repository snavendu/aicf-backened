const { Model } = require("objection");

class District extends Model {
    static get tableName() {
        return "directory";
    }
    $formatJson(json) {
        return json;
    }

    static get relationMappings() {
        const State = require("./state");
        const state = {
            relation: Model.BelongsToOneRelation,
            modelClass: State,
            join: { from: "directory.dir_parent_id", to: "directory.id" },
        };
        return { state };
    }
}

module.exports = District;
