import { request } from './request.js'
import products from './products.js'

//service
request().then(product => {
  products(product)
})
