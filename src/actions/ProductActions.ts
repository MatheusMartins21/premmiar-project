import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { api } from '../services/api'

import { IProduct, IProductState } from '../reducers/productReducer'

export enum ProductActionTypes {
  GET_ALL = 'GET_ALL',
  DETAIL = 'DETAIL',
  FILTER = 'FILTER',
}

export interface IProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
  products: IProduct[];
}

export interface IProductDetailAction {
  type: ProductActionTypes.DETAIL;
  products: IProduct[];
}

export interface IProductFilterAction {
  type: ProductActionTypes.FILTER;
  products: IProduct[];
}

export type ProductActions = IProductGetAllAction | IProductDetailAction | IProductFilterAction;

export const getAllProducts: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>> = () => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await api.get('/api/products');
      dispatch({
        products: response.data.products,
        type: ProductActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export const getFilteredProducts: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductFilterAction>> = (filterName, filterValue) => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await api.get('/api/products');
      console.log(response)
      const filteredProducts = response.data.products.filter((product: any) => filterName == 'team' ? product.team === filterValue : product.category === filterValue);
      console.log(filterName)
      console.log(filterValue)
      console.log(filteredProducts)
      dispatch({
        products: filteredProducts,
        type: ProductActionTypes.DETAIL,
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export const getDetailProduct: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductDetailAction>> = (uuid) => {
  return async(dispatch: Dispatch) => {
    try {
      const response = await api.get('/api/products');
      const productDetail = response.data.products.filter((product: any) => product.uuid === uuid);
      console.log(productDetail)
      dispatch({
        products: productDetail,
        type: ProductActionTypes.DETAIL,
      });
    } catch (err) {
      console.error(err);
    }
  }
}