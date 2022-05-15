import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ProductShowcase } from '../components/ProductShowcase'

import { IAppState } from '../store/Store'
import { IProduct } from '../reducers/productReducer'
import { getFilteredProducts } from '../actions/ProductActions'

interface IProps {
  getFilteredProducts: Function,
	products: IProduct[];
}

export const ProductFilterList: React.FunctionComponent<IProps> = ({ getFilteredProducts, products }) => {
  const { filterName, filterValue } = useParams();
  
  React.useEffect(() => {
		getFilteredProducts(filterName, filterValue);
	}, [getFilteredProducts]);

  return (
    <>
      {products && products.map(product => {
        let discountVisibility: any = product.discount ? 'visibility' : 'hidden';
        let calculatedAmount: any = product.discount 
          ? `Por ${product.amount - (product.amount * (product.discount / 100))}`
          : product.amount;

        return (
          <ProductShowcase
            key={product.uuid}
            uuid={product.uuid}
            title={product.title}
            image={product.image}
            amount={product.amount}
            discountVisibility={discountVisibility}
            calculatedAmount={calculatedAmount}
          />
        );
      })}
    </>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    products: store.productState.products,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getFilteredProducts: (filterName: string, filterValue: string) => dispatch(getFilteredProducts(filterName, filterValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilterList)