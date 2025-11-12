import express from 'express'
import http from 'http'

import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import homeRouter from './routes/home.js'
import dataRouter from './routes/data.js'
import indexRouter from './routes/index.js'

const app = express()
const swaggerDocument = YAML.load('./openapi.yaml')

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/', homeRouter)
app.use('/data', dataRouter)
app.use('/index', indexRouter)

const server = http.createServer( app )

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})



export default app