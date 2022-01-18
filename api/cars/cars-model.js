const db = require('../../data/db-config')

async function getAll() {
    let data = await db('cars')

    if (data.length) {
        return data
    } else {
        const arr = []
        return arr
    }
}

async function getById(id) {
    const obj = await db('cars').where('id', id).first()
    if (obj) {
        return obj
    } else {
        const arr = []
        return arr
    }
}

const create = (car) => {
    return db('cars')
        .insert(car)
        .then(([id]) => getById(id));
}


module.exports = {
    getAll,
    getById,
    create
}