import express from 'express'
const router = express.Router()

var data = [
  {
    "id": 1,
    "forename": "Tim",
    "surname": "Berners-Lee"
  },
  {
    "id": 2,
    "forename": "Roy",
    "surname": "Fielding"
  }
]

router.get('/', function(req, res, next) {
  res.json( data ).status(200).end()
})

export default router