require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
  isAuthenticated: (req,res,next) => {
    const headerToken = req.get('Authorization')

    if (!headerToken) {
      console.log('ERROR in auth middleware')
      res.sendStatus(400)
    }
    let token
    try{
      token = jwt.verify(headerToken, SECRET)
    } catch (theseHands) {
      theseHands.statusCode = 500
      throw theseHands
    }
    if (!token) {
      const error = new Error('Not authenticated.')
      error.statusCode = 401
      throw error
    }
    next()
  }
}