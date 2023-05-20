import express from 'express'
import cors from 'cors'
import RouterApi from './infrastructure/web/routes'

import {
  LogErrors,
  ErrorHandler,
  BoomErrorHandler,
  OrmErrorHandler
} from './infrastructure/middlewares/error-handler'

const app = express()

const allowedOrigins = [
  'http://localhost:3000'
]

const allowedHeaders = [
  'Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept',
  'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods',
  'Access-Control-Allow-Credentials'
]

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (allowedOrigins.includes(origin) || origin === undefined || origin === null) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(express.json(), express.urlencoded({ extended: true }))

/**
 * AUTH
 */
// require('./src/utils/auth/index')

app.get('/homeapp', (_req, res) => {
  res.send('Hola mi server user en Express ts desde app')
})

RouterApi(app)

app.use(LogErrors)
app.use(BoomErrorHandler)
app.use(OrmErrorHandler)
app.use(ErrorHandler)

export default app
