import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { ChakraProvider, propNames } from '@chakra-ui/react'
import { createServer, Model } from 'miragejs'

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
          amount: 4000,
          discount: 50,
          createdAt: new Date('2022-05-10 09:00:00'),
        },
        {
          uuid: '40d17fd8-fcff-46e7-8992-7b876caa0b62',
          title: 'Bola Futebol Americano',
          description: 'Bola Futebol Americano Nike Vapor 24/7 Oficial',
          image: 'https://images.lojanike.com.br/1024x1024/produto/bola-futebol-americano-nike-vapor-247-oficial-FT0268-211-1.png',
          amount: 5000,
          discount: 0,
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

import configureStore, { IAppState } from './store/Store'
import { getAllProducts } from './actions/ProductActions'

import App from './App'
import './index.css'

interface IProps {
  store: Store<IAppState>;
}

const store = configureStore();

const Root: React.FC<IProps> = props => {
  return (
    <React.StrictMode>
      <Provider store={props.store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root store={store} />)
