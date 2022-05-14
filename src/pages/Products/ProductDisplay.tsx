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
import { Link, useParams } from 'react-router-dom'

function ProductDisplay() {
	const { uuid } = useParams();

	return (
		<>
			<Grid 
				p='10'
				templateColumns='repeat(10, 1fr)'
				gap={10}
			>
				<GridItem colSpan={6}>
					<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
						<Flex flexDirection='column'>
							<Box borderBottom='1px' borderColor='blackAlpha.300'>
								<Image p='4rem' width='30rem' display='block' mr='auto' ml='auto' src='https://d3ugyf2ht6aenh.cloudfront.net/stores/862/279/products/thumb-3161-07ca21906c145bc09115712480190573-1024-1024.jpg' />
							</Box>
							<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
								<Heading p="6" size='sm' color='blackAlpha.900'>DESCRIÇÃO</Heading>
							</Box>
							<Box alignItems='left'>
								<Text p="8" color='blackAlpha.800'>
									Uniforme Cincinnati Bengals 100% Poliester
								</Text>
							</Box>
						</Flex>
					</Box>
				</GridItem>
				<GridItem colSpan={4}>
					<Box border='1px' borderRadius='.5rem' borderColor='blackAlpha.300'>
						<Flex flexDirection='column'>
							<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
								<Text p="6" fontSize='1.8rem' color="blackAlpha.700">Uniforme Cincinnati Bengals</Text>
							</Box>
							<Box alignItems='left' borderBottom='1px' borderColor='blackAlpha.300'>
								<Box p="6">
									<Text color='blackAlpha.700' fontSize='xl'>De 5000 pontos</Text>
									<Text color='gray.500' fontSize='2xl'>Por 4000 pontos </Text>
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
		</>
	)
}

export default ProductDisplay;