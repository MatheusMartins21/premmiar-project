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
    server.create('product', {
      uuid: '3a7a4922-2ad7-4adc-a68d-c808b24782ae',
      title: 'Uniforme Cincinnati Bengals',
      description: 'Uniforme Cincinnati Bengals 100% Poliester',
      image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/862/279/products/thumb-3161-07ca21906c145bc09115712480190573-1024-1024.jpg',
      amount: 4000,
      discount: 75,
      createdAt: new Date('2022-05-10 09:00:00'),
    });
      
        
    server.create('product', {
      uuid: '40d17fd8-fcff-46e7-8992-7b876caa0b62',
      title: 'Bola Futebol Americano',
      description: 'Bola Futebol Americano Nike Vapor 24/7 Oficial',
      image: 'https://images.lojanike.com.br/1024x1024/produto/bola-futebol-americano-nike-vapor-247-oficial-FT0268-211-1.png',
      amount: 5000,
      discount: 0,
      createdAt: new Date('2022-05-10 09:00:00'),
    });

    server.create('product', {
      uuid: '41d17fd8-fcff-46e7-8992-7b876caa0b62',
      title: 'Capacete Futebol Americano Riddell',
      description: 'Capacete de futebol americano Riddell SpeedFlex SEM Facemask',
      image: 'https://guerreirosdofa.com.br/image/cache/catalog/capacete-futebol-americano-riddell-speed-flex3-600x607.jpg',
      amount: 7000,
      discount: 25,
      createdAt: new Date('2022-05-10 09:00:00'),
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/api/products');

    this.post('/api/products', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.products.create(data)
    })

    this.patch('/api/products/:uuid', (schema, request) => {
      let newData = JSON.parse(request.requestBody)
      let uuid = request.params.uuid
      let product = schema.products.findBy({ uuid: uuid })

      return product.update(newData)
    })

    this.delete('/api/products/:uuid', (schema, request) => {
      let uuid = request.params.uuid
      return schema.products.findBy({ uuid: uuid }).destroy();
    })
  }
})

import configureStore, { IAppState } from './store/Store'

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
