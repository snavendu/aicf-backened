const name = 'users';
exports.up = function(knex) {
    return knex.schema.createTable(name, table => {
        table.increments('id');
        table.string('name');
        table.string('email', 100).unique();
        table.string('password', 100);
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(name);
};
