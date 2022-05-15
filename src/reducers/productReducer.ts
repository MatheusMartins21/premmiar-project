import { Reducer } from 'redux'
import { 
  ProductActions,
  ProductActionTypes
} from '../actions/ProductActions'

export interface IProduct {
  uuid: string;
  title: string;
  description: string;
  image: string;
  amount: number;
  discount: number;
  createdAt: Date;
}

export interface IProductState {
  readonly products: IProduct[];
}

const initialProductState: IProductState = {
  products: [],
}

export const productReducer: Reducer<IProductState, ProductActions> = (
  state = initialProductState,
  action
) => {
  switch (action.type) {
    case ProductActionTypes.GET_ALL: {
      return {
        ...state,
        products: action.products,
      };
    }
    default: 
      return state;
  }
}
