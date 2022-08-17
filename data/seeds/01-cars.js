// STRETCH
const cars = [
    {
        vin: '1123456135',
        make: 'nissan',
        model: 'prius',
        mileage: 235444,

        //not required:
        title: 'clean asf',
        transmission: 'automatic'
    },
    {
        vin: '0403952533',
        make: 'nissan',
        model: 'armada',
        mileage: 104253,

        //not required:
        title: 'ok',
        transmission: 'automatic'
    },
]

exports.seed = function (knex) {
    return knex('cars')
        .truncate().then(() => {
            return knex('cars').insert(cars)
        })
}