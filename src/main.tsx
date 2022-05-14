import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createServer, Model } from 'miragejs'
import App from './App'
import './index.css'

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          uuid: '3a7a4922-2ad7-4adc-a68d-c808b24782ae',
          title: 'Uniforme Cincinnati Bengals',
          description: 'Uniforme Cincinnati Bengals 100% Poliester',
          image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/862/279/products/thumb-3161-07ca21906c145bc09115712480190573-1024-1024.jpg',
          amount: 4500,
          discount: 25,
          createdAt: new Date('2022-05-10 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return this.schema.all('product')
    })

    this.post('/products', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('product', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
