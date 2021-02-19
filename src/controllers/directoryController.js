const Directory = require("../models/state");
const District = require("../models/district");

const fetchDirectory = async (req, res) => {
    const data = await Directory.query();

    // .query()
    // .whereNotNull("directory.dir_parent_id");
    res.send(data);
};

const fetchDistrict = async (req, res) => {
    const data = await District.query().where("type", "=", "district");
    res.send(data);
};

module.exports = { fetchDirectory, fetchDistrict };
