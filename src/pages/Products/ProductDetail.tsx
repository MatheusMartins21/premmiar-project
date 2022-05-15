import React from 'react'
import {
	Grid,
	GridItem,
	Box,
	Flex,
	Image,
	Heading,
	Text,
	Input,
	Button
} from '@chakra-ui/react'
import { connect } from 'react-redux'

import { Link, useParams } from 'react-router-dom'

import { IAppState } from '../../store/Store'
import { IProduct } from '../../reducers/productReducer'

interface IProps {
	products: IProduct[],
}

class ProductDetail extends React.Component<IProps> {
	public render() {
    const { products } = this.props;
		return (
			<>
				{products && products.map(product => {
					let discountVisibility: any = product.discount ? 'visibility' : 'hidden';
          let calculatedAmount: any = product.discount 
            ? `Por ${product.amount * product.discount/100}`
            : product.amount;

					return (
						<Grid 
							key={product.uuid}
							p='10'
							templateColumns='repeat(10, 1fr)'
							gap={10}
						>
							<GridItem colSpan={6}>
								<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
									<Flex flexDirection='column'>
										<Box borderBottom='1px' borderColor='blackAlpha.300'>
											<Image p='4rem' width='30rem' display='block' mr='auto' ml='auto' src={product.image} />
										</Box>
										<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
											<Heading p="6" size='sm' color='blackAlpha.900'>DESCRIÇÃO</Heading>
										</Box>
										<Box alignItems='left'>
											<Text p="8" color='blackAlpha.800'>
												{product.description}
											</Text>
										</Box>
									</Flex>
								</Box>
							</GridItem>
							<GridItem colSpan={4}>
								<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
									<Flex flexDirection='column'>
										<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
											<Text p="6" fontSize='1.8rem' color="blackAlpha.700">{product.title}</Text>
										</Box>
										<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
											<Box p="6">
												<Text visibility={discountVisibility} color='blackAlpha.700' fontSize='xl'>De {product.amount} pontos</Text>
												<Text color='gray.500' fontSize='2xl'>{calculatedAmount} pontos</Text>
												<Button mt="6" display='block' mr='auto' ml='auto' bgColor='green.300' size='lg' color='white' _hover={{ bgColor: 'green.400' }} _focus={{ border: 'none' }} _active={{ bgColor: 'green.500' }} >
													ADICIONAR AO CARRINHO
												</Button>
											</Box>
										</Box>
										<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
										<Box p="6">
												<Text color='blue.400' fontSize='md'>FRETE E PRAZO DE ENTREGA</Text>
												<Text mt='2' color='gray.500' fontSize='sm'>Calcule o valor do seu frete e saiba o prazo de entrega.</Text>
												<Flex mt='3' alignItems='center' justifyContent='space-between'>
													<Input placeholder='CEP' width='50%' />
													<Button size='md' color='black' variant='outline'>
														CALCULAR
													</Button>
													<Link to='#'>Procurar CEP</Link>
												</Flex>
											</Box>
										</Box>
									</Flex>
								</Box>
							</GridItem>
						</Grid>
					);
				})}
			</>
		);
	}
}

const mapStateToProps = (store: IAppState) => {
	const { uuid } = useParams();
  return {
    products: store.productState.products.filter((product) => {
			return product.uuid == uuid;
		}),
  };
};

export default connect(mapStateToProps)(ProductDetail)