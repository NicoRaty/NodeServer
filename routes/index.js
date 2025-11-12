import express from 'express'
const router = express.Router()

router.get('/', function(req, res, next) {
  res.json({ 'hello' : 'Hello World!' }).status(200).end()
})

export default router