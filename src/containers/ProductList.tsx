import React from 'react'
import { connect } from 'react-redux'

import { ProductShowcase } from '../components/ProductShowcase'

import { IAppState } from '../store/Store'
import { IProduct } from '../reducers/productReducer'
import { getAllProducts } from '../actions/ProductActions'

interface IProps {
  getAllProducts: Function,
	products: IProduct[];
}

export const ProductList: React.FunctionComponent<IProps> = ({ getAllProducts, products }) => {
  React.useEffect(() => {
		getAllProducts();
	}, [getAllProducts]);

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
    getAllProducts: () => dispatch(getAllProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)