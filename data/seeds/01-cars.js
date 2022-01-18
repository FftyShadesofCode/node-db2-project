// STRETCH
const cars = [
    {
        vin: 'JNKCV64E78M131002',
        make: 'Infiniti',
        model: 'G37',
        mileage: 15382,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'WDBRF40J43F433102',
        make: 'Mercedes',
        model: 'Benz C Class',
        mileage: 843,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: 'JHMFA16586S014014',
        make: 'Honda',
        model: 'Civic',
        mileage: 312,
        transmission: 'manual'
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