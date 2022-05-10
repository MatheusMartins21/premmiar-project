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
          title: 'Vandal Sublime',
          description: 'Skin da coleção Sublime',
          image: 'https://static.wikia.nocookie.net/valorant/images/a/aa/Prime_Vandal.png',
          amount: 4500,
          discount: 25,
          createdAt: new Date('2022-05-10 09:00:00'),
        },
        {
          uuid: 'cc6ae594-5074-4a6e-aa54-a5a6ddfbcbfe',
          title: 'Bulldog Glitchpop',
          description: 'Skin da coleção Glitchpop',
          image: 'https://static.wikia.nocookie.net/valorant/images/7/74/Glitchpop_Bulldog.png',
          amount: 3000,
          createdAt: new Date('2022-05-10 09:00:00'),
        },
        {
          uuid: '8dbc46b2-189d-49fc-b06d-d9e8d60413b9',
          title: 'Sheriff Singularidade',
          description: 'Skin da coleção Singularidade',
          image: 'https://static.wikia.nocookie.net/valorant/images/9/9f/Singularity_Sheriff.png',
          amount: 3500,
          discount: 15,
          createdAt: new Date('2022-05-10 09:00:00'),
        },
        {
          uuid: 'e4759bf6-daae-496d-b3c8-c49449b8ceee',
          title: 'Vandal Saqueadora',
          description: 'Skin da coleção Saqueador',
          image: 'https://static.wikia.nocookie.net/valorant/images/2/27/Reaver_Vandal.png',
          amount: 4500,
          discount: 5,
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
