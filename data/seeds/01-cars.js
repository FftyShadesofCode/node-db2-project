// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 15382,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '11111111111111112',
        make: 'dodge',
        model: 'stratus',
        mileage: 843,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '11111111111111113',
        make: 'dodge',
        model: 'ram',
        mileage: 312,
        transmission: 'automatic'
    },
]

// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
//
// }

exports.seed = async function (knex) {
    await knex('cars').truncate().then()
    await knex('cars').insert(cars)
}