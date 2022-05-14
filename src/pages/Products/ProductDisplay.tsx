import {
	Grid,
	GridItem,
	Box,
	Flex,
	Image,
	Text,
	Input,
	Button
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

function ProductDisplay() {
	const { uuid } = useParams();

	return (
		<>
			<Grid 
				p='10'
				templateColumns='repeat(5, 1fr)'
				gap={5}
			>
				<GridItem colSpan={3}>
					<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
						<Flex flexDirection='column'>
							<Box borderBottom='1px' borderColor='blackAlpha.300'>
								<Image p='4rem' display='block' mr='auto' ml='auto' src='https://images.lojanike.com.br/1024x1024/produto/bola-futebol-americano-nike-vapor-247-oficial-FT0268-211-1.png' />
							</Box>
							<Box>
								
							</Box>
						</Flex>
					</Box>
				</GridItem>
				<GridItem colSpan={2}>
					<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
						
					</Box>
				</GridItem>
			</Grid>
		</>
	)
}

export default ProductDisplay;