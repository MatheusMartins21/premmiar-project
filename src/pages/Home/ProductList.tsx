import React from 'react'
import { connect } from 'react-redux'
import {
	Box,
	Image,
	Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
          let productAmount = product.discount 
            ? `Por ${product.amount * product.discount/100}`
            : product.amount;

          return (
            <Box key={product.uuid} _hover={{ borderColor: 'blue.900', border: '2px' }} border='1px' borderRadius='.5rem' borderColor='blackAlpha.300' width='18rem' height='20rem' ml='4' mr='4' mb='8'>
              <Link to={`/products/${product.uuid}`}>
              <Box p='5' height='10rem'>
                <Image height='100' display='block' mr='auto' ml='auto' src={product.image} />
                <Box mt='5' p='5'>
                  <Text textAlign='left' color='blackAlpha.700' fontSize='md'>{product.title}</Text>
                </Box>
              </Box>
              <Box p='12' height='10rem'>
                <Text visibility={discountVisibility} textAlign='left' color='blackAlpha.700' fontSize='xl'>De {product.amount} pontos</Text>
                <Text textAlign='left' color='gray.500' fontSize='2xl'>{productAmount} pontos </Text>
              </Box>
              </Link>
            </Box>
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