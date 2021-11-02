import express from 'express'
import config from './config'

import cors from 'cors'

import productsRoutes from './routes/products.routes'

const app = express()

app.use(cors());

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes)

export default app