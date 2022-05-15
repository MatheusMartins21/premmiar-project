import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { api } from '../services/api'

import { IProduct, IProductState } from '../reducers/productReducer'

export enum ProductActionTypes {
  GET_ALL = 'GET_ALL',
  DETAIL = 'DETAIL',
}

export interface IProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
  products: IProduct[];
}

export interface IProductDetailAction {
  type: ProductActionTypes.DETAIL;
  products: IProduct[];
}

export type ProductActions = IProductGetAllAction | IProductDetailAction;

export const getAllProducts: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>> = () => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await api.get('/products');
      dispatch({
        products: response.data.products,
        type: ProductActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export const getDetailProduct: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductDetailAction>> = (uuid) => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await api.get('/products');
      const productDetail = response.data.products.filter((product: any) => product.uuid === uuid);
      dispatch({
        products: productDetail,
        type: ProductActionTypes.DETAIL,
      });
    } catch (err) {
      console.error(err);
    }
  }
}