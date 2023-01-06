const joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const response = require('../helpers/response')
const { user, role } = require('../models')
const { Op } = require('sequelize')

const { APP_KEY } = process.env

module.exports = {
  login: async (req, res) => {
    try {
      const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
        cost_center: joi.string().allow('')
      })
      const { value: results, error } = schema.validate(req.body)
      if (error) {
        return response(res, 'Error', { error: error.message }, 401, false)
      } else {
        if (results.username === 'p000' || results.username === 'P000') {
          const result = await user.findOne({
            where: {
              username: { [Op.like]: `%${results.username}%` }
            },
            include: [{ model: role, as: 'role' }]
          }
          )
          if (result) {
            const { id, kode_plant, level, username, fullname, email, role } = result
            bcrypt.compare(results.password, result.password, function (_err, result) {
              if (result) {
                jwt.sign({ id: id, level: level, kode: kode_plant, name: username, fullname: fullname, role: role.name }, `${APP_KEY}`, (_err, token) => {
                  return response(res, 'login success', { user: { id, kode_plant, level, username, fullname, email, role: role.name, cost_center: results.cost_center }, Token: `${token}` })
                })
              } else {
                return response(res, 'Wrong password', {}, 400, false)
              }
            })
          } else {
            return response(res, 'username is not registered', {}, 400, false)
          }
        } else {
          const result = await user.findOne({ where: { username: results.username }, include: [{ model: role, as: 'role' }] })
          if (result) {
            const { id, kode_plant, level, username, fullname, email, role } = result
            bcrypt.compare(results.password, result.password, function (_err, result) {
              if (result) {
                jwt.sign({ id: id, level: level, kode: kode_plant, name: username, fullname: fullname, role: role.name }, `${APP_KEY}`, (_err, token) => {
                  return response(res, 'login success', { user: { id, kode_plant, level, username, fullname, email, role: role.name }, Token: `${token}` })
                })
              } else {
                return response(res, 'Wrong password', {}, 400, false)
              }
            })
          } else {
            return response(res, 'username is not registered', {}, 400, false)
          }
        }
      }
    } catch (error) {
      return response(res, error.message, {}, 500, false)
    }
  },
  register: async (req, res) => {
    try {
      const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required(),
        kode_plant: joi.string().allow(''),
        level: joi.number().required(),
        email: joi.string().email().required()
      })
      const { value: results, error } = schema.validate(req.body)
      if (error) {
        return response(res, 'Error', { error: error.message }, 401, false)
      } else {
        const result = await user.findOne({ where: { username: results.username } })
        if (result) {
          return response(res, 'username already use', {}, 404, false)
        } else {
          results.password = await bcrypt.hash(results.password, await bcrypt.genSalt())
          const result = await user.create(results)
          if (result) {
            return response(res, 'Add User succesfully', { result })
          } else {
            return response(res, 'Fail to create user', {}, 400, false)
          }
        }
      }
    } catch (error) {
      return response(res, error.message, {}, 500, false)
    }
  }
}
