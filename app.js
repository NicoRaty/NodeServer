import express from 'express'
import { verifyToken } from './middleware/verifytoken.js'
import { rateLimiter } from './middleware/ratelimiter.js'
import YAML from 'yamljs'
import swaggerUI from 'swagger-ui-express'

import homeRouter from './routes/home.js'
import dataRouter from './routes/data.js'
import indexRouter from './routes/index.js'
import loginRouter from './routes/login.js'

const app = express()

const port = 3000

const swaggerDocument = YAML.load('./openapi.yaml')
const swaggerOptions = {}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', homeRouter)
app.use('/data', verifyToken, rateLimiter, dataRouter)
app.use('/index', indexRouter)
app.use('/login', loginRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})

export default app