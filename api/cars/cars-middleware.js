const Cars = require('./cars-model');
const vinCheck = require('vin-validator');

async function checkCarId(req, res, next) {
    const checkIt = await Cars.getById(req.params.id)

    if (!checkIt || checkIt.length <= 0) {
        next(res.status(404).json({message: `car with id ${req.params.id} is not found`}))

    } else {
        next()
    }
}

const checkCarPayload = (req, res, next) => {
    if (!req.body.vin) return next({
        status: 400,
        message: 'vin is missing'
    })
    if (!req.body.make) return next({
        status: 400,
        message: 'make is missing'
    })
    if (!req.body.model) return next({
        status: 400,
        message: 'model is missing'
    })
    if (!req.body.mileage) return next({
        status: 400,
        message: 'mileage is missing'
    })
    next()
}

const checkVinNumberValid = (req, res, next) => {
    const vin = req.body.vin;
    if (vinCheck.validate(vin)) {
        next()
    } else {
        next(res.status(400).json({message: `vin ${vin} is invalid`}))
    }
}

async function checkVinNumberUnique(req, res, next) {
    const data = await Cars.getAll();
    const checkIt = await data.filter(car => car.vin === req.body.vin)

    if (checkIt.length > 0) {
        next(res.status(400).json({message: `vin ${req.body.vin} already exists`}))

    } else {
        next()
    }


}

module.exports = {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
}