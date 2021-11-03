import express from 'express'
import config from './config'

import cors from 'cors'

import apiRoutes from './routes/api.routes'

const app = express()

app.use(cors());

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(apiRoutes)

export default app