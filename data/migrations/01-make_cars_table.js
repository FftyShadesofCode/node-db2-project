exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()

      tbl.string('vin', 17).notNullable().unique()

      tbl.string('make', 150).notNullable()

      tbl.string('model', 150).notNullable()

      tbl.integer('mileage').unsigned().notNullable()

      tbl.string('title', 150).defaultTo('not specified')

      tbl.string('transmission', 150).defaultTo('not specified')
  })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
