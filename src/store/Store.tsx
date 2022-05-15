import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import {
  productReducer,
  IProductState,
} from '../reducers/productReducer'

export interface IAppState {
  productState: IProductState;
}

const rootReducer = combineReducers<IAppState>({
  productState: productReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
