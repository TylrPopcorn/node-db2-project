const Car = require("./cars-model")
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const cars = await Car.getById()
    if (!cars) {
      next({
        status: 404,
        message: "Not found!"
      })
    } else {
      req.car = cars
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin) {
    return next({
      status: 400,
      message: 'vin is missing',
    })
  }

  if (!req.body.make) {
    return next({
      status: 400,
      message: 'make is missing',
    })
  }

  if (!req.body.model) {
    return next({
      status: 400,
      message: 'model is missing',
    })
  }

  if (!req.body.mileage) {
    return next({
      status: 400,
      message: 'mileage is missing',
    })
  }

  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (vinValidator.validate(req.body.vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${req.body.vin} is invalid.`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const existing = await Car.getByVin(req.body.vin)
    if (!existing) {
      next()
    } else {
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`
      })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}