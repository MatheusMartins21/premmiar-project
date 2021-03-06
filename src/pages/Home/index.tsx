import {
	Grid,
	GridItem,
	Box,
	Flex,
} from '@chakra-ui/react'

import ProductFilterAccordion from '../../components/ProductFilterAccordion'
import ProductList from '../../containers/ProductList'

function Home() {
	return (
		<>
		<Grid 
			p='10'
			templateColumns='repeat(4, 1fr)'
			gap={4}
		>
			<GridItem colSpan={1}>
				<ProductFilterAccordion />
			</GridItem>
			<GridItem colSpan={3}>
				<Box>
					<Flex flexWrap='wrap'>
						<ProductList />
					</Flex>
				</Box>
			</GridItem>
		</Grid>
		</>
	)
}

export default Home;