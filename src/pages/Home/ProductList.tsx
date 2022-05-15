import React from 'react'
import { connect } from 'react-redux'

import { ProductShowcase } from '../../components/ProductShowcase'

import { IAppState } from '../../store/Store'
import { IProduct } from '../../reducers/productReducer'

interface IProps {
	products: IProduct[];
}

class ProductList extends React.Component<IProps> {
  public render() {
    const { products } = this.props;
    console.log(products);
    return (
      <>
        {products && products.map(product => {
          let discountVisibility: any = product.discount ? 'visibility' : 'hidden';
          let calculatedAmount: any = product.discount 
            ? `Por ${product.amount * product.discount/100}`
            : product.amount;

          return (
            <ProductShowcase 
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
}

const mapStateToProps = (store: IAppState) => {
  return {
    products: store.productState.products,
  };
};

export default connect(mapStateToProps)(ProductList)